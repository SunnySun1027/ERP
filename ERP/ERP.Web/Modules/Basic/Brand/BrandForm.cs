
namespace ERP.Basic.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Basic.Brand")]
    [BasedOnRow(typeof(Entities.BrandRow))]
    public class BrandForm
    {
        public String BrandName { get; set; }
        public String Site { get; set; }
        public String Description { get; set; }
    }
}