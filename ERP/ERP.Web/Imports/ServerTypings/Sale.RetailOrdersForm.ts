

namespace ERP.Sale {
    export class RetailOrdersForm extends Serenity.PrefixedContext {
        static formKey = 'Sale.RetailOrders';
    }

    export interface RetailOrdersForm {
        OrderId: Serenity.StringEditor;
        DepotID: Serenity.LookupEditor;
        CustomerId: Serenity.StringEditor;
        UserId: Serenity.IntegerEditor;
        CreateDate: Serenity.DateEditor;
        Description: Serenity.StringEditor;
        State: Serenity.IntegerEditor;
        DetailList: RetailOrderDetailsEditor;
    }

    [['OrderId', () => Serenity.StringEditor], ['DepotID', () => Serenity.LookupEditor], ['CustomerId', () => Serenity.StringEditor], ['UserId', () => Serenity.IntegerEditor], ['CreateDate', () => Serenity.DateEditor], ['Description', () => Serenity.StringEditor], ['State', () => Serenity.IntegerEditor], ['DetailList', () => RetailOrderDetailsEditor]].forEach(x => Object.defineProperty(RetailOrdersForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}