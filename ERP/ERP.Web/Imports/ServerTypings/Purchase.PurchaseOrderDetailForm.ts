namespace ERP.Purchase {
    export class PurchaseOrderDetailForm extends Serenity.PrefixedContext {
        static formKey = 'Purchase.PurchaseOrderDetail';

    }

    export interface PurchaseOrderDetailForm {
        OrderId: Serenity.StringEditor;
        ProductID: Serenity.IntegerEditor;
        ColorID: Serenity.IntegerEditor;
        SizeID: Serenity.IntegerEditor;
        UnitPrice: Serenity.DecimalEditor;
        Quantity: Serenity.IntegerEditor;
        Description: Serenity.StringEditor;
    }

    [['OrderId', () => Serenity.StringEditor], ['ProductID', () => Serenity.IntegerEditor], ['ColorID', () => Serenity.IntegerEditor], ['SizeID', () => Serenity.IntegerEditor], ['UnitPrice', () => Serenity.DecimalEditor], ['Quantity', () => Serenity.IntegerEditor], ['Description', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(PurchaseOrderDetailForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

