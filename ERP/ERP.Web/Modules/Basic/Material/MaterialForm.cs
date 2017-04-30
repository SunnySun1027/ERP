
namespace ERP.Basic.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Basic.Material")]
    [BasedOnRow(typeof(Entities.MaterialRow))]
    public class MaterialForm
    {
        public String MaterialName { get; set; }
        public String Description { get; set; }
    }
}