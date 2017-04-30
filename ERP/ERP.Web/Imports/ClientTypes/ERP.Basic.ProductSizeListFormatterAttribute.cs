using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace ERP.Basic
{
    public partial class ProductSizeListFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "ERP.Basic.ProductSizeListFormatter";

        public ProductSizeListFormatterAttribute()
            : base(Key)
        {
        }
    }
}

