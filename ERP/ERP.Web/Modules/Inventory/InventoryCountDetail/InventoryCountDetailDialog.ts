
namespace ERP.Inventory {

    @Serenity.Decorators.registerClass()
    export class InventoryCountDetailDialog extends Common.GridEditorDialog<InventoryCountDetailRow> {
        protected getFormKey() { return InventoryCountDetailForm.formKey; }
        protected getLocalTextPrefix() { return InventoryCountDetailRow.localTextPrefix; }

        protected form: InventoryCountDetailForm;

        constructor() {
            super();

            this.form = new InventoryCountDetailForm(this.idPrefix);

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

        ///////**
        ////// * This method is called just before an entity is loaded to dialog
        ////// * This is also called for new record mode with an empty entity
        ////// */
        //////protected beforeLoadEntity(entity) {
        //////    super.beforeLoadEntity(entity);

        //////    // setting cascade value here
        //////    // make sure you have [LookupInclude] on CategoryID property of ProductRow
        //////    // otherwise this field won't be available in lookup script (will always be null),
        //////    // so can't be filtered and you'll end up with an empty product list.
        //////    this.form.ProductID.cascadeValue = this.depotID;
        //////}

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
                this.form.OriginalQuantity.value = sameProduct.Quantity;
            }
        }
    }
}