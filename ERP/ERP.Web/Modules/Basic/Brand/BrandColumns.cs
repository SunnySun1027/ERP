
namespace ERP.Basic.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Basic.Brand")]
    [BasedOnRow(typeof(Entities.BrandRow))]
    public class BrandColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 BrandId { get; set; }
        [EditLink]
        public String BrandName { get; set; }
        public String Site { get; set; }
        public String Description { get; set; }
    }
}