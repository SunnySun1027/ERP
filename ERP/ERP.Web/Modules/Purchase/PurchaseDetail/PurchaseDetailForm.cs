
namespace ERP.Purchase.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Purchase.PurchaseDetail")]
    [BasedOnRow(typeof(Entities.PurchaseDetailRow))]
    public class PurchaseDetailForm
    {
        public Int32 ProductID { get; set; }
        public Int32 ColorID { get; set; }
        public Int32 SizeID { get; set; }
        public Decimal UnitPrice { get; set; }
        [DefaultValue(0)]
        public Int32 Quantity { get; set; }
        public String Description { get; set; }
    }
}