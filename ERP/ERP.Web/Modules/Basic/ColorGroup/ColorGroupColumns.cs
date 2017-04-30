
namespace ERP.Basic.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Basic.ColorGroup")]
    [BasedOnRow(typeof(Entities.ColorGroupRow))]
    public class ColorGroupColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 GroupId { get; set; }
        [EditLink]
        public String GroupName { get; set; }
    }
}