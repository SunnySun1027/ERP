namespace ERP.Inventory {
    export class InventoryCountDetailForm extends Serenity.PrefixedContext {
        static formKey = 'Inventory.InventoryCountDetail';

    }

    export interface InventoryCountDetailForm {
        ProductID: Serenity.LookupEditor;
        ColorID: Serenity.LookupEditor;
        SizeID: Serenity.LookupEditor;
        Quantity: Serenity.IntegerEditor;
        OriginalQuantity: Serenity.IntegerEditor;
        Description: Serenity.StringEditor;
    }

    [['ProductID', () => Serenity.LookupEditor], ['ColorID', () => Serenity.LookupEditor], ['SizeID', () => Serenity.LookupEditor], ['Quantity', () => Serenity.IntegerEditor], ['OriginalQuantity', () => Serenity.IntegerEditor], ['Description', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(InventoryCountDetailForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

