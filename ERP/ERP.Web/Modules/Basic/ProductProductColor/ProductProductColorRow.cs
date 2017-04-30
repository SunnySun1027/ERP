

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

    [ConnectionKey("Shoes"), DisplayName("ProductProductColor"), InstanceName("ProductProductColor"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    public sealed class ProductProductColorRow : Row, IIdRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Product Id"), Column("ProductID"), NotNull]
        public Int32? ProductID
        {
            get { return Fields.ProductID[this]; }
            set { Fields.ProductID[this] = value; }
        }

        [DisplayName("Color"), Column("ColorID"), NotNull, ForeignKey("[dbo].[ProductColor]", "ColorID"), LeftJoin("jColor"), TextualField("ColorName")]
        public Int32? ColorID
        {
            get { return Fields.ColorID[this]; }
            set { Fields.ColorID[this] = value; }
        }

        [DisplayName("Color Color Name"), Expression("jColor.[ColorName]")]
        public String ColorName
        {
            get { return Fields.ColorName[this]; }
            set { Fields.ColorName[this] = value; }
        }

        [DisplayName("Color Color Group Id"), Expression("jColor.[ColorGroupID]")]
        public Int32? ColorColorGroupId
        {
            get { return Fields.ColorColorGroupId[this]; }
            set { Fields.ColorColorGroupId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProductProductColorRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field ProductID;
            public Int32Field ColorID;

            public StringField ColorName;
            public Int32Field ColorColorGroupId;

            public RowFields()
                : base("[dbo].[ProductProductColor]")
            {
                LocalTextPrefix = "Basic.ProductProductColor";
            }
        }
    }
}