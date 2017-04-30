
namespace ERP.Inventory.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Inventory.Depot")]
    [BasedOnRow(typeof(Entities.DepotRow))]
    public class DepotForm
    {
        public String DepotID { get; set; }
        public String DepotName { get; set; }
        public String Description { get; set; }
    }
}