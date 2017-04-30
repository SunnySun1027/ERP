
namespace ERP.Basic {
    
    @Serenity.Decorators.registerClass()
    export class StyleGrid extends Serenity.EntityGrid<StyleRow, any> {
        protected getColumnsKey() { return 'Basic.Style'; }
        protected getDialogType() { return StyleDialog; }
        protected getIdProperty() { return StyleRow.idProperty; }
        protected getLocalTextPrefix() { return StyleRow.localTextPrefix; }
        protected getService() { return StyleService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}