
namespace ERP.Sale {
    
    @Serenity.Decorators.registerClass()
    export class RetailOrderDetailsGrid extends Serenity.EntityGrid<RetailOrderDetailsRow, any> {
        protected getColumnsKey() { return 'Sale.RetailOrderDetails'; }
        protected getDialogType() { return RetailOrderDetailsDialog; }
        protected getIdProperty() { return RetailOrderDetailsRow.idProperty; }
        protected getLocalTextPrefix() { return RetailOrderDetailsRow.localTextPrefix; }
        protected getService() { return RetailOrderDetailsService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}