
namespace ERP.Purchase.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Purchase.PurchaseList")]
    [BasedOnRow(typeof(Entities.PurchaseListRow))]
    public class PurchaseListForm
    {
        [Category("General")]
        public String PurchaseId { get; set; }
        public Int32 SupplierId { get; set; }
        public String DepotID { get; set; }
        public Int32 UserId { get; set; }
        [DefaultValue("now")]
        public DateTime CreateDate { get; set; }
        public String Description { get; set; }
        public Int16 State { get; set; }
        [Category("Purchase Details")]
        [PurchaseDetailsEditor]
        public List<Entities.PurchaseDetailRow> DetailList { get; set; }
    }
}