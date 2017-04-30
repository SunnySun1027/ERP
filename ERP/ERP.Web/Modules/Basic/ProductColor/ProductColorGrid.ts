
namespace ERP.Basic {
    
    @Serenity.Decorators.registerClass()
    export class ProductColorGrid extends Serenity.EntityGrid<ProductColorRow, any> {
        protected getColumnsKey() { return 'Basic.ProductColor'; }
        protected getDialogType() { return ProductColorDialog; }
        protected getIdProperty() { return ProductColorRow.idProperty; }
        protected getLocalTextPrefix() { return ProductColorRow.localTextPrefix; }
        protected getService() { return ProductColorService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}