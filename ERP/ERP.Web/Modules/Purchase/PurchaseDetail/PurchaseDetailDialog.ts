
namespace ERP.Purchase {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class PurchaseDetailDialog extends Common.GridEditorDialog<PurchaseDetailRow> {
        protected getFormKey() { return PurchaseDetailForm.formKey; }
        protected getLocalTextPrefix() { return PurchaseDetailRow.localTextPrefix; }

        protected form: PurchaseDetailForm;

        constructor() {
            super();

            this.form = new PurchaseDetailForm(this.idPrefix);

            // we can set cascade field in constructor
            // we could also use FilterField but in this case, when CategoryID is null
            // lookup editor would show all products in any category
            //this.form.ProductID.cascadeField = Inventory.DepotStockRow.Fields.DepotID;
            this.form.ColorID.cascadeFrom = "ProductID";
            this.form.SizeID.cascadeFrom = "ProductID";

            // but CategoryID value is not yet available here as detail editor will set it 
            // after calling constructor (creating a detail dialog) so we'll use BeforeLoadEntity
            
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
    }
}