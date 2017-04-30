namespace ERP.Basic {
    export interface UnitRow {
        UnitId?: number;
        UnitName?: string;
    }

    export namespace UnitRow {
        export const idProperty = 'UnitId';
        export const nameProperty = 'UnitName';
        export const localTextPrefix = 'Basic.Unit';

        export namespace Fields {
            export declare const UnitId: string;
            export declare const UnitName: string;
        }

        ['UnitId', 'UnitName'].forEach(x => (<any>Fields)[x] = x);
    }
}

