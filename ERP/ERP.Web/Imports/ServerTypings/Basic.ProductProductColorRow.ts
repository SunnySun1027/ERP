namespace ERP.Basic {
    export interface ProductProductColorRow {
        Id?: number;
        ProductID?: number;
        ColorID?: number;
        ColorName?: string;
        ColorColorGroupId?: number;
    }

    export namespace ProductProductColorRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Basic.ProductProductColor';
        export const lookupKey = 'Purchase.PColor';

        export function getLookup(): Q.Lookup<ProductProductColorRow> {
            return Q.getLookup<ProductProductColorRow>('Purchase.PColor');
        }

        export namespace Fields {
            export declare const Id: string;
            export declare const ProductID: string;
            export declare const ColorID: string;
            export declare const ColorName: string;
            export declare const ColorColorGroupId: string;
        }

        ['Id', 'ProductID', 'ColorID', 'ColorName', 'ColorColorGroupId'].forEach(x => (<any>Fields)[x] = x);
    }
}

