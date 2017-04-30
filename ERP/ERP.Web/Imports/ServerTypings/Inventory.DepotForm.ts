namespace ERP.Inventory {
    export class DepotForm extends Serenity.PrefixedContext {
        static formKey = 'Inventory.Depot';

    }

    export interface DepotForm {
        DepotID: Serenity.StringEditor;
        DepotName: Serenity.StringEditor;
        Description: Serenity.StringEditor;
    }

    [['DepotID', () => Serenity.StringEditor], ['DepotName', () => Serenity.StringEditor], ['Description', () => Serenity.StringEditor]].forEach(x => Object.defineProperty(DepotForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

