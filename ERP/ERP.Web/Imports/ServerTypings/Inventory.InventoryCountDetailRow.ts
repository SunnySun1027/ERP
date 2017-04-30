namespace ERP.Inventory {
    export interface InventoryCountDetailRow {
        Id?: number;
        InventoryId?: string;
        ProductID?: number;
        ColorID?: number;
        SizeID?: number;
        Quantity?: number;
        OriginalQuantity?: number;
        Description?: string;
        InventoryDepotId?: string;
        InventoryCheckDate?: string;
        InventoryDescription?: string;
        InventoryState?: number;
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
        ColorName?: string;
        ColorColorGroupId?: number;
        SizeName?: string;
        SizeSizeGroupId?: number;
    }

    export namespace InventoryCountDetailRow {
        export const idProperty = 'Id';
        export const nameProperty = 'InventoryId';
        export const localTextPrefix = 'Inventory.InventoryCountDetail';

        export namespace Fields {
            export declare const Id: string;
            export declare const InventoryId: string;
            export declare const ProductID: string;
            export declare const ColorID: string;
            export declare const SizeID: string;
            export declare const Quantity: string;
            export declare const OriginalQuantity: string;
            export declare const Description: string;
            export declare const InventoryDepotId: string;
            export declare const InventoryCheckDate: string;
            export declare const InventoryDescription: string;
            export declare const InventoryState: string;
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
            export declare const ColorName: string;
            export declare const ColorColorGroupId: string;
            export declare const SizeName: string;
            export declare const SizeSizeGroupId: string;
        }

        ['Id', 'InventoryId', 'ProductID', 'ColorID', 'SizeID', 'Quantity', 'OriginalQuantity', 'Description', 'InventoryDepotId', 'InventoryCheckDate', 'InventoryDescription', 'InventoryState', 'ProductName', 'ProductSupplierId', 'ProductCategoryId', 'ProductQuantityPerUnit', 'ProductUnitPrice', 'ProductUnitsInStock', 'ProductUnitsOnOrder', 'ProductReorderLevel', 'ProductDiscontinued', 'ProductProductImage', 'ColorName', 'ColorColorGroupId', 'SizeName', 'SizeSizeGroupId'].forEach(x => (<any>Fields)[x] = x);
    }
}

