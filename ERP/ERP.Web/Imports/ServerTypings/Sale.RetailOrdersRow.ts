
namespace ERP.Sale {
    export interface RetailOrdersRow {
        OrderId?: string;
        CustomerId?: string;
        UserId?: number;
        CreateDate?: string;
        Description?: string;
        State?: number;
        CustomerCompanyName?: string;
        CustomerContactName?: string;
        CustomerContactTitle?: string;
        CustomerAddress?: string;
        CustomerCity?: string;
        CustomerRegion?: string;
        CustomerPostalCode?: string;
        CustomerCountry?: string;
        CustomerPhone?: string;
        CustomerFax?: string;
        CustomerId?: number;
        DetailList?: RetailOrderDetailsRow[];
    }

    export namespace RetailOrdersRow {
        export const idProperty = 'OrderId';
        export const nameProperty = 'OrderId';
        export const localTextPrefix = 'Sale.RetailOrders';

        export namespace Fields {
            export declare const OrderId;
            export declare const CustomerId;
            export declare const UserId;
            export declare const CreateDate;
            export declare const Description;
            export declare const State;
            export declare const CustomerCompanyName: string;
            export declare const CustomerContactName: string;
            export declare const CustomerContactTitle: string;
            export declare const CustomerAddress: string;
            export declare const CustomerCity: string;
            export declare const CustomerRegion: string;
            export declare const CustomerPostalCode: string;
            export declare const CustomerCountry: string;
            export declare const CustomerPhone: string;
            export declare const CustomerFax: string;
            export declare const CustomerId: string;
            export declare const DetailList: string;
        }

        ['OrderId', 'CustomerId', 'UserId', 'CreateDate', 'Description', 'State', 'CustomerCompanyName', 'CustomerContactName', 'CustomerContactTitle', 'CustomerAddress', 'CustomerCity', 'CustomerRegion', 'CustomerPostalCode', 'CustomerCountry', 'CustomerPhone', 'CustomerFax', 'CustomerId', 'DetailList'].forEach(x => (<any>Fields)[x] = x);
    }
}

