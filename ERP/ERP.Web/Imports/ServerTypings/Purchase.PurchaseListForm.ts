namespace ERP.Purchase {
    export class PurchaseListForm extends Serenity.PrefixedContext {
        static formKey = 'Purchase.PurchaseList';

    }

    export interface PurchaseListForm {
        PurchaseId: Serenity.StringEditor;
        SupplierId: Serenity.LookupEditor;
        DepotID: Serenity.LookupEditor;
        UserId: Serenity.IntegerEditor;
        CreateDate: Serenity.DateEditor;
        Description: Serenity.StringEditor;
        State: Serenity.IntegerEditor;
        DetailList: PurchaseDetailsEditor;
    }

    [['PurchaseId', () => Serenity.StringEditor], ['SupplierId', () => Serenity.LookupEditor], ['DepotID', () => Serenity.LookupEditor], ['UserId', () => Serenity.IntegerEditor], ['CreateDate', () => Serenity.DateEditor], ['Description', () => Serenity.StringEditor], ['State', () => Serenity.IntegerEditor], ['DetailList', () => PurchaseDetailsEditor]].forEach(x => Object.defineProperty(PurchaseListForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

