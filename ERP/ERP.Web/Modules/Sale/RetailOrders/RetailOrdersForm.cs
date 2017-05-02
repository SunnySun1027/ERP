
namespace ERP.Sale.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Sale.RetailOrders")]
    [BasedOnRow(typeof(Entities.RetailOrdersRow))]
    public class RetailOrdersForm
    {
        [Category("General")]
        public String OrderId { get; set; }
        public String CustomerId { get; set; }
        public Int32 UserId { get; set; }
        [DefaultValue("now")]
        public DateTime CreateDate { get; set; }
        public String Description { get; set; }
        //public Int16 State { get; set; }

        [Category("Retail Order Details")]
        [RetailOrderDetailsEditor]
        public List<Entities.RetailOrderDetailsRow> DetailList { get; set; }
    }
}