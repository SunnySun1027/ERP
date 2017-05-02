
namespace ERP.Sale.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Sale.RetailOrderDetails")]
    [BasedOnRow(typeof(Entities.RetailOrderDetailsRow))]
    public class RetailOrderDetailsColumns
    {
        [EditLink, Width(200)]
        public String ProductName { get; set; }
        public String ColorName { get; set; }
        public String SizeName { get; set; }
        public Decimal UnitPrice { get; set; }
        public Int32 Quantity { get; set; }
        public String Description { get; set; }
    }
}