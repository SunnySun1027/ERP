

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

    [ConnectionKey("Shoes"), DisplayName("ProductProductSize"), InstanceName("ProductProductSize"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    public sealed class ProductProductSizeRow : Row, IIdRow
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

        [DisplayName("Size"), Column("SizeID"), NotNull, ForeignKey("[dbo].[ProductSize]", "SizeID"), LeftJoin("jSize"), TextualField("SizeName")]
        public Int32? SizeID
        {
            get { return Fields.SizeID[this]; }
            set { Fields.SizeID[this] = value; }
        }

        [DisplayName("Size Size Name"), Expression("jSize.[SizeName]")]
        public String SizeName
        {
            get { return Fields.SizeName[this]; }
            set { Fields.SizeName[this] = value; }
        }

        [DisplayName("Size Size Group Id"), Expression("jSize.[SizeGroupID]")]
        public Int32? SizeSizeGroupId
        {
            get { return Fields.SizeSizeGroupId[this]; }
            set { Fields.SizeSizeGroupId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProductProductSizeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field ProductID;
            public Int32Field SizeID;

            public StringField SizeName;
            public Int32Field SizeSizeGroupId;

            public RowFields()
                : base("[dbo].[ProductProductSize]")
            {
                LocalTextPrefix = "Basic.ProductProductSize";
            }
        }
    }
}