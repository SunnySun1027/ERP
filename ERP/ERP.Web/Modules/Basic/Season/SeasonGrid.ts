
namespace ERP.Basic {
    
    @Serenity.Decorators.registerClass()
    export class SeasonGrid extends Serenity.EntityGrid<SeasonRow, any> {
        protected getColumnsKey() { return 'Basic.Season'; }
        protected getDialogType() { return SeasonDialog; }
        protected getIdProperty() { return SeasonRow.idProperty; }
        protected getLocalTextPrefix() { return SeasonRow.localTextPrefix; }
        protected getService() { return SeasonService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}