namespace ERP.Inventory {
    export interface DepotRow {
        DepotID?: string;
        DepotName?: string;
        Description?: string;
    }

    export namespace DepotRow {
        export const idProperty = 'DepotID';
        export const nameProperty = 'DepotName';
        export const localTextPrefix = 'Inventory.Depot';
        export const lookupKey = 'Inventory.Depot';

        export function getLookup(): Q.Lookup<DepotRow> {
            return Q.getLookup<DepotRow>('Inventory.Depot');
        }

        export namespace Fields {
            export declare const DepotID: string;
            export declare const DepotName: string;
            export declare const Description: string;
        }

        ['DepotID', 'DepotName', 'Description'].forEach(x => (<any>Fields)[x] = x);
    }
}

