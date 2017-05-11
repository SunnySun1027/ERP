
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace ERP.Purchase {
    
    @Serenity.Decorators.registerClass()
    export class PurchaseOrderDetailsEditor extends Common.GridEditorBase<PurchaseOrderDetailRow> {
        protected getColumnsKey() { return 'Purchase.PurchaseOrderDetail'; }
        protected getDialogType() { return PurchaseOrderDetailDialog; }
                protected getLocalTextPrefix() { return PurchaseOrderDetailRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}