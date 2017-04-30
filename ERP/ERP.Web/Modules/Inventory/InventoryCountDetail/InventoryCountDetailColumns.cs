
namespace ERP.Inventory.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Inventory.InventoryCountDetail")]
    [BasedOnRow(typeof(Entities.InventoryCountDetailRow))]
    public class InventoryCountDetailColumns
    {
        [EditLink, Width(200)]
        public String ProductName { get; set; }
        public String ColorName { get; set; }
        public String SizeName { get; set; }
        public Int32 Quantity { get; set; }
        public Int32 OriginalQuantity { get; set; }
        public String Description { get; set; }
    }
}