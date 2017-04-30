

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

    [ConnectionKey("Shoes"), DisplayName("Units"), InstanceName("Units"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    public sealed class UnitRow : Row, IIdRow, INameRow
    {
        [DisplayName("Unit Id"), Column("UnitID"), Identity]
        public Int32? UnitId
        {
            get { return Fields.UnitId[this]; }
            set { Fields.UnitId[this] = value; }
        }

        [DisplayName("Unit Name"), Size(50), NotNull, QuickSearch]
        public String UnitName
        {
            get { return Fields.UnitName[this]; }
            set { Fields.UnitName[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.UnitId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.UnitName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public UnitRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field UnitId;
            public StringField UnitName;

            public RowFields()
                : base("[dbo].[Units]")
            {
                LocalTextPrefix = "Basic.Unit";
            }
        }
    }
}