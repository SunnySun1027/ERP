
namespace ERP.Basic {
    
    @Serenity.Decorators.registerClass()
    export class ProductSizeGrid extends Serenity.EntityGrid<ProductSizeRow, any> {
        protected getColumnsKey() { return 'Basic.ProductSize'; }
        protected getDialogType() { return ProductSizeDialog; }
        protected getIdProperty() { return ProductSizeRow.idProperty; }
        protected getLocalTextPrefix() { return ProductSizeRow.localTextPrefix; }
        protected getService() { return ProductSizeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}