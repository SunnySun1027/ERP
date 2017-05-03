
namespace ERP.Sale {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class RetailOrderDetailsDialog extends Common.GridEditorDialog<RetailOrderDetailsRow> {
        protected getFormKey() { return RetailOrderDetailsForm.formKey; }
        protected getLocalTextPrefix() { return RetailOrderDetailsRow.localTextPrefix; }

        protected form: RetailOrderDetailsForm;

        constructor() {
            super();

            this.form = new RetailOrderDetailsForm(this.idPrefix);

            // we can set cascade field in constructor
            // we could also use FilterField but in this case, when CategoryID is null
            // lookup editor would show all products in any category
            //this.form.ProductID.cascadeField = Inventory.DepotStockRow.Fields.DepotID;
            this.form.ColorID.cascadeFrom = "ProductID";
            this.form.SizeID.cascadeFrom = "ProductID";

            // but CategoryID value is not yet available here as detail editor will set it 
            // after calling constructor (creating a detail dialog) so we'll use BeforeLoadEntity

            this.form.ProductID.changeSelect2(e => {
                this.getDepotStock();
            });
            this.form.ColorID.changeSelect2(e => {
                this.getDepotStock();
            });
            this.form.SizeID.changeSelect2(e => {
                this.getDepotStock();
            });

            //this.form.Discount.addValidationRule(this.uniqueName, e => {
            //    var price = this.form.UnitPrice.value;
            //    var quantity = this.form.Quantity.value;
            //    var discount = this.form.Discount.value;
            //    if (price != null && quantity != null && discount != null &&
            //        discount > 0 && discount >= price * quantity) {
            //        return "Discount can't be higher than total price!";
            //    }
            //});
        }

        public depotID: string;

        private getDepotStock() {
            var ProductID = parseInt(this.form.ProductID.value);
            var ColorID = parseInt(this.form.ColorID.value);
            var SizeID = parseInt(this.form.SizeID.value);

            var sameProduct = Q.tryFirst(ERP.Inventory.DepotStockRow.getLookup().items,
                x => (x.ProductID === ProductID)
                    && (x.ColorID === ColorID)
                    && (x.SizeID === SizeID)
                    && (x.DepotID === this.depotID)
            );
            if (sameProduct) {
                this.form.Quantity.value = sameProduct.Quantity;
                this.form.UnitPrice.value = sameProduct.ProductUnitPrice;
            }
        }
    }
}