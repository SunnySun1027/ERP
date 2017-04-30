
namespace ERP.Basic.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Basic.SizeGroup")]
    [BasedOnRow(typeof(Entities.SizeGroupRow))]
    public class SizeGroupForm
    {
        public String GroupName { get; set; }
    }
}