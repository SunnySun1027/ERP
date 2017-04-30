using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace ERP.Sale
{
    public partial class FreightFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "ERP.Sale.FreightFormatter";

        public FreightFormatterAttribute()
            : base(Key)
        {
        }
    }
}

