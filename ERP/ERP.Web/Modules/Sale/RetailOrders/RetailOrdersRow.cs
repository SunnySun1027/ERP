
namespace ERP.Sale.Entities
{
    using Inventory.Entities;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.Collections.Generic;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Shoes"), TableName("[dbo].[RetailOrders]"), DisplayName("Retail Orders"), InstanceName("Retail Orders"), TwoLevelCached]
    [ReadPermission("Administration:General")]
    [ModifyPermission("Administration:General")]
    public sealed class RetailOrdersRow : Row, IIdRow, INameRow
    {
        [DisplayName("Order Id"), Column("OrderID"), Size(14), PrimaryKey, QuickSearch, Updatable(false), LookupInclude]
        public String OrderId
        {
            get { return Fields.OrderId[this]; }
            set { Fields.OrderId[this] = value; }
        }

        [DisplayName("Depot"), Column("DepotID"), Size(5), NotNull, ForeignKey("[dbo].[Depots]", "DepotID"), LeftJoin("jDepot"), TextualField("DepotDepotName")]
        [LookupEditor(typeof(DepotRow), InplaceAdd = true)]
        public String DepotID
        {
            get { return Fields.DepotID[this]; }
            set { Fields.DepotID[this] = value; }
        }

        [DisplayName("Customer"), Column("CustomerID"), Size(5), NotNull, ForeignKey("[dbo].[Customers]", "CustomerID"), LeftJoin("jCustomer"), TextualField("CustomerCompanyName")]
        [LookupEditor(typeof(CustomerRow), InplaceAdd = true)]
        public String CustomerId
        {
            get { return Fields.CustomerId[this]; }
            set { Fields.CustomerId[this] = value; }
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
        public Int16? State
        {
            get { return Fields.State[this]; }
            set { Fields.State[this] = value; }
        }

        [DisplayName("Customer Company Name"), Expression("jCustomer.[CompanyName]")]
        public String CustomerCompanyName
        {
            get { return Fields.CustomerCompanyName[this]; }
            set { Fields.CustomerCompanyName[this] = value; }
        }

        [DisplayName("Customer Contact Name"), Expression("jCustomer.[ContactName]")]
        public String CustomerContactName
        {
            get { return Fields.CustomerContactName[this]; }
            set { Fields.CustomerContactName[this] = value; }
        }

        [DisplayName("Customer Contact Title"), Expression("jCustomer.[ContactTitle]")]
        public String CustomerContactTitle
        {
            get { return Fields.CustomerContactTitle[this]; }
            set { Fields.CustomerContactTitle[this] = value; }
        }

        [DisplayName("Customer Address"), Expression("jCustomer.[Address]")]
        public String CustomerAddress
        {
            get { return Fields.CustomerAddress[this]; }
            set { Fields.CustomerAddress[this] = value; }
        }

        [DisplayName("Customer City"), Expression("jCustomer.[City]")]
        public String CustomerCity
        {
            get { return Fields.CustomerCity[this]; }
            set { Fields.CustomerCity[this] = value; }
        }

        [DisplayName("Customer Region"), Expression("jCustomer.[Region]")]
        public String CustomerRegion
        {
            get { return Fields.CustomerRegion[this]; }
            set { Fields.CustomerRegion[this] = value; }
        }

        [DisplayName("Customer Postal Code"), Expression("jCustomer.[PostalCode]")]
        public String CustomerPostalCode
        {
            get { return Fields.CustomerPostalCode[this]; }
            set { Fields.CustomerPostalCode[this] = value; }
        }

        [DisplayName("Customer Country"), Expression("jCustomer.[Country]")]
        public String CustomerCountry
        {
            get { return Fields.CustomerCountry[this]; }
            set { Fields.CustomerCountry[this] = value; }
        }

        [DisplayName("Customer Phone"), Expression("jCustomer.[Phone]")]
        public String CustomerPhone
        {
            get { return Fields.CustomerPhone[this]; }
            set { Fields.CustomerPhone[this] = value; }
        }

        [DisplayName("Customer Fax"), Expression("jCustomer.[Fax]")]
        public String CustomerFax
        {
            get { return Fields.CustomerFax[this]; }
            set { Fields.CustomerFax[this] = value; }
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

        [DisplayName("Details"), MasterDetailRelation(foreignKey: "OrderID"), NotMapped]
        public List<RetailOrderDetailsRow> DetailList
        {
            get { return Fields.DetailList[this]; }
            set { Fields.DetailList[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.OrderId; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.OrderId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public RetailOrdersRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public StringField OrderId;
            public StringField DepotID;
            public StringField CustomerId;
            public Int32Field UserId;
            public DateTimeField CreateDate;
            public StringField Description;
            public Int16Field State;

            public StringField CustomerCompanyName;
            public StringField CustomerContactName;
            public StringField CustomerContactTitle;
            public StringField CustomerAddress;
            public StringField CustomerCity;
            public StringField CustomerRegion;
            public StringField CustomerPostalCode;
            public StringField CustomerCountry;
            public StringField CustomerPhone;
            public StringField CustomerFax;

            public StringField DepotDepotName;
            public StringField DepotDescription;

            public RowListField<RetailOrderDetailsRow> DetailList;

            public RowFields()
                : base()
            {
                LocalTextPrefix = "Sale.RetailOrders";
            }
        }
    }
}
