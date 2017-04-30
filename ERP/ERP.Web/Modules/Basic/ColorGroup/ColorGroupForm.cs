
namespace ERP.Basic.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Basic.ColorGroup")]
    [BasedOnRow(typeof(Entities.ColorGroupRow))]
    public class ColorGroupForm
    {
        public String GroupName { get; set; }
    }
}