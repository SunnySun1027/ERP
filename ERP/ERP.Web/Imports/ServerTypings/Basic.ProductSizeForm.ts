namespace ERP.Basic {
    export class ProductSizeForm extends Serenity.PrefixedContext {
        static formKey = 'Basic.ProductSize';

    }

    export interface ProductSizeForm {
        SizeName: Serenity.StringEditor;
        SizeGroupId: Serenity.LookupEditor;
    }

    [['SizeName', () => Serenity.StringEditor], ['SizeGroupId', () => Serenity.LookupEditor]].forEach(x => Object.defineProperty(ProductSizeForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

