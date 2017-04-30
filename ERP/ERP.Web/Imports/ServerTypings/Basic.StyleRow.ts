namespace ERP.Basic {
    export interface StyleRow {
        StyleId?: number;
        StyleName?: string;
        Description?: string;
    }

    export namespace StyleRow {
        export const idProperty = 'StyleId';
        export const nameProperty = 'StyleName';
        export const localTextPrefix = 'Basic.Style';

        export namespace Fields {
            export declare const StyleId: string;
            export declare const StyleName: string;
            export declare const Description: string;
        }

        ['StyleId', 'StyleName', 'Description'].forEach(x => (<any>Fields)[x] = x);
    }
}

