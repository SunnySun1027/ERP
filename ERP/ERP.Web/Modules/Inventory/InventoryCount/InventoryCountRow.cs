

namespace ERP.Inventory.Entities
{
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Shoes"), DisplayName("InventoryCount"), InstanceName("InventoryCount"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    public sealed class InventoryCountRow : Row, IIdRow, INameRow
    {
        [DisplayName("Inventory Id"), Column("InventoryID"), Size(14), PrimaryKey, QuickSearch, Updatable(false), LookupInclude]
        public String InventoryId
        {
            get { return Fields.InventoryId[this]; }
            set { Fields.InventoryId[this] = value; }
        }

        [DisplayName("Depot"), Column("DepotID"), Size(5), NotNull, ForeignKey("[dbo].[Depots]", "DepotID"), LeftJoin("jDepot"), TextualField("DepotDepotName")]
        [LookupEditor(typeof(DepotRow), InplaceAdd = true)]
        public String DepotID
        {
            get { return Fields.DepotID[this]; }
            set { Fields.DepotID[this] = value; }
        }

        [DisplayName("Check Date"), NotNull]
        public DateTime? CheckDate
        {
            get { return Fields.CheckDate[this]; }
            set { Fields.CheckDate[this] = value; }
        }

        [DisplayName("Description"), Size(1000)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("State"), NotNull]
        [DefaultValue(0)]
        public Int16? State
        {
            get { return Fields.State[this]; }
            set { Fields.State[this] = value; }
        }

        [DisplayName("Depot Depot Name"), Expression("jDepot.[DepotName]")]
        public String DepotDepotName
        {
            get { return Fields.DepotDepotName[this]; }
            set { Fields.DepotDepotName[this] = value; }
        }

        [DisplayName("Depot Description"), Expression("jDepot.[Description]")]
        public String DepotDescription
        {
            get { return Fields.DepotDescription[this]; }
            set { Fields.DepotDescription[this] = value; }
        }

        [DisplayName("Details"), MasterDetailRelation(foreignKey: "InventoryID"), NotMapped]
        public List<InventoryCountDetailRow> DetailList
        {
            get { return Fields.DetailList[this]; }
            set { Fields.DetailList[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.InventoryId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.InventoryId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public InventoryCountRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField InventoryId;
            public StringField DepotID;
            public DateTimeField CheckDate;
            public StringField Description;
            public Int16Field State;

            public StringField DepotDepotName;
            public StringField DepotDescription;

            public RowListField<InventoryCountDetailRow> DetailList;

            public RowFields()
                : base("[dbo].[InventoryCount]")
            {
                LocalTextPrefix = "Inventory.InventoryCount";
            }
        }
    }
}