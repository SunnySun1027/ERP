namespace ERP.Basic {
    export class MaterialForm extends Serenity.PrefixedContext {
        static formKey = 'Basic.Material';

    }

    export interface MaterialForm {
        MaterialName: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }

    [['MaterialName', () => Serenity.StringEditor], ['Description', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(MaterialForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

