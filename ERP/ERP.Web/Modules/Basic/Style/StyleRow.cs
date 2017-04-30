

namespace ERP.Basic.Entities
{
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Shoes"), DisplayName("Styles"), InstanceName("Styles"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    public sealed class StyleRow : Row, IIdRow, INameRow
    {
        [DisplayName("Style Id"), Column("StyleID"), Identity]
        public Int32? StyleId
        {
            get { return Fields.StyleId[this]; }
            set { Fields.StyleId[this] = value; }
        }

        [DisplayName("Style Name"), Size(50), NotNull, QuickSearch]
        public String StyleName
        {
            get { return Fields.StyleName[this]; }
            set { Fields.StyleName[this] = value; }
        }

        [DisplayName("Description"), Size(200)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.StyleId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.StyleName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public StyleRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field StyleId;
            public StringField StyleName;
            public StringField Description;

            public RowFields()
                : base("[dbo].[Styles]")
            {
                LocalTextPrefix = "Basic.Style";
            }
        }
    }
}