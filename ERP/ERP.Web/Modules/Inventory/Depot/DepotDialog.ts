
namespace ERP.Inventory {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class DepotDialog extends Serenity.EntityDialog<DepotRow, any> {
        protected getFormKey() { return DepotForm.formKey; }
        protected getIdProperty() { return DepotRow.idProperty; }
        protected getLocalTextPrefix() { return DepotRow.localTextPrefix; }
        protected getNameProperty() { return DepotRow.nameProperty; }
        protected getService() { return DepotService.baseUrl; }

        protected form = new DepotForm(this.idPrefix);

        constructor() {
            super();

            this.form.DepotID.element.on('keyup', (e) => {
                // only auto number when a key between 'A' and 'Z' is pressed
                if (e.which >= 65 && e.which <= 90)
                    this.getNextNumber();
            });
        }

        protected afterLoadEntity() {
            super.afterLoadEntity();

            // fill next number in new record mode
            if (this.isNew())
                this.getNextNumber();
        }

        private getNextNumber() {

            var val = Q.trimToNull(this.form.DepotID.value);

            // we will only get next number when customer ID is empty or 1 character in length
            if (!val || val.length <= 1) {

                // if no customer ID yet (new record mode probably) use 'C' as a prefix
                var prefix = (val || 'CK').toUpperCase();

                // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                ERP.Inventory.DepotService.GetNextNumber({
                    Prefix: prefix,
                    Length: 5 // we want service to search for and return serials of 5 in length
                }, response => {
                    this.form.DepotID.value = response.Serial;

                    // this is to mark numerical part after prefix
                    (this.form.DepotID.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
                });
            }
        }
    }
}