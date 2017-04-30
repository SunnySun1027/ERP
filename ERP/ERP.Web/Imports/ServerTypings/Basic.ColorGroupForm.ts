namespace ERP.Basic {
    export class ColorGroupForm extends Serenity.PrefixedContext {
        static formKey = 'Basic.ColorGroup';

    }

    export interface ColorGroupForm {
        GroupName: Serenity.StringEditor;
    }

    [['GroupName', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(ColorGroupForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

