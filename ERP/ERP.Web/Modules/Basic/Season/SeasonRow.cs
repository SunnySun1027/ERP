

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

    [ConnectionKey("Shoes"), DisplayName("Seasons"), InstanceName("Seasons"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    public sealed class SeasonRow : Row, IIdRow, INameRow
    {
        [DisplayName("Season Id"), Column("SeasonID"), Identity]
        public Int32? SeasonId
        {
            get { return Fields.SeasonId[this]; }
            set { Fields.SeasonId[this] = value; }
        }

        [DisplayName("Season Name"), Size(50), NotNull, QuickSearch]
        public String SeasonName
        {
            get { return Fields.SeasonName[this]; }
            set { Fields.SeasonName[this] = value; }
        }

        [DisplayName("Description"), Size(200)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.SeasonId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.SeasonName; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public SeasonRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field SeasonId;
            public StringField SeasonName;
            public StringField Description;

            public RowFields()
                : base("[dbo].[Seasons]")
            {
                LocalTextPrefix = "Basic.Season";
            }
        }
    }
}