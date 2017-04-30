
namespace ERP.Basic.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Basic.Style")]
    [BasedOnRow(typeof(Entities.StyleRow))]
    public class StyleForm
    {
        public String StyleName { get; set; }
        public String Description { get; set; }
    }
}