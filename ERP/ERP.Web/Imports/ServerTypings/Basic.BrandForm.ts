namespace ERP.Basic {
    export class BrandForm extends Serenity.PrefixedContext {
        static formKey = 'Basic.Brand';

    }

    export interface BrandForm {
        BrandName: Serenity.StringEditor;
        Site: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }

    [['BrandName', () => Serenity.StringEditor], ['Site', () => Serenity.StringEditor], ['Description', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(BrandForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

