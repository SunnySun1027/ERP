
namespace ERP.Inventory.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Inventory.Depot")]
    [BasedOnRow(typeof(Entities.DepotRow))]
    public class DepotColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public String DepotID { get; set; }
        public String DepotName { get; set; }
        public String Description { get; set; }
    }
}