namespace ERP.Inventory {
    export interface DepotStockRow {
        Id?: number;
        DepotID?: string;
        ProductID?: number;
        ColorID?: number;
        SizeID?: number;
        Quantity?: number;
        DepotDepotName?: string;
        DepotDescription?: string;
        ProductName?: string;
        ProductSupplierId?: number;
        ProductCategoryId?: number;
        ProductQuantityPerUnit?: string;
        ProductUnitPrice?: number;
        ProductUnitsInStock?: number;
        ProductUnitsOnOrder?: number;
        ProductReorderLevel?: number;
        ProductDiscontinued?: boolean;
        ProductProductImage?: string;
        ProductGalleryImages?: string;
        ColorName?: string;
        ColorColorGroupId?: number;
        SizeName?: string;
        SizeSizeGroupId?: number;
    }

    export namespace DepotStockRow {
        export const idProperty = 'Id';
        export const nameProperty = 'DepotID';
        export const localTextPrefix = 'Inventory.DepotStock';
        export const lookupKey = 'Inventory.DepotStock';

        export function getLookup(): Q.Lookup<DepotStockRow> {
            return Q.getLookup<DepotStockRow>('Inventory.DepotStock');
        }

        export namespace Fields {
            export declare const Id: string;
            export declare const DepotID: string;
            export declare const ProductID: string;
            export declare const ColorID: string;
            export declare const SizeID: string;
            export declare const Quantity: string;
            export declare const DepotDepotName: string;
            export declare const DepotDescription: string;
            export declare const ProductName: string;
            export declare const ProductSupplierId: string;
            export declare const ProductCategoryId: string;
            export declare const ProductQuantityPerUnit: string;
            export declare const ProductUnitPrice: string;
            export declare const ProductUnitsInStock: string;
            export declare const ProductUnitsOnOrder: string;
            export declare const ProductReorderLevel: string;
            export declare const ProductDiscontinued: string;
            export declare const ProductProductImage: string;
            export declare const ProductGalleryImages: string;
            export declare const ColorName: string;
            export declare const ColorColorGroupId: string;
            export declare const SizeName: string;
            export declare const SizeSizeGroupId: string;
        }

        ['Id', 'DepotID', 'ProductID', 'ColorID', 'SizeID', 'Quantity', 'DepotDepotName', 'DepotDescription', 'ProductName', 'ProductSupplierId', 'ProductCategoryId', 'ProductQuantityPerUnit', 'ProductUnitPrice', 'ProductUnitsInStock', 'ProductUnitsOnOrder', 'ProductReorderLevel', 'ProductDiscontinued', 'ProductProductImage', 'ProductGalleryImages', 'ColorName', 'ColorColorGroupId', 'SizeName', 'SizeSizeGroupId'].forEach(x => (<any>Fields)[x] = x);
    }
}

