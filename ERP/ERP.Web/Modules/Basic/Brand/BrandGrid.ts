
namespace ERP.Basic {
    
    @Serenity.Decorators.registerClass()
    export class BrandGrid extends Serenity.EntityGrid<BrandRow, any> {
        protected getColumnsKey() { return 'Basic.Brand'; }
        protected getDialogType() { return BrandDialog; }
        protected getIdProperty() { return BrandRow.idProperty; }
        protected getLocalTextPrefix() { return BrandRow.localTextPrefix; }
        protected getService() { return BrandService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}