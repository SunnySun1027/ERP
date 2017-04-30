namespace ERP.Basic {
    export class SeasonForm extends Serenity.PrefixedContext {
        static formKey = 'Basic.Season';

    }

    export interface SeasonForm {
        SeasonName: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }

    [['SeasonName', () => Serenity.StringEditor], ['Description', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(SeasonForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

