
namespace ERP.Purchase {
    
    @Serenity.Decorators.registerClass()
    export class PurchaseDetailGrid extends Serenity.EntityGrid<PurchaseDetailRow, any> {
        protected getColumnsKey() { return 'Purchase.PurchaseDetail'; }
        protected getDialogType() { return PurchaseDetailDialog; }
        protected getIdProperty() { return PurchaseDetailRow.idProperty; }
        protected getLocalTextPrefix() { return PurchaseDetailRow.localTextPrefix; }
        protected getService() { return PurchaseDetailService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}