
namespace ERP.Sale {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    @Serenity.Decorators.maximizable()
    export class RetailOrdersDialog extends Serenity.EntityDialog<RetailOrdersRow, any> {
        protected getFormKey() { return RetailOrdersForm.formKey; }
        protected getIdProperty() { return RetailOrdersRow.idProperty; }
        protected getLocalTextPrefix() { return RetailOrdersRow.localTextPrefix; }
        protected getNameProperty() { return RetailOrdersRow.nameProperty; }
        protected getService() { return RetailOrdersService.baseUrl; }

        protected form = new RetailOrdersForm(this.idPrefix);

        constructor() {
            super();

            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-maximize').click();

            this.form.OrderId.element.on('keyup', (e) => {
                // only auto number when a key between 'A' and 'Z' is pressed
                if (e.which >= 65 && e.which <= 90)
                    this.getNextNumber();
            });

            this.form.DepotID.change(e => {
                this.form.DetailList.depotID = Q.toId(this.form.DepotID.value);
            });
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            // fill next number in new record mode
            if (this.isNew())
                this.getNextNumber();

            if (!this.isNew()) {
                //this.setSaveButtonState();
            }

            //if (this.isNew()) {
            //    this.applyChangesButton.hide();
            //    this.deleteButton.hide();
            //    this.saveAndCloseButton.hide();
            //}
        }

        private getNextNumber() {

            var flag = 'LS' + Q.formatDate(new Date(), "yyyyMMdd");

            var val = Q.trimToNull(this.form.OrderId.value);

            // we will only get next number when customer ID is empty or 1 character in length
            if (!val || val.length <= 1) {

                // if no customer ID yet (new record mode probably) use 'C' as a prefix
                var prefix = (val || flag).toUpperCase();

                // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                ERP.Sale.RetailOrdersService.GetNextNumber({
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