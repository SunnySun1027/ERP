namespace ERP.Inventory {
    export interface InventoryCountRow {
        InventoryId?: string;
        DepotID?: string;
        CheckDate?: string;
        Description?: string;
        State?: number;
        DepotDepotName?: string;
        DepotDescription?: string;
        DetailList?: InventoryCountDetailRow[];
    }

    export namespace InventoryCountRow {
        export const idProperty = 'InventoryId';
        export const nameProperty = 'InventoryId';
        export const localTextPrefix = 'Inventory.InventoryCount';

        export namespace Fields {
            export declare const InventoryId: string;
            export declare const DepotID: string;
            export declare const CheckDate: string;
            export declare const Description: string;
            export declare const State: string;
            export declare const DepotDepotName: string;
            export declare const DepotDescription: string;
            export declare const DetailList: string;
        }

        ['InventoryId', 'DepotID', 'CheckDate', 'Description', 'State', 'DepotDepotName', 'DepotDescription', 'DetailList'].forEach(x => (<any>Fields)[x] = x);
    }
}

