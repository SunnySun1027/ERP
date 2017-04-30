namespace ERP.Inventory {
    export class DepotStockForm extends Serenity.PrefixedContext {
        static formKey = 'Inventory.DepotStock';

    }

    export interface DepotStockForm {
        DepotID: Serenity.LookupEditor;
        ProductID: Serenity.LookupEditor;
        ColorID: Serenity.LookupEditor;
        SizeID: Serenity.LookupEditor;
        Quantity: Serenity.IntegerEditor;
    }

    [['DepotID', () => Serenity.LookupEditor], ['ProductID', () => Serenity.LookupEditor], ['ColorID', () => Serenity.LookupEditor], ['SizeID', () => Serenity.LookupEditor], ['Quantity', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(DepotStockForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

