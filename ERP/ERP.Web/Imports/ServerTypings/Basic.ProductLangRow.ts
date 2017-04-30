namespace ERP.Basic {
    export interface ProductLangRow {
        Id?: number;
        ProductID?: number;
        LanguageId?: number;
        ProductName?: string;
    }

    export namespace ProductLangRow {
        export const idProperty = 'Id';
        export const nameProperty = 'ProductName';
        export const localTextPrefix = 'Basic.ProductLang';

        export namespace Fields {
            export declare const Id: string;
            export declare const ProductID: string;
            export declare const LanguageId: string;
            export declare const ProductName: string;
        }

        ['Id', 'ProductID', 'LanguageId', 'ProductName'].forEach(x => (<any>Fields)[x] = x);
    }
}

