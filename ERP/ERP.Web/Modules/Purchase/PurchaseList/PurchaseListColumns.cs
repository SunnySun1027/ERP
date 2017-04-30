
namespace ERP.Purchase.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Purchase.PurchaseList")]
    [BasedOnRow(typeof(Entities.PurchaseListRow))]
    public class PurchaseListColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public String PurchaseId { get; set; }
        public Int32 SupplierId { get; set; }
        public String DepotID { get; set; }
        public Int32 UserId { get; set; }
        public DateTime CreateDate { get; set; }
        public String Description { get; set; }
        public Int16 State { get; set; }
    }
}