

namespace ERP.Inventory.Entities
{
    using Basic.Entities;
    using Newtonsoft.Json;
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Data.Mapping;
    using System;
    using System.ComponentModel;
    using System.IO;

    [ConnectionKey("Shoes"), DisplayName("DepotStock"), InstanceName("DepotStock"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    [LookupScript("Inventory.DepotStock")]
    public sealed class DepotStockRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity, LookupInclude]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Depot"), Column("DepotID"), Size(5), NotNull, PrimaryKey, ForeignKey("[dbo].[Depots]", "DepotID"), LeftJoin("jDepot"), QuickSearch, TextualField("DepotDepotName"), LookupInclude]
        [LookupEditor(typeof(DepotRow), InplaceAdd = false)]
        public String DepotID
        {
            get { return Fields.DepotID[this]; }
            set { Fields.DepotID[this] = value; }
        }

        [DisplayName("Product"), Column("ProductID"), NotNull, PrimaryKey, ForeignKey("[dbo].[Products]", "ProductID"), LeftJoin("jProduct"), TextualField("ProductName"), LookupInclude]
        [LookupEditor(typeof(ProductRow), InplaceAdd = true)]
        public Int32? ProductID
        {
            get { return Fields.ProductID[this]; }
            set { Fields.ProductID[this] = value; }
        }

        [DisplayName("Color"), Column("ColorID"), NotNull, PrimaryKey, ForeignKey("[dbo].[ProductColor]", "ColorID"), LeftJoin("jColor"), TextualField("ColorName"), LookupInclude]
        [LookupEditor(typeof(ProductColorRow), InplaceAdd = true)]
        public Int32? ColorID
        {
            get { return Fields.ColorID[this]; }
            set { Fields.ColorID[this] = value; }
        }

        [DisplayName("Size"), Column("SizeID"), NotNull, PrimaryKey, ForeignKey("[dbo].[ProductSize]", "SizeID"), LeftJoin("jSize"), TextualField("SizeName"), LookupInclude]
        [LookupEditor(typeof(ProductSizeRow), InplaceAdd = true)]
        public Int32? SizeID
        {
            get { return Fields.SizeID[this]; }
            set { Fields.SizeID[this] = value; }
        }

        [DisplayName("Quantity"), NotNull, LookupInclude]
        [DefaultValue(0)]
        public Int32? Quantity
        {
            get { return Fields.Quantity[this]; }
            set { Fields.Quantity[this] = value; }
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

        [DisplayName("Product Product Name"), Expression("jProduct.[ProductName]"), QuickSearch]
        public String ProductName
        {
            get { return Fields.ProductName[this]; }
            set { Fields.ProductName[this] = value; }
        }

        [DisplayName("Product Supplier Id"), Expression("jProduct.[SupplierID]")]
        public Int32? ProductSupplierId
        {
            get { return Fields.ProductSupplierId[this]; }
            set { Fields.ProductSupplierId[this] = value; }
        }

        [DisplayName("Product Category Id"), Expression("jProduct.[CategoryID]")]
        public Int32? ProductCategoryId
        {
            get { return Fields.ProductCategoryId[this]; }
            set { Fields.ProductCategoryId[this] = value; }
        }

        [DisplayName("Product Quantity Per Unit"), Expression("jProduct.[QuantityPerUnit]")]
        public String ProductQuantityPerUnit
        {
            get { return Fields.ProductQuantityPerUnit[this]; }
            set { Fields.ProductQuantityPerUnit[this] = value; }
        }

        [DisplayName("Product Unit Price"), Expression("jProduct.[UnitPrice]")]
        public Decimal? ProductUnitPrice
        {
            get { return Fields.ProductUnitPrice[this]; }
            set { Fields.ProductUnitPrice[this] = value; }
        }

        [DisplayName("Product Units In Stock"), Expression("jProduct.[UnitsInStock]")]
        public Int16? ProductUnitsInStock
        {
            get { return Fields.ProductUnitsInStock[this]; }
            set { Fields.ProductUnitsInStock[this] = value; }
        }

        [DisplayName("Product Units On Order"), Expression("jProduct.[UnitsOnOrder]")]
        public Int16? ProductUnitsOnOrder
        {
            get { return Fields.ProductUnitsOnOrder[this]; }
            set { Fields.ProductUnitsOnOrder[this] = value; }
        }

        [DisplayName("Product Reorder Level"), Expression("jProduct.[ReorderLevel]")]
        public Int16? ProductReorderLevel
        {
            get { return Fields.ProductReorderLevel[this]; }
            set { Fields.ProductReorderLevel[this] = value; }
        }

        [DisplayName("Product Discontinued"), Expression("jProduct.[Discontinued]")]
        public Boolean? ProductDiscontinued
        {
            get { return Fields.ProductDiscontinued[this]; }
            set { Fields.ProductDiscontinued[this] = value; }
        }

        [DisplayName("Product Product Image"), Expression("jProduct.[ProductImage]")]
        public String ProductProductImage
        {
            get { return Fields.ProductProductImage[this]; }
            set { Fields.ProductProductImage[this] = value; }
        }

        [DisplayName("Product Gallery Images"), Expression("jProduct.[GalleryImages]")]
        public String ProductGalleryImages
        {
            get { return Fields.ProductGalleryImages[this]; }
            set { Fields.ProductGalleryImages[this] = value; }
        }

        [DisplayName("Color Color Name"), Expression("jColor.[ColorName]")]
        public String ColorName
        {
            get { return Fields.ColorName[this]; }
            set { Fields.ColorName[this] = value; }
        }

        [DisplayName("Color Color Group Id"), Expression("jColor.[ColorGroupID]")]
        public Int32? ColorColorGroupId
        {
            get { return Fields.ColorColorGroupId[this]; }
            set { Fields.ColorColorGroupId[this] = value; }
        }

        [DisplayName("Size Size Name"), Expression("jSize.[SizeName]")]
        public String SizeName
        {
            get { return Fields.SizeName[this]; }
            set { Fields.SizeName[this] = value; }
        }

        [DisplayName("Size Size Group Id"), Expression("jSize.[SizeGroupID]")]
        public Int32? SizeSizeGroupId
        {
            get { return Fields.SizeSizeGroupId[this]; }
            set { Fields.SizeSizeGroupId[this] = value; }
        }

        IIdField IIdRow.IdField
        {
            get { return Fields.Id; }
        }

        StringField INameRow.NameField
        {
            get { return Fields.DepotID; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public DepotStockRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField DepotID;
            public Int32Field ProductID;
            public Int32Field ColorID;
            public Int32Field SizeID;
            public Int32Field Quantity;

            public StringField DepotDepotName;
            public StringField DepotDescription;

            public StringField ProductName;
            public Int32Field ProductSupplierId;
            public Int32Field ProductCategoryId;
            public StringField ProductQuantityPerUnit;
            public DecimalField ProductUnitPrice;
            public Int16Field ProductUnitsInStock;
            public Int16Field ProductUnitsOnOrder;
            public Int16Field ProductReorderLevel;
            public BooleanField ProductDiscontinued;
            public StringField ProductProductImage;
            public StringField ProductGalleryImages;

            public StringField ColorName;
            public Int32Field ColorColorGroupId;

            public StringField SizeName;
            public Int32Field SizeSizeGroupId;

            public RowFields()
                : base("[dbo].[DepotStock]")
            {
                LocalTextPrefix = "Inventory.DepotStock";
            }
        }
    }
}