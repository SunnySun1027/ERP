

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

    [ConnectionKey("Shoes"), DisplayName("Materials"), InstanceName("Materials"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    public sealed class MaterialRow : Row, IIdRow, INameRow
    {
        [DisplayName("Material Id"), Column("MaterialID"), Identity]
        public Int32? MaterialId
        {
            get { return Fields.MaterialId[this]; }
            set { Fields.MaterialId[this] = value; }
        }

        [DisplayName("Material Name"), Size(50), NotNull, QuickSearch]
        public String MaterialName
        {
            get { return Fields.MaterialName[this]; }
            set { Fields.MaterialName[this] = value; }
        }

        [DisplayName("Description"), Size(200)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.MaterialId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.MaterialName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public MaterialRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field MaterialId;
            public StringField MaterialName;
            public StringField Description;

            public RowFields()
                : base("[dbo].[Materials]")
            {
                LocalTextPrefix = "Basic.Material";
            }
        }
    }
}