
namespace ERP.Basic {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class ColorGroupDialog extends Serenity.EntityDialog<ColorGroupRow, any> {
        protected getFormKey() { return ColorGroupForm.formKey; }
        protected getIdProperty() { return ColorGroupRow.idProperty; }
        protected getLocalTextPrefix() { return ColorGroupRow.localTextPrefix; }
        protected getNameProperty() { return ColorGroupRow.nameProperty; }
        protected getService() { return ColorGroupService.baseUrl; }

        protected form = new ColorGroupForm(this.idPrefix);

    }
}