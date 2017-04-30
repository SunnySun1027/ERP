
namespace ERP.Inventory {
    
    @Serenity.Decorators.registerClass()
    export class InventoryCountDetailGrid extends Serenity.EntityGrid<InventoryCountDetailRow, any> {
        protected getColumnsKey() { return 'Inventory.InventoryCountDetail'; }
        protected getDialogType() { return InventoryCountDetailDialog; }
        protected getIdProperty() { return InventoryCountDetailRow.idProperty; }
        protected getLocalTextPrefix() { return InventoryCountDetailRow.localTextPrefix; }
        protected getService() { return InventoryCountDetailService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}