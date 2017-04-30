

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

    [ConnectionKey("Shoes"), DisplayName("Brands"), InstanceName("Brands"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    public sealed class BrandRow : Row, IIdRow, INameRow
    {
        [DisplayName("Brand Id"), Column("BrandID"), Identity]
        public Int32? BrandId
        {
            get { return Fields.BrandId[this]; }
            set { Fields.BrandId[this] = value; }
        }

        [DisplayName("Brand Name"), Size(50), NotNull, QuickSearch]
        public String BrandName
        {
            get { return Fields.BrandName[this]; }
            set { Fields.BrandName[this] = value; }
        }

        [DisplayName("Site"), Size(100)]
        public String Site
        {
            get { return Fields.Site[this]; }
            set { Fields.Site[this] = value; }
        }

        [DisplayName("Description"), Size(200)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.BrandId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.BrandName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public BrandRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field BrandId;
            public StringField BrandName;
            public StringField Site;
            public StringField Description;

            public RowFields()
                : base("[dbo].[Brands]")
            {
                LocalTextPrefix = "Basic.Brand";
            }
        }
    }
}