namespace ERP.Purchase {
    export interface PurchaseOrderRow {
        OrderId?: string;
        SupplierId?: number;
        UserId?: number;
        CreateDate?: string;
        Description?: string;
        State?: number;
        SupplierCompanyName?: string;
        SupplierContactName?: string;
        SupplierContactTitle?: string;
        SupplierAddress?: string;
        SupplierCity?: string;
        SupplierRegion?: string;
        SupplierPostalCode?: string;
        SupplierCountry?: string;
        SupplierPhone?: string;
        SupplierFax?: string;
        SupplierHomePage?: string;
    }

    export namespace PurchaseOrderRow {
        export const idProperty = 'OrderId';
        export const nameProperty = 'OrderId';
        export const localTextPrefix = 'Purchase.PurchaseOrder';

        export namespace Fields {
            export declare const OrderId: string;
            export declare const SupplierId: string;
            export declare const UserId: string;
            export declare const CreateDate: string;
            export declare const Description: string;
            export declare const State: string;
            export declare const SupplierCompanyName: string;
            export declare const SupplierContactName: string;
            export declare const SupplierContactTitle: string;
            export declare const SupplierAddress: string;
            export declare const SupplierCity: string;
            export declare const SupplierRegion: string;
            export declare const SupplierPostalCode: string;
            export declare const SupplierCountry: string;
            export declare const SupplierPhone: string;
            export declare const SupplierFax: string;
            export declare const SupplierHomePage: string;
        }

        ['OrderId', 'SupplierId', 'UserId', 'CreateDate', 'Description', 'State', 'SupplierCompanyName', 'SupplierContactName', 'SupplierContactTitle', 'SupplierAddress', 'SupplierCity', 'SupplierRegion', 'SupplierPostalCode', 'SupplierCountry', 'SupplierPhone', 'SupplierFax', 'SupplierHomePage'].forEach(x => (<any>Fields)[x] = x);
    }
}

