namespace ERP.Purchase {
    export class PurchaseDetailForm extends Serenity.PrefixedContext {
        static formKey = 'Purchase.PurchaseDetail';

    }

    export interface PurchaseDetailForm {
        ProductID: Serenity.LookupEditor;
        ColorID: Serenity.LookupEditor;
        SizeID: Serenity.LookupEditor;
        UnitPrice: Serenity.DecimalEditor;
        Quantity: Serenity.IntegerEditor;
        Description: Serenity.StringEditor;
    }

    [['ProductID', () => Serenity.LookupEditor], ['ColorID', () => Serenity.LookupEditor], ['SizeID', () => Serenity.LookupEditor], ['UnitPrice', () => Serenity.DecimalEditor], ['Quantity', () => Serenity.IntegerEditor], ['Description', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(PurchaseDetailForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

