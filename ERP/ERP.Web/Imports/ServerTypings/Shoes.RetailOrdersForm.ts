

namespace ERP.Shoes {
    export class RetailOrdersForm extends Serenity.PrefixedContext {
        static formKey = 'Shoes.RetailOrders';
    }

    export interface RetailOrdersForm {
        CustomerId: Serenity.StringEditor;
        UserId: Serenity.IntegerEditor;
        CreateDate: Serenity.DateEditor;
        Description: Serenity.StringEditor;
        State: Serenity.IntegerEditor;
    }

    [['OrderId', () => Serenity.StringEditor], ['CustomerId', () => Serenity.StringEditor], ['UserId', () => Serenity.IntegerEditor], ['CreateDate', () => Serenity.DateEditor], ['Description', () => Serenity.StringEditor], ['State', () => Serenity.IntegerEditor]].forEach(x => Object.defineProperty(RetailOrdersForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}