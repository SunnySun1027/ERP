
namespace ERP.Basic.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Basic.ProductColor")]
    [BasedOnRow(typeof(Entities.ProductColorRow))]
    public class ProductColorColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 ColorID { get; set; }
        [EditLink]
        public String ColorName { get; set; }
        public string ColorGroupGroupName { get; set; }
    }
}