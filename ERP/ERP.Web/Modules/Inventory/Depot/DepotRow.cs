

namespace ERP.Inventory.Entities
{
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Shoes"), DisplayName("Depots"), InstanceName("Depots"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    [LookupScript("Inventory.Depot")]
    public sealed class DepotRow : Row, IIdRow, INameRow
    {
        [DisplayName("Depot Id"), Column("DepotID"), Size(5), PrimaryKey, QuickSearch, Updatable(false), LookupInclude]
        public String DepotID
        {
            get { return Fields.DepotID[this]; }
            set { Fields.DepotID[this] = value; }
        }

        [DisplayName("Depot Name"), Size(30), NotNull]
        public String DepotName
        {
            get { return Fields.DepotName[this]; }
            set { Fields.DepotName[this] = value; }
        }

        [DisplayName("Description")]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.DepotID; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DepotName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DepotRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField DepotID;
            public StringField DepotName;
            public StringField Description;

            public RowFields()
                : base("[dbo].[Depots]")
            {
                LocalTextPrefix = "Inventory.Depot";
            }
        }
    }
}