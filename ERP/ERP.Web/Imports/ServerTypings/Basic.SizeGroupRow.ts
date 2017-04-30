namespace ERP.Basic {
    export interface SizeGroupRow {
        GroupId?: number;
        GroupName?: string;
    }

    export namespace SizeGroupRow {
        export const idProperty = 'GroupId';
        export const nameProperty = 'GroupName';
        export const localTextPrefix = 'Basic.SizeGroup';
        export const lookupKey = 'Shoes.SizeGroup';

        export function getLookup(): Q.Lookup<SizeGroupRow> {
            return Q.getLookup<SizeGroupRow>('Shoes.SizeGroup');
        }

        export namespace Fields {
            export declare const GroupId: string;
            export declare const GroupName: string;
        }

        ['GroupId', 'GroupName'].forEach(x => (<any>Fields)[x] = x);
    }
}

