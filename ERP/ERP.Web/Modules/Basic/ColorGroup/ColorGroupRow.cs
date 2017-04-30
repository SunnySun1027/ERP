

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

    [ConnectionKey("Shoes"), DisplayName("ColorGroup"), InstanceName("ColorGroup"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    [LookupScript("Shoes.ColorGroup")]
    public sealed class ColorGroupRow : Row, IIdRow, INameRow
    {
        [DisplayName("Group Id"), Column("GroupID"), Identity]
        public Int32? GroupId
        {
            get { return Fields.GroupId[this]; }
            set { Fields.GroupId[this] = value; }
        }

        [DisplayName("Group Name"), Size(30), NotNull, QuickSearch]
        public String GroupName
        {
            get { return Fields.GroupName[this]; }
            set { Fields.GroupName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.GroupId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.GroupName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public ColorGroupRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field GroupId;
            public StringField GroupName;

            public RowFields()
                : base("[dbo].[ColorGroup]")
            {
                LocalTextPrefix = "Basic.ColorGroup";
            }
        }
    }
}