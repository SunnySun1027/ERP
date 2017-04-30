
namespace ERP.Basic.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Basic.ProductColor")]
    [BasedOnRow(typeof(Entities.ProductColorRow))]
    public class ProductColorForm
    {
        public String ColorName { get; set; }
        [LookupEditor(typeof(Entities.ColorGroupRow))]
        public Int32 ColorGroupId { get; set; }
    }
}