
namespace ERP.Purchase.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Purchase.PurchaseOrderDetail")]
    [BasedOnRow(typeof(Entities.PurchaseOrderDetailRow))]
    public class PurchaseOrderDetailForm
    {
        public Int32 ProductID { get; set; }
        public Int32 ColorID { get; set; }
        public Int32 SizeID { get; set; }
        public Decimal UnitPrice { get; set; }
        public Int32 Quantity { get; set; }
        public String Description { get; set; }
    }
}