/// <reference path="../../Sale/Order/OrderGrid.ts" />

namespace ERP.Basic {

    @Serenity.Decorators.registerClass()
    export class InlineImageInGrid extends Serenity.EntityGrid<Basic.ProductRow, any> {

        protected getColumnsKey() { return "Basic.InlineImageInGrid"; }
        protected getDialogType() { return <any>Basic.ProductDialog; }
        protected getIdProperty() { return Basic.ProductRow.idProperty; }
        protected getLocalTextPrefix() { return Basic.ProductRow.localTextPrefix; }
        protected getService() { return Basic.ProductService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected getSlickOptions(): Slick.GridOptions {
            let opt = super.getSlickOptions();
            opt.rowHeight = 150;
            return opt;
        }
    }
}