import assert from 'node:assert/strict';
import test from 'node:test';
import { catalog } from '../src/content/catalog.ts';
import { publicProducts, validateCatalog } from '../src/catalog/validate.ts';

test('empty catalog validates and publishes nothing', () => {
  assert.deepEqual(validateCatalog(catalog), []);
  assert.deepEqual(publicProducts(catalog), []);
});

test('draft entries never reach the public catalog', () => {
  const draft = {
    id: 'test',
    slug: 'test',
    name: 'Unpublished example',
    manufacturerSku: 'TEST',
    manufacturerId: 'm',
    collectionId: 'c',
    categoryId: 'cat',
    material: 'glass',
    colorFamily: 'blue',
    dimensionsMm: '10x10',
    applications: [],
    images: [],
    evidence: [],
    availability: 'on-request',
    sampleAvailable: false,
    status: 'draft',
  };
  assert.deepEqual(publicProducts({ ...catalog, products: [draft] }), []);
});

test('unknown manufacturer in collection is rejected', () => {
  const invalid = {
    ...catalog,
    collections: [
      {
        id: 'collection',
        slug: 'collection',
        title: 'Example',
        manufacturerId: 'unknown',
        categoryIds: [],
        summary: '',
        images: [],
        evidence: [],
        status: 'draft',
      },
    ],
  };
  assert.ok(
    validateCatalog(invalid).some((item) => item.path.endsWith('manufacturerId')),
  );
});
