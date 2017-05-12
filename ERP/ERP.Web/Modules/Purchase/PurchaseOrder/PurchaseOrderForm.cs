
namespace ERP.Purchase.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;
    using Entities;
    [FormScript("Purchase.PurchaseOrder")]
    [BasedOnRow(typeof(Entities.PurchaseOrderRow))]
    public class PurchaseOrderForm
    {
        [Category("Order")]
        public String OrderId { get; set; }
        [LookupEditor(typeof(SupplierRow), InplaceAdd = true)]
        public Int32 SupplierId { get; set; }
        public Int32 UserId { get; set; }
        [DefaultValue("now")]
        public DateTime CreateDate { get; set; }
        public String Description { get; set; }
        public Int16 State { get; set; }

        [Category("Order Details")]
        [PurchaseOrderDetailsEditor]
        public List<Entities.PurchaseOrderDetailRow> DetailList { get; set; }
    }
}