using Serenity;
using Serenity.ComponentModel;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;

namespace ERP.Sale
{
    public partial class NotesEditorAttribute : CustomEditorAttribute
    {
        public const string Key = "ERP.Sale.NotesEditor";

        public NotesEditorAttribute()
            : base(Key)
        {
        }
    }
}

