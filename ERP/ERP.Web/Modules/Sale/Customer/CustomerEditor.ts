namespace ERP.Sale {

    @Serenity.Decorators.registerEditor()
    export class CustomerEditor extends Serenity.LookupEditorBase<CustomerRow, any> {

        constructor(hidden: JQuery) {
            super(hidden);
        }

        protected getLookupKey() {
            return 'Sale.Customer';
        }

        protected getItemText(item, lookup) {
            return super.getItemText(item, lookup) + ' [' + item.CustomerID + ']';
        }
    }
}