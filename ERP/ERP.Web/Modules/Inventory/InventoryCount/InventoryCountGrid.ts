
namespace ERP.Inventory {
    
    @Serenity.Decorators.registerClass()
    export class InventoryCountGrid extends Serenity.EntityGrid<InventoryCountRow, any> {
        protected getColumnsKey() { return 'Inventory.InventoryCount'; }
        protected getDialogType() { return InventoryCountDialog; }
        protected getIdProperty() { return InventoryCountRow.idProperty; }
        protected getLocalTextPrefix() { return InventoryCountRow.localTextPrefix; }
        protected getService() { return InventoryCountService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        /**
         * This method is called for all rows
         * @param item Data item for current row
         * @param index Index of the row in grid
         */
        //protected getItemCssClass(item: Inventory.InventoryCountRow, index: number): string {
        //    let klass: string = "";

        //    if (item.State == 1)
        //        klass += " high-price";
        //    else if (item.State == 0)
        //        klass += " medium-price";
        //    else
        //        klass += " low-price";

        //    return Q.trimToNull(klass);
        //}
    }
}