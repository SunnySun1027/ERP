namespace ERP.Basic {
    export interface ColorGroupRow {
        GroupId?: number;
        GroupName?: string;
    }

    export namespace ColorGroupRow {
        export const idProperty = 'GroupId';
        export const nameProperty = 'GroupName';
        export const localTextPrefix = 'Basic.ColorGroup';
        export const lookupKey = 'Shoes.ColorGroup';

        export function getLookup(): Q.Lookup<ColorGroupRow> {
            return Q.getLookup<ColorGroupRow>('Shoes.ColorGroup');
        }

        export namespace Fields {
            export declare const GroupId: string;
            export declare const GroupName: string;
        }

        ['GroupId', 'GroupName'].forEach(x => (<any>Fields)[x] = x);
    }
}

