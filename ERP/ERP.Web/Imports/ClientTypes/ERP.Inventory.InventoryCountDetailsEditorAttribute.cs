using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace ERP.Inventory
{
    public partial class InventoryCountDetailsEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "ERP.Inventory.InventoryCountDetailsEditor";

        public InventoryCountDetailsEditorAttribute()
            : base(Key)
        {
        }
    }
}

