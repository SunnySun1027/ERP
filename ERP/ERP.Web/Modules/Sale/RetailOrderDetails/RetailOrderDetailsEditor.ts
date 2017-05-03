
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

        public depotID: string;

        /**
         * This method is called to initialize an edit dialog created by
         * grid editor when Add button or an edit link is clicked
         * We have an opportunity here to pass CategoryID to edit dialog
         */
        protected initEntityDialog(itemType: string, dialog: Serenity.Widget<any>) {
            super.initEntityDialog(itemType, dialog);

            // passing category ID from grid editor to detail dialog
            (dialog as RetailOrderDetailsDialog).depotID = this.depotID;
        }

        validateEntity(row, id) {
            row.ProductID = Q.toId(row.ProductID);
            row.ColorID = Q.toId(row.ColorID);
            row.SizeID = Q.toId(row.SizeID);

            var sameProduct = Q.tryFirst(this.view.getItems(), x => (x.ProductID === row.ProductID) && (x.ColorID === row.ColorID) && (x.SizeID === row.SizeID));
            if (sameProduct && this.id(sameProduct) !== id) {
                Q.alert('This product is already in stock order details!');
                return false;
            }

            row.ProductName = ERP.Basic.ProductRow.getLookup().itemById[row.ProductID].ProductName;
            row.ColorName = ERP.Basic.ProductColorRow.getLookup().itemById[row.ColorID].ColorName;
            row.SizeName = ERP.Basic.ProductSizeRow.getLookup().itemById[row.SizeID].SizeName;
            //row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
            return true;
        }
    }
}