
namespace ERP.Sale {
    export interface RetailOrderDetailsRow {
        Id?: number;
        OrderId?: string;
        ProductID?: number;
        ColorID?: number;
        SizeID?: number;
        UnitPrice?: number;
        Quantity?: number;
        Description?: string;
        OrderCustomerId?: string;
        OrderUserId?: number;
        OrderCreateDate?: string;
        OrderDescription?: string;
        OrderState?: number;
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

    export namespace RetailOrderDetailsRow {
        export const idProperty = 'Id';
        export const nameProperty = 'OrderId';
        export const localTextPrefix = 'Sale.RetailOrderDetails';

        export namespace Fields {
            export declare const Id;
            export declare const OrderId;
            export declare const ProductID;
            export declare const ColorID;
            export declare const SizeID;
            export declare const UnitPrice;
            export declare const Quantity;
            export declare const Description;
            export declare const OrderCustomerId: string;
            export declare const OrderUserId: string;
            export declare const OrderCreateDate: string;
            export declare const OrderDescription: string;
            export declare const OrderState: string;
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

        ['Id', 'OrderId', 'ProductID', 'ColorID', 'SizeID', 'UnitPrice', 'Quantity', 'Description', 'OrderCustomerId', 'OrderUserId', 'OrderCreateDate', 'OrderDescription', 'OrderState', 'ProductName', 'ProductSupplierId', 'ProductCategoryId', 'ProductQuantityPerUnit', 'ProductUnitPrice', 'ProductUnitsInStock', 'ProductUnitsOnOrder', 'ProductReorderLevel', 'ProductDiscontinued', 'ProductProductImage', 'ProductGalleryImages', 'ColorName', 'ColorColorGroupId', 'SizeName', 'SizeSizeGroupId'].forEach(x => (<any>Fields)[x] = x);
    }
}

