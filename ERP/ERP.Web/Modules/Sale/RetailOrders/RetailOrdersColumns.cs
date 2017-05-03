
namespace ERP.Sale.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Sale.RetailOrders")]
    [BasedOnRow(typeof(Entities.RetailOrdersRow))]
    public class RetailOrdersColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public String OrderId { get; set; }
        public String DepotDepotName { get; set; }
        public String CustomerId { get; set; }
        public Int32 UserId { get; set; }
        public DateTime CreateDate { get; set; }
        public String Description { get; set; }
        public Int16 State { get; set; }
    }
}