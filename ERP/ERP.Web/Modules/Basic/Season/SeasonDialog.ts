
namespace ERP.Basic {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class SeasonDialog extends Serenity.EntityDialog<SeasonRow, any> {
        protected getFormKey() { return SeasonForm.formKey; }
        protected getIdProperty() { return SeasonRow.idProperty; }
        protected getLocalTextPrefix() { return SeasonRow.localTextPrefix; }
        protected getNameProperty() { return SeasonRow.nameProperty; }
        protected getService() { return SeasonService.baseUrl; }

        protected form = new SeasonForm(this.idPrefix);

    }
}