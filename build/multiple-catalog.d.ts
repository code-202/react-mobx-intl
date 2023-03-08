import { Catalog, CatalogMessages, CatalogNormalized, CatalogStatus } from './catalog';
export declare class MultipleCatalog implements Catalog {
    catalogs: Catalog[];
    status: CatalogStatus;
    private _locale;
    constructor(locale: string);
    addCatalog(catalog: Catalog): void;
    getCatalogsByDomain(domain: string): Catalog[];
    get locale(): string;
    get messages(): CatalogMessages;
    get domains(): string[];
    hasDomain(domain: string): boolean;
    prepare(): void;
    private refreshStatus;
    normalize(): MultipleCatalogNormalized;
    denormalize(data: MultipleCatalogNormalized): void;
}
export interface MultipleCatalogNormalized extends CatalogNormalized {
    status: CatalogStatus;
    catalogs: CatalogNormalized[];
}
