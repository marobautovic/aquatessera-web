/** Editorial records are not public offers until explicitly approved. */
export type EditorialStatus =
  | 'draft'
  | 'needs-verification'
  | 'ready-for-review'
  | 'approved'
  | 'archived';

export type Availability = 'on-request' | 'confirmed' | 'unavailable';

export type Asset = {
  path: string;
  alt: string;
  rightsApproved: boolean;
  credit?: string;
};

export type Evidence = {
  sourceUrl: string;
  checkedAt: string;
  note?: string;
};

export type Manufacturer = {
  id: string;
  name: string;
  officialUrl: string;
  commercialRelationshipConfirmed: boolean;
  relationshipLabel?: string;
  status: EditorialStatus;
};

export type Category = {
  id: string;
  slug: string;
  title: string;
  status: EditorialStatus;
};

export type Collection = {
  id: string;
  slug: string;
  title: string;
  manufacturerId: string;
  categoryIds: string[];
  summary: string;
  images: Asset[];
  status: EditorialStatus;
  evidence: Evidence[];
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  manufacturerSku: string;
  manufacturerId: string;
  collectionId: string;
  categoryId: string;
  material: string;
  colorFamily: string;
  dimensionsMm: string;
  applications: string[];
  images: Asset[];
  technicalSheetUrl?: string;
  evidence: Evidence[];
  availability: Availability;
  sampleAvailable: boolean;
  status: EditorialStatus;
  approvedBy?: string;
  approvedAt?: string;
};

export type ProductVariant = {
  id: string;
  productId: string;
  manufacturerSku: string;
  label: string;
  attributes: Record<string, string>;
  status: EditorialStatus;
};

export type Catalog = {
  manufacturers: Manufacturer[];
  categories: Category[];
  collections: Collection[];
  products: Product[];
  variants: ProductVariant[];
};
