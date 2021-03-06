﻿
namespace ERP.Purchase.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Purchase.PurchaseDetail")]
    [BasedOnRow(typeof(Entities.PurchaseDetailRow))]
    public class PurchaseDetailColumns
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