
namespace ERP.Basic {
    
    @Serenity.Decorators.registerClass()
    export class SizeGroupGrid extends Serenity.EntityGrid<SizeGroupRow, any> {
        protected getColumnsKey() { return 'Basic.SizeGroup'; }
        protected getDialogType() { return SizeGroupDialog; }
        protected getIdProperty() { return SizeGroupRow.idProperty; }
        protected getLocalTextPrefix() { return SizeGroupRow.localTextPrefix; }
        protected getService() { return SizeGroupService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}