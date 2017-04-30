namespace ERP.Purchase {
    export interface PurchaseListRow {
        PurchaseId?: string;
        SupplierId?: number;
        DepotID?: string;
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
        DepotDepotName?: string;
        DepotDescription?: string;
        DetailList?: PurchaseDetailRow[];
    }

    export namespace PurchaseListRow {
        export const idProperty = 'PurchaseId';
        export const nameProperty = 'PurchaseId';
        export const localTextPrefix = 'Purchase.PurchaseList';

        export namespace Fields {
            export declare const PurchaseId: string;
            export declare const SupplierId: string;
            export declare const DepotID: string;
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
            export declare const DepotDepotName: string;
            export declare const DepotDescription: string;
            export declare const DetailList: string;
        }

        ['PurchaseId', 'SupplierId', 'DepotID', 'UserId', 'CreateDate', 'Description', 'State', 'SupplierCompanyName', 'SupplierContactName', 'SupplierContactTitle', 'SupplierAddress', 'SupplierCity', 'SupplierRegion', 'SupplierPostalCode', 'SupplierCountry', 'SupplierPhone', 'SupplierFax', 'SupplierHomePage', 'DepotDepotName', 'DepotDescription', 'DetailList'].forEach(x => (<any>Fields)[x] = x);
    }
}

