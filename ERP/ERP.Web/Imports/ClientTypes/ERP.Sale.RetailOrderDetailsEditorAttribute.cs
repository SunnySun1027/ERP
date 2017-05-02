using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace ERP.Sale
{
    public partial class RetailOrderDetailsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "ERP.Sale.RetailOrderDetailsEditor";

        public RetailOrderDetailsEditorAttribute()
            : base(Key)
        {
        }
    }
}

