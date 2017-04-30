
namespace ERP.Basic.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Basic.Style")]
    [BasedOnRow(typeof(Entities.StyleRow))]
    public class StyleColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 StyleId { get; set; }
        [EditLink]
        public String StyleName { get; set; }
        public String Description { get; set; }
    }
}