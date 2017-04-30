namespace ERP.Inventory {
    export class InventoryCountForm extends Serenity.PrefixedContext {
        static formKey = 'Inventory.InventoryCount';

    }

    export interface InventoryCountForm {
        InventoryId: Serenity.StringEditor;
        DepotID: Serenity.LookupEditor;
        CheckDate: Serenity.DateEditor;
        Description: Serenity.StringEditor;
        DetailList: InventoryCountDetailsEditor;
    }

    [['InventoryId', () => Serenity.StringEditor], ['DepotID', () => Serenity.LookupEditor], ['CheckDate', () => Serenity.DateEditor], ['Description', () => Serenity.StringEditor], ['DetailList', () => InventoryCountDetailsEditor]].forEach(x => Object.defineProperty(InventoryCountForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

