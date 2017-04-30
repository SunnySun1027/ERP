
namespace ERP.Basic {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SizeGroupDialog extends Serenity.EntityDialog<SizeGroupRow, any> {
        protected getFormKey() { return SizeGroupForm.formKey; }
        protected getIdProperty() { return SizeGroupRow.idProperty; }
        protected getLocalTextPrefix() { return SizeGroupRow.localTextPrefix; }
        protected getNameProperty() { return SizeGroupRow.nameProperty; }
        protected getService() { return SizeGroupService.baseUrl; }

        protected form = new SizeGroupForm(this.idPrefix);

    }
}