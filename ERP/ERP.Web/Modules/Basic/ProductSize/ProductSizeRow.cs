

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

    [ConnectionKey("Shoes"), DisplayName("ProductSize"), InstanceName("ProductSize"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    [LookupScript("Basic.ProductSize")]
    public sealed class ProductSizeRow : Row, IIdRow, INameRow
    {
        [DisplayName("Size Id"), Column("SizeID"), Identity]
        public Int32? SizeID
        {
            get { return Fields.SizeID[this]; }
            set { Fields.SizeID[this] = value; }
        }

        [DisplayName("Size Name"), Size(30), NotNull, QuickSearch]
        public String SizeName
        {
            get { return Fields.SizeName[this]; }
            set { Fields.SizeName[this] = value; }
        }

        [DisplayName("Size Group"), Column("SizeGroupID"), NotNull, ForeignKey("[dbo].[SizeGroup]", "GroupID"), LeftJoin("jSizeGroup"), TextualField("SizeGroupGroupName")]
        public Int32? SizeGroupId
        {
            get { return Fields.SizeGroupId[this]; }
            set { Fields.SizeGroupId[this] = value; }
        }

        [DisplayName("Size Group Group Name"), Expression("jSizeGroup.[GroupName]")]
        public String SizeGroupGroupName
        {
            get { return Fields.SizeGroupGroupName[this]; }
            set { Fields.SizeGroupGroupName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.SizeID; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.SizeName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProductSizeRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field SizeID;
            public StringField SizeName;
            public Int32Field SizeGroupId;

            public StringField SizeGroupGroupName;

            public RowFields()
                : base("[dbo].[ProductSize]")
            {
                LocalTextPrefix = "Basic.ProductSize";
            }
        }
    }
}