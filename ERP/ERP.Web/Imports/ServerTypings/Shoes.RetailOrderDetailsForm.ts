

namespace ERP.Shoes {
    export class RetailOrderDetailsForm extends Serenity.PrefixedContext {
        static formKey = 'Shoes.RetailOrderDetails';
    }

    export interface RetailOrderDetailsForm {
        OrderId: Serenity.StringEditor;
        ProductId: Serenity.IntegerEditor;
        ColorId: Serenity.IntegerEditor;
        SizeId: Serenity.IntegerEditor;
        UnitPrice: Serenity.DecimalEditor;
        Quantity: Serenity.IntegerEditor;
        Description: Serenity.StringEditor;
    }

    [['Id', () => Serenity.IntegerEditor], ['OrderId', () => Serenity.StringEditor], ['ProductId', () => Serenity.IntegerEditor], ['ColorId', () => Serenity.IntegerEditor], ['SizeId', () => Serenity.IntegerEditor], ['UnitPrice', () => Serenity.DecimalEditor], ['Quantity', () => Serenity.IntegerEditor], ['Description', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(RetailOrderDetailsForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}