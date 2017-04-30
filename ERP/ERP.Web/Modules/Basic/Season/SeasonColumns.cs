
namespace ERP.Basic.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Basic.Season")]
    [BasedOnRow(typeof(Entities.SeasonRow))]
    public class SeasonColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 SeasonId { get; set; }
        [EditLink]
        public String SeasonName { get; set; }
        public String Description { get; set; }
    }
}