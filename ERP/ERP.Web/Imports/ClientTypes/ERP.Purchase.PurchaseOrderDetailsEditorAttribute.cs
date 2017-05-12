using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace ERP.Purchase
{
    public partial class PurchaseOrderDetailsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "ERP.Purchase.PurchaseOrderDetailsEditor";

        public PurchaseOrderDetailsEditorAttribute()
            : base(Key)
        {
        }
    }
}

