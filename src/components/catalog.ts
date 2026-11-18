import type { Catalog, Collection, Product } from '../catalog/schema';
import { publicProducts } from '../catalog/validate';

const safe = (value: string): string =>
  value.replace(/[&<>"']/g, (character) => {
    const replacements: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };
    return replacements[character]!;
  });

export function collectionCard(
  collection: Collection,
  productCount: number,
): string {
  const image = collection.images.find((item) => item.rightsApproved);
  return `<article class="catalog-card">
    ${image ? `<div class="catalog-card-image"><img loading="lazy" src="${safe(image.path)}" alt="${safe(image.alt)}" /></div>` : ''}
    <div class="catalog-card-body">
      <p class="catalog-overline">KOLEKCIJA Â· ${productCount} PROIZVODA</p>
      <h3>${safe(collection.title)}</h3>
      <p>${safe(collection.summary)}</p>
      <a href="#kontakt" aria-label="ZatraÅ¾ite informacije o kolekciji ${safe(collection.title)}">ZatraÅ¾ite informacije <span aria-hidden="true">â</span></a>
    </div>
  </article>`;
}

export function productCard(product: Product): string {
  const image = product.images.find((item) => item.rightsApproved)!;
  return `<article class="catalog-card">
    <div class="catalog-card-image"><img loading="lazy" src="${safe(image.path)}" alt="${safe(image.alt)}" /></div>
    <div class="catalog-card-body">
      <p class="catalog-overline">${safe(product.manufacturerSku)}</p>
      <h3>${safe(product.name)}</h3>
      <p>${safe(product.material)} Â· ${safe(product.dimensionsMm)}</p>
      <a href="#kontakt" aria-label="Upit za proizvod ${safe(product.name)}">Upit za proizvod <span aria-hidden="true">â</span></a>
    </div>
  </article>`;
}

export function renderCatalogPreview(catalog: Catalog): string {
  const products = publicProducts(catalog);
  const collections = catalog.collections.filter(
    (item) =>
      item.status === 'approved' &&
      catalog.manufacturers.some(
        (manufacturer) =>
          manufacturer.id === item.manufacturerId &&
          manufacturer.status === 'approved',
      ) &&
      item.images.some(
        (image) => image.rightsApproved && Boolean(image.alt.trim()),
      ),
  );

  if (!collections.length && !products.length) {
    return `<div class="catalog-empty" role="status">
      <span class="catalog-empty-symbol" aria-hidden="true">â</span>
      <div>
        <p class="catalog-overline">KURIRANI ODABIR Â· U PRIPREMI</p>
        <h3>Detalji su vaÅ¾ni.</h3>
        <p>Pripremamo pregled odabranih kolekcija. Za informacije o mozaicima, keramici i materijalima za vaÅ¡ bazen, javite nam se izravno.</p>
        <a class="text-link" href="#kontakt">Razgovarajmo o materijalima <span aria-hidden="true">â</span></a>
      </div>
    </div>`;
  }

  return `<div class="catalog-preview-grid">
    ${collections.map((item) => collectionCard(item, products.filter((product) => product.collectionId === item.id).length)).join('')}
    ${products
      .filter(
        (product) =>
          !collections.some((item) => item.id === product.collectionId),
      )
      .map(productCard)
      .join('')}
  </div>`;
}
