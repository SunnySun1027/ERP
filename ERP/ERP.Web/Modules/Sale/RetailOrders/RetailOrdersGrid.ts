
namespace ERP.Sale {
    
    @Serenity.Decorators.registerClass()
    export class RetailOrdersGrid extends Serenity.EntityGrid<RetailOrdersRow, any> {
        protected getColumnsKey() { return 'Sale.RetailOrders'; }
        protected getDialogType() { return RetailOrdersDialog; }
        protected getIdProperty() { return RetailOrdersRow.idProperty; }
        protected getLocalTextPrefix() { return RetailOrdersRow.localTextPrefix; }
        protected getService() { return RetailOrdersService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}