
namespace ERP.Basic {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ProductSizeDialog extends Serenity.EntityDialog<ProductSizeRow, any> {
        protected getFormKey() { return ProductSizeForm.formKey; }
        protected getIdProperty() { return ProductSizeRow.idProperty; }
        protected getLocalTextPrefix() { return ProductSizeRow.localTextPrefix; }
        protected getNameProperty() { return ProductSizeRow.nameProperty; }
        protected getService() { return ProductSizeService.baseUrl; }

        protected form = new ProductSizeForm(this.idPrefix);

    }
}