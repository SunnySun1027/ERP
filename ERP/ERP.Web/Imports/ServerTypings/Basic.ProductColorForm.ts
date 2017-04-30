namespace ERP.Basic {
    export class ProductColorForm extends Serenity.PrefixedContext {
        static formKey = 'Basic.ProductColor';

    }

    export interface ProductColorForm {
        ColorName: Serenity.StringEditor;
        ColorGroupId: Serenity.LookupEditor;
    }

    [['ColorName', () => Serenity.StringEditor], ['ColorGroupId', () => Serenity.LookupEditor]].forEach(x => Object.defineProperty(ProductColorForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

