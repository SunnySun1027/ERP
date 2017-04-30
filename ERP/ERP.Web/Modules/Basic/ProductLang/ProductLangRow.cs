

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

    [ConnectionKey("Shoes"), DisplayName("ProductLang"), InstanceName("ProductLang"), TwoLevelCached]
    [ReadPermission("Basic:General")]
    [ModifyPermission("Basic:General")]
    public sealed class ProductLangRow : Row, IIdRow, INameRow, ILocalizationRow
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

        [DisplayName("Language Id"), Column("LanguageID"), NotNull]
        public Int32? LanguageId
        {
            get { return Fields.LanguageId[this]; }
            set { Fields.LanguageId[this] = value; }
        }

        [DisplayName("Product Name"), Size(40), QuickSearch]
        public String ProductName
        {
            get { return Fields.ProductName[this]; }
            set { Fields.ProductName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.ProductName; }
        }

        public Field CultureIdField
        {
            get { return Fields.LanguageId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ProductLangRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public Int32Field ProductID;
            public Int32Field LanguageId;
            public StringField ProductName;

            public RowFields()
                : base("[dbo].[ProductLang]")
            {
                LocalTextPrefix = "Basic.ProductLang";
            }
        }
    }
}