namespace ERP.Basic {
    export interface MaterialRow {
        MaterialId?: number;
        MaterialName?: string;
        Description?: string;
    }

    export namespace MaterialRow {
        export const idProperty = 'MaterialId';
        export const nameProperty = 'MaterialName';
        export const localTextPrefix = 'Basic.Material';

        export namespace Fields {
            export declare const MaterialId: string;
            export declare const MaterialName: string;
            export declare const Description: string;
        }

        ['MaterialId', 'MaterialName', 'Description'].forEach(x => (<any>Fields)[x] = x);
    }
}

