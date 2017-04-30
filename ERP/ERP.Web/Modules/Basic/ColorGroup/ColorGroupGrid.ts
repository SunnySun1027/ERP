
namespace ERP.Basic {
    
    @Serenity.Decorators.registerClass()
    export class ColorGroupGrid extends Serenity.EntityGrid<ColorGroupRow, any> {
        protected getColumnsKey() { return 'Basic.ColorGroup'; }
        protected getDialogType() { return ColorGroupDialog; }
        protected getIdProperty() { return ColorGroupRow.idProperty; }
        protected getLocalTextPrefix() { return ColorGroupRow.localTextPrefix; }
        protected getService() { return ColorGroupService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}