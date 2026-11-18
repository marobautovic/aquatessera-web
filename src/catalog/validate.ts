import type { Catalog, EditorialStatus, Product } from './schema';

export type ValidationIssue = { path: string; message: string };

const isNonEmpty = (value: string | undefined): boolean =>
  Boolean(value?.trim());

const validDate = (value: string): boolean =>
  /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(value));

const approved = (
  id: string,
  entries: { id: string; status: EditorialStatus }[],
): boolean => entries.some((entry) => entry.id === id && entry.status === 'approved');

/** Only explicitly approved records with approved dependencies may reach the public UI. */
export function publicProducts(catalog: Catalog): Product[] {
  return catalog.products.filter(
    (product) =>
      product.status === 'approved' &&
      approved(product.manufacturerId, catalog.manufacturers) &&
      approved(product.collectionId, catalog.collections) &&
      approved(product.categoryId, catalog.categories) &&
      isNonEmpty(product.approvedBy) &&
      Boolean(product.approvedAt && validDate(product.approvedAt)) &&
      product.images.some(
        (image) => image.rightsApproved && isNonEmpty(image.alt),
      ) &&
      product.evidence.length > 0 &&
      product.evidence.every(
        (item) => isNonEmpty(item.sourceUrl) && validDate(item.checkedAt),
      ) &&
      product.availability !== 'unavailable',
  );
}

export function validateCatalog(catalog: Catalog): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const add = (path: string, message: string): void => {
    issues.push({ path, message });
  };
  const sets = [
    ['manufacturers', catalog.manufacturers],
    ['categories', catalog.categories],
    ['collections', catalog.collections],
    ['products', catalog.products],
    ['variants', catalog.variants],
  ] as const;

  for (const [name, entries] of sets) {
    const ids = new Set<string>();
    for (const [index, entry] of entries.entries()) {
      if (!isNonEmpty(entry.id)) add(`${name}[${index}].id`, 'ID is required');
      if (ids.has(entry.id)) add(`${name}[${index}].id`, 'Duplicate ID');
      ids.add(entry.id);
    }
  }

  const exists = (id: string, entries: { id: string }[]): boolean =>
    entries.some((entry) => entry.id === id);
  const slugs = new Set<string>();

  for (const [index, collection] of catalog.collections.entries()) {
    const at = `collections[${index}]`;
    if (!exists(collection.manufacturerId, catalog.manufacturers)) {
      add(`${at}.manufacturerId`, 'Unknown manufacturer');
    }
    for (const id of collection.categoryIds) {
      if (!exists(id, catalog.categories)) {
        add(`${at}.categoryIds`, `Unknown category: ${id}`);
      }
    }
    if (slugs.has(`collection:${collection.slug}`)) {
      add(`${at}.slug`, 'Duplicate collection slug');
    }
    slugs.add(`collection:${collection.slug}`);
    if (
      collection.status === 'approved' &&
      !collection.images.some(
        (image) => image.rightsApproved && isNonEmpty(image.alt),
      )
    ) {
      add(
        `${at}.images`,
        'Approved collection needs a licensed image with alt text',
      );
    }
  }

  const skus = new Set<string>();

  for (const [index, product] of catalog.products.entries()) {
    const at = `products[${index}]`;
    if (!exists(product.manufacturerId, catalog.manufacturers)) {
      add(`${at}.manufacturerId`, 'Unknown manufacturer');
    }
    const collection = catalog.collections.find(
      (item) => item.id === product.collectionId,
    );
    if (!collection) {
      add(`${at}.collectionId`, 'Unknown collection');
    } else if (collection.manufacturerId !== product.manufacturerId) {
      add(`${at}.collectionId`, 'Manufacturer mismatch');
    }
    if (!exists(product.categoryId, catalog.categories)) {
      add(`${at}.categoryId`, 'Unknown category');
    }
    if (collection && !collection.categoryIds.includes(product.categoryId)) {
      add(`${at}.categoryId`, 'Category not included in collection');
    }
    if (slugs.has(`product:${product.slug}`)) {
      add(`${at}.slug`, 'Duplicate product slug');
    }
    slugs.add(`product:${product.slug}`);

    const skuKey = `${product.manufacturerId}:${product.manufacturerSku}`;
    if (!isNonEmpty(product.manufacturerSku)) {
      add(`${at}.manufacturerSku`, 'SKU is required');
    }
    if (skus.has(skuKey)) {
      add(`${at}.manufacturerSku`, 'Duplicate manufacturer SKU');
    }
    skus.add(skuKey);

    if (product.status === 'approved') {
      if (
        !isNonEmpty(product.approvedBy) ||
        !product.approvedAt ||
        !validDate(product.approvedAt)
      ) {
        add(`${at}.approval`, 'Approval name and YYYY-MM-DD date required');
      }
      if (
        !product.images.some(
          (image) => image.rightsApproved && isNonEmpty(image.alt),
        )
      ) {
        add(`${at}.images`, 'Licensed image with alt text required');
      }
      if (
        !product.evidence.length ||
        product.evidence.some(
          (item) => !isNonEmpty(item.sourceUrl) || !validDate(item.checkedAt),
        )
      ) {
        add(`${at}.evidence`, 'Verified sources and dates required');
      }
      if (product.availability === 'unavailable') {
        add(`${at}.availability`, 'Unavailable product cannot be listed');
      }
      if (!approved(product.manufacturerId, catalog.manufacturers)) {
        add(`${at}.manufacturerId`, 'Manufacturer must be approved');
      }
      if (!approved(product.collectionId, catalog.collections)) {
        add(`${at}.collectionId`, 'Collection must be approved');
      }
      if (!approved(product.categoryId, catalog.categories)) {
        add(`${at}.categoryId`, 'Category must be approved');
      }
    }
  }

  for (const [index, variant] of catalog.variants.entries()) {
    if (!exists(variant.productId, catalog.products)) {
      add(`variants[${index}].productId`, 'Unknown product');
    }
  }

  return issues;
}
