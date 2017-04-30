
namespace ERP.Basic.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Basic.ProductSize")]
    [BasedOnRow(typeof(Entities.ProductSizeRow))]
    public class ProductSizeForm
    {
        public String SizeName { get; set; }
        [LookupEditor(typeof(Entities.SizeGroupRow))]
        public Int32 SizeGroupId { get; set; }
    }
}