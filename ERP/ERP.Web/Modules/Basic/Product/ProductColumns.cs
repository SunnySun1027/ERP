
namespace ERP.Basic.Columns
{
    using Serenity.ComponentModel;
    using System;
    using System.ComponentModel;

    [ColumnsScript("Basic.Product")]
    [BasedOnRow(typeof(Entities.ProductRow))]
    public class ProductColumns
    {
        [EditLink, DisplayName("Db.Shared.RecordId"), AlignRight]
        public String ProductID { get; set; }
        [InlineImageFormatter(FileProperty = "ProductImage", Thumb = true), Width(140)]
        public String ProductThumbnail { get; set; }
        [EditLink, Width(250)]
        public String ProductName { get; set; }

        [Width(250), ProductColorListFormatter]
        public String ProductColor { get; set; }
        [Width(250), ProductSizeListFormatter]
        public String ProductSize { get; set; }
        [QuickFilter]
        public Boolean Discontinued { get; set; }
        [EditLink(ItemType = "Basic.Supplier"), QuickFilter]
        public String SupplierCompanyName { get; set; }
        [EditLink(ItemType = "Basic.Category"), Width(150), QuickFilter, QuickFilterOption("multiple", true)]
        public String CategoryName { get; set; }
        [Width(130)]
        public String QuantityPerUnit { get; set; }
        [Width(80), AlignRight]
        public Decimal UnitPrice { get; set; }
        [Width(80), AlignRight]
        public Int16 UnitsInStock { get; set; }
        [Width(80), AlignRight]
        public Int16 UnitsOnOrder { get; set; }
        [Width(80), AlignRight]
        public Int16 ReorderLevel { get; set; }
    }
}