
namespace ERP.Basic.Columns
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [ColumnsScript("Basic.Material")]
    [BasedOnRow(typeof(Entities.MaterialRow))]
    public class MaterialColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public Int32 MaterialId { get; set; }
        [EditLink]
        public String MaterialName { get; set; }
        public String Description { get; set; }
    }
}