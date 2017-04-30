

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

    [ConnectionKey("Shoes"), DisplayName("InventoryCountDetails"), InstanceName("InventoryCountDetails"), TwoLevelCached]
    [ReadPermission("Administration")]
    [ModifyPermission("Administration")]
    public sealed class InventoryCountDetailRow : Row, IIdRow, INameRow
    {
        [DisplayName("Id"), Column("ID"), Identity]
        public Int32? Id
        {
            get { return Fields.Id[this]; }
            set { Fields.Id[this] = value; }
        }

        [DisplayName("Inventory"), Column("InventoryID"), Size(14), PrimaryKey, ForeignKey("[dbo].[InventoryCount]", "InventoryID"), LeftJoin("jInventory"), QuickSearch, TextualField("InventoryDepotId"), Updatable(false)]
        public String InventoryId
        {
            get { return Fields.InventoryId[this]; }
            set { Fields.InventoryId[this] = value; }
        }

        [DisplayName("Product"), Column("ProductID"), PrimaryKey, ForeignKey("[dbo].[Products]", "ProductID"), LeftJoin("jProduct"), TextualField("ProductName")]
        [LookupEditor(typeof(ProductRow))]
        public Int32? ProductID
        {
            get { return Fields.ProductID[this]; }
            set { Fields.ProductID[this] = value; }
        }

        [DisplayName("Color"), Column("ColorID"), PrimaryKey, ForeignKey("[dbo].[ProductColor]", "ColorID"), LeftJoin("jColor"), TextualField("ColorName")]
        //[LookupEditor(typeof(ProductColorRow))]
        [LookupEditor(typeof(Scripts.PColorLookup))]
        public Int32? ColorID
        {
            get { return Fields.ColorID[this]; }
            set { Fields.ColorID[this] = value; }
        }

        [DisplayName("Size"), Column("SizeID"), PrimaryKey, ForeignKey("[dbo].[ProductSize]", "SizeID"), LeftJoin("jSize"), TextualField("SizeName")]
        //[LookupEditor(typeof(ProductSizeRow))]
        [LookupEditor(typeof(Scripts.PSizeLookup))]
        public Int32? SizeID
        {
            get { return Fields.SizeID[this]; }
            set { Fields.SizeID[this] = value; }
        }

        [DisplayName("Quantity"), NotNull]
        public Int32? Quantity
        {
            get { return Fields.Quantity[this]; }
            set { Fields.Quantity[this] = value; }
        }

        [DisplayName("Original Quantity"), NotNull, Updatable(false), Insertable(false)]
        public Int32? OriginalQuantity
        {
            get { return Fields.OriginalQuantity[this]; }
            set { Fields.OriginalQuantity[this] = value; }
        }

        [DisplayName("Description"), Size(1000)]
        public String Description
        {
            get { return Fields.Description[this]; }
            set { Fields.Description[this] = value; }
        }

        [DisplayName("Inventory Depot Id"), Expression("jInventory.[DepotID]")]
        public String InventoryDepotId
        {
            get { return Fields.InventoryDepotId[this]; }
            set { Fields.InventoryDepotId[this] = value; }
        }

        [DisplayName("Inventory Check Date"), Expression("jInventory.[CheckDate]")]
        public DateTime? InventoryCheckDate
        {
            get { return Fields.InventoryCheckDate[this]; }
            set { Fields.InventoryCheckDate[this] = value; }
        }

        [DisplayName("Inventory Description"), Expression("jInventory.[Description]")]
        public String InventoryDescription
        {
            get { return Fields.InventoryDescription[this]; }
            set { Fields.InventoryDescription[this] = value; }
        }

        [DisplayName("Inventory State"), Expression("jInventory.[State]")]
        public Int16? InventoryState
        {
            get { return Fields.InventoryState[this]; }
            set { Fields.InventoryState[this] = value; }
        }

        [DisplayName("Product Product Name"), Expression("jProduct.[ProductName]"), MinSelectLevel(SelectLevel.List)]
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

        [DisplayName("Color Color Name"), Expression("jColor.[ColorName]"), MinSelectLevel(SelectLevel.List)]
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

        [DisplayName("Size Size Name"), Expression("jSize.[SizeName]"), MinSelectLevel(SelectLevel.List)]
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
            get { return Fields.InventoryId; }
        }

        public static readonly RowFields Fields = new RowFields().Init();

        public InventoryCountDetailRow()
            : base(Fields)
        {
        }

        public class RowFields : RowFieldsBase
        {
            public Int32Field Id;
            public StringField InventoryId;
            public Int32Field ProductID;
            public Int32Field ColorID;
            public Int32Field SizeID;
            public Int32Field Quantity;
            public Int32Field OriginalQuantity;
            public StringField Description;

            public StringField InventoryDepotId;
            public DateTimeField InventoryCheckDate;
            public StringField InventoryDescription;
            public Int16Field InventoryState;

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

            public StringField ColorName;
            public Int32Field ColorColorGroupId;

            public StringField SizeName;
            public Int32Field SizeSizeGroupId;

            public RowFields()
                : base("[dbo].[InventoryCountDetails]")
            {
                LocalTextPrefix = "Inventory.InventoryCountDetail";
            }
        }
    }
}