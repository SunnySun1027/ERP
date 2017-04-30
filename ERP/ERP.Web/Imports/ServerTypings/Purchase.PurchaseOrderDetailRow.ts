namespace ERP.Purchase {
    export interface PurchaseOrderDetailRow {
        Id?: number;
        OrderId?: string;
        ProductID?: number;
        ColorID?: number;
        SizeID?: number;
        UnitPrice?: number;
        Quantity?: number;
        Description?: string;
        OrderSupplierId?: number;
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

    export namespace PurchaseOrderDetailRow {
        export const idProperty = 'Id';
        export const nameProperty = 'OrderId';
        export const localTextPrefix = 'Purchase.PurchaseOrderDetail';

        export namespace Fields {
            export declare const Id: string;
            export declare const OrderId: string;
            export declare const ProductID: string;
            export declare const ColorID: string;
            export declare const SizeID: string;
            export declare const UnitPrice: string;
            export declare const Quantity: string;
            export declare const Description: string;
            export declare const OrderSupplierId: string;
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

        ['Id', 'OrderId', 'ProductID', 'ColorID', 'SizeID', 'UnitPrice', 'Quantity', 'Description', 'OrderSupplierId', 'OrderUserId', 'OrderCreateDate', 'OrderDescription', 'OrderState', 'ProductName', 'ProductSupplierId', 'ProductCategoryId', 'ProductQuantityPerUnit', 'ProductUnitPrice', 'ProductUnitsInStock', 'ProductUnitsOnOrder', 'ProductReorderLevel', 'ProductDiscontinued', 'ProductProductImage', 'ProductGalleryImages', 'ColorName', 'ColorColorGroupId', 'SizeName', 'SizeSizeGroupId'].forEach(x => (<any>Fields)[x] = x);
    }
}

