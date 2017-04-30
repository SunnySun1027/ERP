
namespace ERP.Inventory {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class DepotStockDialog extends Serenity.EntityDialog<DepotStockRow, any> {
        protected getFormKey() { return DepotStockForm.formKey; }
        protected getIdProperty() { return DepotStockRow.idProperty; }
        protected getLocalTextPrefix() { return DepotStockRow.localTextPrefix; }
        protected getNameProperty() { return DepotStockRow.nameProperty; }
        protected getService() { return DepotStockService.baseUrl; }

        protected form = new DepotStockForm(this.idPrefix);

    }
}