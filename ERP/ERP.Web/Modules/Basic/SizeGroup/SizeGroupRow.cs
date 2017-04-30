

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

    [ConnectionKey("Shoes"), DisplayName("SizeGroup"), InstanceName("SizeGroup"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    [LookupScript("Shoes.SizeGroup")]
    public sealed class SizeGroupRow : Row, IIdRow, INameRow
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

        public SizeGroupRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field GroupId;
            public StringField GroupName;

            public RowFields()
                : base("[dbo].[SizeGroup]")
            {
                LocalTextPrefix = "Basic.SizeGroup";
            }
        }
    }
}