
namespace ERP.Basic.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Basic.ProductSize")]
    [BasedOnRow(typeof(Entities.ProductSizeRow))]
    public class ProductSizeColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 SizeID { get; set; }
        [EditLink]
        public String SizeName { get; set; }
        public String SizeGroupGroupName { get; set; }
    }
}