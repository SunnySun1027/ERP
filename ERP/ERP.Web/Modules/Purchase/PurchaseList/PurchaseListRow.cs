

namespace ERP.Purchase.Entities
{
    using Inventory.Entities;
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Shoes"), DisplayName("PurchaseList"), InstanceName("PurchaseList"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    public sealed class PurchaseListRow : Row, IIdRow, INameRow
    {
        [DisplayName("Purchase Id"), Column("PurchaseID"), Size(14), PrimaryKey, QuickSearch, Updatable(false), LookupInclude]
        public String PurchaseId
        {
            get { return Fields.PurchaseId[this]; }
            set { Fields.PurchaseId[this] = value; }
        }

        [DisplayName("Supplier"), Column("SupplierID"), NotNull, ForeignKey("[dbo].[Suppliers]", "SupplierID"), LeftJoin("jSupplier"), TextualField("SupplierCompanyName")]
        [LookupEditor(typeof(SupplierRow), InplaceAdd = true)]
        public Int32? SupplierId
        {
            get { return Fields.SupplierId[this]; }
            set { Fields.SupplierId[this] = value; }
        }

        [DisplayName("Depot"), Column("DepotID"), Size(5), NotNull, ForeignKey("[dbo].[Depots]", "DepotID"), LeftJoin("jDepot"), TextualField("DepotDepotName")]
        [LookupEditor(typeof(DepotRow), InplaceAdd = true)]
        public String DepotID
        {
            get { return Fields.DepotID[this]; }
            set { Fields.DepotID[this] = value; }
        }

        [DisplayName("User Id"), Column("UserID")]
        public Int32? UserId
        {
            get { return Fields.UserId[this]; }
            set { Fields.UserId[this] = value; }
        }

        [DisplayName("Create Date"), NotNull]
        public DateTime? CreateDate
        {
            get { return Fields.CreateDate[this]; }
            set { Fields.CreateDate[this] = value; }
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

        [DisplayName("Supplier Company Name"), Expression("jSupplier.[CompanyName]")]
        public String SupplierCompanyName
        {
            get { return Fields.SupplierCompanyName[this]; }
            set { Fields.SupplierCompanyName[this] = value; }
        }

        [DisplayName("Supplier Contact Name"), Expression("jSupplier.[ContactName]")]
        public String SupplierContactName
        {
            get { return Fields.SupplierContactName[this]; }
            set { Fields.SupplierContactName[this] = value; }
        }

        [DisplayName("Supplier Contact Title"), Expression("jSupplier.[ContactTitle]")]
        public String SupplierContactTitle
        {
            get { return Fields.SupplierContactTitle[this]; }
            set { Fields.SupplierContactTitle[this] = value; }
        }

        [DisplayName("Supplier Address"), Expression("jSupplier.[Address]")]
        public String SupplierAddress
        {
            get { return Fields.SupplierAddress[this]; }
            set { Fields.SupplierAddress[this] = value; }
        }

        [DisplayName("Supplier City"), Expression("jSupplier.[City]")]
        public String SupplierCity
        {
            get { return Fields.SupplierCity[this]; }
            set { Fields.SupplierCity[this] = value; }
        }

        [DisplayName("Supplier Region"), Expression("jSupplier.[Region]")]
        public String SupplierRegion
        {
            get { return Fields.SupplierRegion[this]; }
            set { Fields.SupplierRegion[this] = value; }
        }

        [DisplayName("Supplier Postal Code"), Expression("jSupplier.[PostalCode]")]
        public String SupplierPostalCode
        {
            get { return Fields.SupplierPostalCode[this]; }
            set { Fields.SupplierPostalCode[this] = value; }
        }

        [DisplayName("Supplier Country"), Expression("jSupplier.[Country]")]
        public String SupplierCountry
        {
            get { return Fields.SupplierCountry[this]; }
            set { Fields.SupplierCountry[this] = value; }
        }

        [DisplayName("Supplier Phone"), Expression("jSupplier.[Phone]")]
        public String SupplierPhone
        {
            get { return Fields.SupplierPhone[this]; }
            set { Fields.SupplierPhone[this] = value; }
        }

        [DisplayName("Supplier Fax"), Expression("jSupplier.[Fax]")]
        public String SupplierFax
        {
            get { return Fields.SupplierFax[this]; }
            set { Fields.SupplierFax[this] = value; }
        }

        [DisplayName("Supplier Home Page"), Expression("jSupplier.[HomePage]")]
        public String SupplierHomePage
        {
            get { return Fields.SupplierHomePage[this]; }
            set { Fields.SupplierHomePage[this] = value; }
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

        [DisplayName("Details"), MasterDetailRelation(foreignKey: "PurchaseID"), NotMapped]
        public List<PurchaseDetailRow> DetailList
        {
            get { return Fields.DetailList[this]; }
            set { Fields.DetailList[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.PurchaseId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.PurchaseId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public PurchaseListRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField PurchaseId;
            public Int32Field SupplierId;
            public StringField DepotID;
            public Int32Field UserId;
            public DateTimeField CreateDate;
            public StringField Description;
            public Int16Field State;

            public StringField SupplierCompanyName;
            public StringField SupplierContactName;
            public StringField SupplierContactTitle;
            public StringField SupplierAddress;
            public StringField SupplierCity;
            public StringField SupplierRegion;
            public StringField SupplierPostalCode;
            public StringField SupplierCountry;
            public StringField SupplierPhone;
            public StringField SupplierFax;
            public StringField SupplierHomePage;

            public StringField DepotDepotName;
            public StringField DepotDescription;

            public RowListField<PurchaseDetailRow> DetailList;

            public RowFields()
                : base("[dbo].[PurchaseList]")
            {
                LocalTextPrefix = "Purchase.PurchaseList";
            }
        }
    }
}