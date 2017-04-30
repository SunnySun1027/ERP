namespace ERP.Basic {
    export class UnitForm extends Serenity.PrefixedContext {
        static formKey = 'Basic.Unit';

    }

    export interface UnitForm {
        UnitName: Serenity.StringEditor;
    }

    [['UnitName', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(UnitForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

