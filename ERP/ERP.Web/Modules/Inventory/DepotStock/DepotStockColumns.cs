
namespace ERP.Inventory.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Inventory.DepotStock")]
    [BasedOnRow(typeof(Entities.DepotStockRow))]
    public class DepotStockColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 Id { get; set; }
        [QuickFilter, Width(125)]
        public String DepotDepotName { get; set; }
        [Width(125)]
        public String ProductName { get; set; }
        public String ColorName { get; set; }
        public String SizeName { get; set; }
        public Int32 Quantity { get; set; }
    }
}