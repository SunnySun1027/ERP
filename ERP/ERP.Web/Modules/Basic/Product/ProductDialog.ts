
namespace ERP.Basic {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.maximizable()
    export class ProductDialog extends Serenity.EntityDialog<ProductRow, any> {
        protected getFormKey() { return ProductForm.formKey; }
        protected getIdProperty() { return ProductRow.idProperty; }
        protected getLocalTextPrefix() { return ProductRow.localTextPrefix; }
        protected getNameProperty() { return ProductRow.nameProperty; }
        protected getService() { return ProductService.baseUrl; }

        protected form = new ProductForm(this.idPrefix);

        constructor() {
            super();

            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-maximize').click();
        }

        protected getLanguages(): string[][] {
            return LanguageList.getValue();
        }
    }
}