namespace ERP.Basic {
    export interface ProductColorRow {
        ColorID?: number;
        ColorName?: string;
        ColorGroupId?: number;
        ColorGroupGroupName?: string;
    }

    export namespace ProductColorRow {
        export const idProperty = 'ColorID';
        export const nameProperty = 'ColorName';
        export const localTextPrefix = 'Basic.ProductColor';
        export const lookupKey = 'Basic.ProductColor';

        export function getLookup(): Q.Lookup<ProductColorRow> {
            return Q.getLookup<ProductColorRow>('Basic.ProductColor');
        }

        export namespace Fields {
            export declare const ColorID: string;
            export declare const ColorName: string;
            export declare const ColorGroupId: string;
            export declare const ColorGroupGroupName: string;
        }

        ['ColorID', 'ColorName', 'ColorGroupId', 'ColorGroupGroupName'].forEach(x => (<any>Fields)[x] = x);
    }
}

