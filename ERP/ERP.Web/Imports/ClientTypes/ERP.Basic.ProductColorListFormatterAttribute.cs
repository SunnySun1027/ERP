using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace ERP.Basic
{
    public partial class ProductColorListFormatterAttribute : CustomFormatterAttribute
    {
        public const string Key = "ERP.Basic.ProductColorListFormatter";

        public ProductColorListFormatterAttribute()
            : base(Key)
        {
        }
    }
}

