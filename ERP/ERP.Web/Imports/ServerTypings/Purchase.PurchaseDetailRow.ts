namespace ERP.Purchase {
    export interface PurchaseDetailRow {
        Id?: number;
        PurchaseId?: string;
        ProductID?: number;
        ColorID?: number;
        SizeID?: number;
        UnitPrice?: number;
        Quantity?: number;
        Description?: string;
        PurchaseSupplierId?: number;
        PurchaseUserId?: number;
        PurchaseCreateDate?: string;
        PurchaseDescription?: string;
        PurchaseState?: number;
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

    export namespace PurchaseDetailRow {
        export const idProperty = 'Id';
        export const nameProperty = 'PurchaseId';
        export const localTextPrefix = 'Purchase.PurchaseDetail';

        export namespace Fields {
            export declare const Id: string;
            export declare const PurchaseId: string;
            export declare const ProductID: string;
            export declare const ColorID: string;
            export declare const SizeID: string;
            export declare const UnitPrice: string;
            export declare const Quantity: string;
            export declare const Description: string;
            export declare const PurchaseSupplierId: string;
            export declare const PurchaseUserId: string;
            export declare const PurchaseCreateDate: string;
            export declare const PurchaseDescription: string;
            export declare const PurchaseState: string;
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

        ['Id', 'PurchaseId', 'ProductID', 'ColorID', 'SizeID', 'UnitPrice', 'Quantity', 'Description', 'PurchaseSupplierId', 'PurchaseUserId', 'PurchaseCreateDate', 'PurchaseDescription', 'PurchaseState', 'ProductName', 'ProductSupplierId', 'ProductCategoryId', 'ProductQuantityPerUnit', 'ProductUnitPrice', 'ProductUnitsInStock', 'ProductUnitsOnOrder', 'ProductReorderLevel', 'ProductDiscontinued', 'ProductProductImage', 'ProductGalleryImages', 'ColorName', 'ColorColorGroupId', 'SizeName', 'SizeSizeGroupId'].forEach(x => (<any>Fields)[x] = x);
    }
}

