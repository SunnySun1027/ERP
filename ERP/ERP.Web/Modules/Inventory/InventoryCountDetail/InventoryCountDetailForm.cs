
namespace ERP.Inventory.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Inventory.InventoryCountDetail")]
    [BasedOnRow(typeof(Entities.InventoryCountDetailRow))]
    public class InventoryCountDetailForm
    {
        public Int32 ProductID { get; set; }
        public Int32 ColorID { get; set; }
        public Int32 SizeID { get; set; }
        [DefaultValue(0)]
        public Int32 Quantity { get; set; }
        [DefaultValue(0)]
        public Int32 OriginalQuantity { get; set; }
        public String Description { get; set; }
    }
}