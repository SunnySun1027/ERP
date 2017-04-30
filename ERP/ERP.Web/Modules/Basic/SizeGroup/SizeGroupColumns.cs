
namespace ERP.Basic.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Basic.SizeGroup")]
    [BasedOnRow(typeof(Entities.SizeGroupRow))]
    public class SizeGroupColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 GroupId { get; set; }
        [EditLink]
        public String GroupName { get; set; }
    }
}