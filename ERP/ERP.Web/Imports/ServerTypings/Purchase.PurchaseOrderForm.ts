namespace ERP.Purchase {
    export class PurchaseOrderForm extends Serenity.PrefixedContext {
        static formKey = 'Purchase.PurchaseOrder';

    }

    export interface PurchaseOrderForm {
        OrderId: Serenity.StringEditor;
        SupplierId: Serenity.LookupEditor;
        UserId: Serenity.IntegerEditor;
        CreateDate: Serenity.DateEditor;
        Description: Serenity.StringEditor;
        State: Serenity.IntegerEditor;
    }

    [['OrderId', () => Serenity.StringEditor], ['SupplierId', () => Serenity.LookupEditor], ['UserId', () => Serenity.IntegerEditor], ['CreateDate', () => Serenity.DateEditor], ['Description', () => Serenity.StringEditor], ['State', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(PurchaseOrderForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

