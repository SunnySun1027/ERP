
namespace ERP.Basic.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Basic.Unit")]
    [BasedOnRow(typeof(Entities.UnitRow))]
    public class UnitColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 UnitId { get; set; }
        [EditLink]
        public String UnitName { get; set; }
    }
}