
namespace ERP.Purchase {
    
    @Serenity.Decorators.registerClass()
    export class PurchaseOrderDetailGrid extends Serenity.EntityGrid<PurchaseOrderDetailRow, any> {
        protected getColumnsKey() { return 'Purchase.PurchaseOrderDetail'; }
        protected getDialogType() { return PurchaseOrderDetailDialog; }
        protected getIdProperty() { return PurchaseOrderDetailRow.idProperty; }
        protected getLocalTextPrefix() { return PurchaseOrderDetailRow.localTextPrefix; }
        protected getService() { return PurchaseOrderDetailService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}