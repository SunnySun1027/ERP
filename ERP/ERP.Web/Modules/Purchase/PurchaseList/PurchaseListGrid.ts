
namespace ERP.Purchase {
    
    @Serenity.Decorators.registerClass()
    export class PurchaseListGrid extends Serenity.EntityGrid<PurchaseListRow, any> {
        protected getColumnsKey() { return 'Purchase.PurchaseList'; }
        protected getDialogType() { return PurchaseListDialog; }
        protected getIdProperty() { return PurchaseListRow.idProperty; }
        protected getLocalTextPrefix() { return PurchaseListRow.localTextPrefix; }
        protected getService() { return PurchaseListService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}