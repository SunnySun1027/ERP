
namespace ERP.Basic.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Basic.Unit")]
    [BasedOnRow(typeof(Entities.UnitRow))]
    public class UnitForm
    {
        public String UnitName { get; set; }
    }
}