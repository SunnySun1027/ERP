namespace ERP.Basic {
    export class SizeGroupForm extends Serenity.PrefixedContext {
        static formKey = 'Basic.SizeGroup';

    }

    export interface SizeGroupForm {
        GroupName: Serenity.StringEditor;
    }

    [['GroupName', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(SizeGroupForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

