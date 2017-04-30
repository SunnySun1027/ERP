using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace ERP.Inventory
{
    public partial class ICStateFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "ERP.Inventory.ICStateFormatter";

        public ICStateFormatterAttribute()
            : base(Key)
        {
        }
    }
}

