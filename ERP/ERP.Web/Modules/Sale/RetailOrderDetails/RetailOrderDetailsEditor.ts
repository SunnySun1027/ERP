
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />

namespace ERP.Sale {
    
    @Serenity.Decorators.registerClass()
    export class RetailOrderDetailsEditor extends Common.GridEditorBase<RetailOrderDetailsRow> {
        protected getColumnsKey() { return 'Sale.RetailOrderDetails'; }
        protected getDialogType() { return RetailOrderDetailsDialog; }
                protected getLocalTextPrefix() { return RetailOrderDetailsRow.localTextPrefix; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}