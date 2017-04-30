namespace ERP.Basic {
    export interface ProductSizeRow {
        SizeID?: number;
        SizeName?: string;
        SizeGroupId?: number;
        SizeGroupGroupName?: string;
    }

    export namespace ProductSizeRow {
        export const idProperty = 'SizeID';
        export const nameProperty = 'SizeName';
        export const localTextPrefix = 'Basic.ProductSize';
        export const lookupKey = 'Basic.ProductSize';

        export function getLookup(): Q.Lookup<ProductSizeRow> {
            return Q.getLookup<ProductSizeRow>('Basic.ProductSize');
        }

        export namespace Fields {
            export declare const SizeID: string;
            export declare const SizeName: string;
            export declare const SizeGroupId: string;
            export declare const SizeGroupGroupName: string;
        }

        ['SizeID', 'SizeName', 'SizeGroupId', 'SizeGroupGroupName'].forEach(x => (<any>Fields)[x] = x);
    }
}

