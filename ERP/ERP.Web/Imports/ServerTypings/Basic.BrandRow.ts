namespace ERP.Basic {
    export interface BrandRow {
        BrandId?: number;
        BrandName?: string;
        Site?: string;
        Description?: string;
    }

    export namespace BrandRow {
        export const idProperty = 'BrandId';
        export const nameProperty = 'BrandName';
        export const localTextPrefix = 'Basic.Brand';

        export namespace Fields {
            export declare const BrandId: string;
            export declare const BrandName: string;
            export declare const Site: string;
            export declare const Description: string;
        }

        ['BrandId', 'BrandName', 'Site', 'Description'].forEach(x => (<any>Fields)[x] = x);
    }
}

