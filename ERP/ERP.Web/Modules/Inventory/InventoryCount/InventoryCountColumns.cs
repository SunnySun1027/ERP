
namespace ERP.Inventory.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Inventory.InventoryCount")]
    [BasedOnRow(typeof(Entities.InventoryCountRow))]
    public class InventoryCountColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public String InventoryId { get; set; }
        public String DepotDepotName { get; set; }
        public DateTime CheckDate { get; set; }
        public String Description { get; set; }
        [ICStateFormatter]
        public Int16 State { get; set; }
    }
}