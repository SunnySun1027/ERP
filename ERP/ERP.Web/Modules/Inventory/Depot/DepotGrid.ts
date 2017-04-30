
namespace ERP.Inventory {
    
    @Serenity.Decorators.registerClass()
    export class DepotGrid extends Serenity.EntityGrid<DepotRow, any> {
        protected getColumnsKey() { return 'Inventory.Depot'; }
        protected getDialogType() { return DepotDialog; }
        protected getIdProperty() { return DepotRow.idProperty; }
        protected getLocalTextPrefix() { return DepotRow.localTextPrefix; }
        protected getService() { return DepotService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}