
namespace ERP.Inventory.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Inventory.InventoryCount")]
    [BasedOnRow(typeof(Entities.InventoryCountRow))]
    public class InventoryCountForm
    {
        [Category("General")]
        public String InventoryId { get; set; }
        public String DepotID { get; set; }
        [DefaultValue("now")]
        public DateTime CheckDate { get; set; }
        public String Description { get; set; }
        //public Int16 State { get; set; }

        [Category("Stock Details")]
        [InventoryCountDetailsEditor]
        public List<Entities.InventoryCountDetailRow> DetailList { get; set; }
    }
}