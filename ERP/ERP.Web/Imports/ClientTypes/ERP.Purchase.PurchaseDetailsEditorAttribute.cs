using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace ERP.Purchase
{
    public partial class PurchaseDetailsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "ERP.Purchase.PurchaseDetailsEditor";

        public PurchaseDetailsEditorAttribute()
            : base(Key)
        {
        }
    }
}

