
namespace ERP.Basic {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ProductColorDialog extends Serenity.EntityDialog<ProductColorRow, any> {
        protected getFormKey() { return ProductColorForm.formKey; }
        protected getIdProperty() { return ProductColorRow.idProperty; }
        protected getLocalTextPrefix() { return ProductColorRow.localTextPrefix; }
        protected getNameProperty() { return ProductColorRow.nameProperty; }
        protected getService() { return ProductColorService.baseUrl; }

        protected form = new ProductColorForm(this.idPrefix);

    }
}