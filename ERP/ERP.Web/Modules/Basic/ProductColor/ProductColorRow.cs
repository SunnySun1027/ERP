

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

    [ConnectionKey("Shoes"), DisplayName("ProductColor"), InstanceName("ProductColor"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    [LookupScript("Basic.ProductColor")]
    public sealed class ProductColorRow : Row, IIdRow, INameRow
    {
        [DisplayName("Color Id"), Column("ColorID"), Identity]
        public Int32? ColorID
        {
            get { return Fields.ColorID[this]; }
            set { Fields.ColorID[this] = value; }
        }

        [DisplayName("Color Name"), Size(30), NotNull, QuickSearch]
        public String ColorName
        {
            get { return Fields.ColorName[this]; }
            set { Fields.ColorName[this] = value; }
        }

        [DisplayName("Color Group"), Column("ColorGroupID"), NotNull, ForeignKey("[dbo].[ColorGroup]", "GroupID"), LeftJoin("jColorGroup"), TextualField("ColorGroupGroupName")]
        public Int32? ColorGroupId
        {
            get { return Fields.ColorGroupId[this]; }
            set { Fields.ColorGroupId[this] = value; }
        }

        [DisplayName("Color Group Group Name"), Expression("jColorGroup.[GroupName]")]
        public String ColorGroupGroupName
        {
            get { return Fields.ColorGroupGroupName[this]; }
            set { Fields.ColorGroupGroupName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.ColorID; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ColorName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProductColorRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field ColorID;
            public StringField ColorName;
            public Int32Field ColorGroupId;

            public StringField ColorGroupGroupName;

            public RowFields()
                : base("[dbo].[ProductColor]")
            {
                LocalTextPrefix = "Basic.ProductColor";
            }
        }
    }
}