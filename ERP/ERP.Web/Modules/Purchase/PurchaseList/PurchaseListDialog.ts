
namespace ERP.Purchase {

    @Serenity.Decorators.registerClass()
    @Serenity.Decorators.responsive()
    export class PurchaseListDialog extends Serenity.EntityDialog<PurchaseListRow, any> {
        protected getFormKey() { return PurchaseListForm.formKey; }
        protected getIdProperty() { return PurchaseListRow.idProperty; }
        protected getLocalTextPrefix() { return PurchaseListRow.localTextPrefix; }
        protected getNameProperty() { return PurchaseListRow.nameProperty; }
        protected getService() { return PurchaseListService.baseUrl; }

        protected form = new PurchaseListForm(this.idPrefix);

        constructor() {
            super();

            this.form.PurchaseId.element.on('keyup', (e) => {
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

            if (!this.isNew()) {
                this.setSaveButtonState();
            }

            //if (this.isNew()) {
            //    this.applyChangesButton.hide();
            //    this.deleteButton.hide();
            //    this.saveAndCloseButton.hide();
            //}
        }

        private getNextNumber() {

            var flag = 'PC' + Q.formatDate(new Date(), "yyyyMMdd");

            var val = Q.trimToNull(this.form.PurchaseId.value);

            // we will only get next number when customer ID is empty or 1 character in length
            if (!val || val.length <= 1) {

                // if no customer ID yet (new record mode probably) use 'C' as a prefix
                var prefix = (val || flag).toUpperCase();

                // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                ERP.Purchase.PurchaseListService.GetNextNumber({
                    Prefix: prefix,
                    Length: 14 // we want service to search for and return serials of 5 in length
                }, response => {
                    this.form.PurchaseId.value = response.Serial;

                    // this is to mark numerical part after prefix
                    (this.form.PurchaseId.element[0] as any).setSelectionRange(prefix.length, response.Serial.length);
                });
            }
        }

        getToolbarButtons() {
            var buttons = super.getToolbarButtons();

            buttons.push({
                title: "审核",
                cssClass: 'apply-changes-button disabled',
                onClick: e => this.saveClick(),
                separator: true
            });

            return buttons;
        }

        private setSaveButtonState() {
            this.toolbar.findButton('apply-changes-button').toggleClass('disabled',
                this.entity.State === 1);
        }

        private saveClick() {
            var self = this;
            for (var c of self.entity.DetailList) {
                var entity = new Object();
                var entity1 = entity as Inventory.DepotStockRow;
                entity1.DepotID = self.entity.DepotID;
                entity1.ProductID = c.ProductID;
                entity1.ColorID = c.ColorID;
                entity1.SizeID = c.SizeID;

                var ds = this.getDepotStock(entity1.DepotID, entity1.ProductID, entity1.ColorID, entity1.SizeID);
                if (ds != null) {
                    entity1.Quantity = ds.Quantity + c.Quantity;
                    Q.serviceRequest('Inventory/DepotStock/Update', {
                        EntityId: ds.Id,
                        Entity: entity1
                    }, (response) => {
                        //delete self.pendingChanges[key];
                        //saveNext();

                        self.entity.State = 1;

                        Q.serviceRequest('Purchase/PurchaseList/Update', {
                            EntityId: self.entityId,
                            Entity: self.entity
                        }, (response) => {
                            //delete self.pendingChanges[key];
                            //saveNext();
                        });

                        self.reloadById();
                    });
                }
                else {
                    entity1.Quantity = c.Quantity;
                    Q.serviceRequest('Inventory/DepotStock/Create', {
                        //EntityId: self.entityId,
                        Entity: entity1
                    }, (response) => {
                        //delete self.pendingChanges[key];
                        //saveNext();

                        self.entity.State = 1;

                        Q.serviceRequest('Purchase/PurchaseList/Update', {
                            EntityId: self.entityId,
                            Entity: self.entity
                        }, (response) => {
                            //delete self.pendingChanges[key];
                            //saveNext();
                        });

                        self.reloadById();
                    });
                }

            }
        }

        private getDepotStock(a, b, c, d) {
            Q.reloadLookup('Inventory.DepotStock');
            var DepotID = a;
            var ProductID = b;
            var ColorID = c;
            var SizeID = d;

            var sameProduct = Q.tryFirst(ERP.Inventory.DepotStockRow.getLookup().items,
                x => (x.ProductID === ProductID)
                    && (x.ColorID === ColorID)
                    && (x.SizeID === SizeID)
                    && (x.DepotID === DepotID)
            );
            if (sameProduct) {
                return sameProduct;
            }

            return null;
        }
    }
}