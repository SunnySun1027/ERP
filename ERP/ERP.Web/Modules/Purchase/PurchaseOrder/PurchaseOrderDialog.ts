
namespace ERP.Purchase {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class PurchaseOrderDialog extends Serenity.EntityDialog<PurchaseOrderRow, any> {
        protected getFormKey() { return PurchaseOrderForm.formKey; }
        protected getIdProperty() { return PurchaseOrderRow.idProperty; }
        protected getLocalTextPrefix() { return PurchaseOrderRow.localTextPrefix; }
        protected getNameProperty() { return PurchaseOrderRow.nameProperty; }
        protected getService() { return PurchaseOrderService.baseUrl; }

        protected form = new PurchaseOrderForm(this.idPrefix);

        constructor() {
            super();

            this.form.OrderId.element.on('keyup', (e) => {
                // only auto number when a key between 'A' and 'Z' is pressed
                if (e.which >= 65 && e.which <= 90)
                    this.getNextNumber();
            });


            //this.form.DepotID.change(e => {
            //    this.form.DetailList.depotID = Q.toId(this.form.DepotID.value);
            //});
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            // fill next number in new record mode
            if (this.isNew())
                this.getNextNumber();

            //if (!this.isNew()) {
            //    this.setSaveButtonState();
            //}

            //if (this.isNew()) {
            //    this.applyChangesButton.hide();
            //    this.deleteButton.hide();
            //    this.saveAndCloseButton.hide();
            //}
        }

        private getNextNumber() {

            var flag = 'PO' + Q.formatDate(new Date(), "yyyyMMdd");

            var val = Q.trimToNull(this.form.OrderId.value);

            // we will only get next number when customer ID is empty or 1 character in length
            if (!val || val.length <= 1) {

                // if no customer ID yet (new record mode probably) use 'C' as a prefix
                var prefix = (val || flag).toUpperCase();

                // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                ERP.Purchase.PurchaseOrderService.GetNextNumber({
                    Prefix: prefix,
                    Length: 14 // we want service to search for and return serials of 5 in length
                }, response => {
                    this.form.OrderId.value = response.Serial;

                    // this is to mark numerical part after prefix
                    (this.form.OrderId.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
                });
            }
        }
    }
}