
namespace ERP.Basic.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.ComponentModel;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Basic.Season")]
    [BasedOnRow(typeof(Entities.SeasonRow))]
    public class SeasonForm
    {
        public String SeasonName { get; set; }
        public String Description { get; set; }
    }
}