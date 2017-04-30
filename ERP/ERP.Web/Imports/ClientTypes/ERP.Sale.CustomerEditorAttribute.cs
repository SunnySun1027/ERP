using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace ERP.Sale
{
    public partial class CustomerEditorAttribute : LookupEditorBaseAttribute
    {
        public const string Key = "ERP.Sale.CustomerEditor";

        public CustomerEditorAttribute()
            : base(Key)
        {
        }
    }
}

