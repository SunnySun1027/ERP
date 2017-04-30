namespace ERP.Basic {
    export class StyleForm extends Serenity.PrefixedContext {
        static formKey = 'Basic.Style';

    }

    export interface StyleForm {
        StyleName: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }

    [['StyleName', () => Serenity.StringEditor], ['Description', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(StyleForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

