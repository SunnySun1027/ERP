namespace ERP.Basic {
    export interface ProductProductSizeRow {
        Id?: number;
        ProductID?: number;
        SizeID?: number;
        SizeName?: string;
        SizeSizeGroupId?: number;
    }

    export namespace ProductProductSizeRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Basic.ProductProductSize';
        export const lookupKey = 'Purchase.PSize';

        export function getLookup(): Q.Lookup<ProductProductSizeRow> {
            return Q.getLookup<ProductProductSizeRow>('Purchase.PSize');
        }

        export namespace Fields {
            export declare const Id: string;
            export declare const ProductID: string;
            export declare const SizeID: string;
            export declare const SizeName: string;
            export declare const SizeSizeGroupId: string;
        }

        ['Id', 'ProductID', 'SizeID', 'SizeName', 'SizeSizeGroupId'].forEach(x => (<any>Fields)[x] = x);
    }
}

