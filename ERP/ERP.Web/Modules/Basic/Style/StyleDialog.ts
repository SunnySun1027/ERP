
namespace ERP.Basic {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class StyleDialog extends Serenity.EntityDialog<StyleRow, any> {
        protected getFormKey() { return StyleForm.formKey; }
        protected getIdProperty() { return StyleRow.idProperty; }
        protected getLocalTextPrefix() { return StyleRow.localTextPrefix; }
        protected getNameProperty() { return StyleRow.nameProperty; }
        protected getService() { return StyleService.baseUrl; }

        protected form = new StyleForm(this.idPrefix);

    }
}