
namespace ERP.Inventory {
    
    @Serenity.Decorators.registerClass()
    export class DepotStockGrid extends Serenity.EntityGrid<DepotStockRow, any> {
        protected getColumnsKey() { return 'Inventory.DepotStock'; }
        protected getDialogType() { return DepotStockDialog; }
        protected getIdProperty() { return DepotStockRow.idProperty; }
        protected getLocalTextPrefix() { return DepotStockRow.localTextPrefix; }
        protected getService() { return DepotStockService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }

        protected createSlickGrid() {
            var grid = super.createSlickGrid();

            // need to register this plugin for grouping or you'll have errors
            grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());

            this.view.setSummaryOptions({
                aggregators: [
                    new Slick.Aggregators.Sum('Quantity')
                ]
            });

            return grid;
        }

        protected getSlickOptions() {
            var opt = super.getSlickOptions();
            opt.showFooterRow = true;
            return opt;
        }

        protected usePager() {
            return false;
        }

        protected getButtons() {
            var buttons = super.getButtons();

            buttons.push({
                title: 'Group By Product',
                cssClass: 'expand-all-button',
                onClick: () => this.view.setGrouping(
                    [{
                        getter: 'ProductName'
                    }])
            });

            buttons.push({
                title: 'Group By Depot and Product',
                cssClass: 'expand-all-button',
                onClick: () => this.view.setGrouping(
                    [{
                        formatter: x => 'Depot: ' + x.value + ' (' + x.count + ' items)',
                        getter: 'DepotDepotName'
                    }, {
                            formatter: x => 'Product: ' + x.value + ' (' + x.count + ' items)',
                            getter: 'ProductName'
                        }])
            });

            buttons.push({
                title: 'No Grouping',
                cssClass: 'collapse-all-button',
                onClick: () => this.view.setGrouping([])
            });

            return buttons;
        }
    }
}