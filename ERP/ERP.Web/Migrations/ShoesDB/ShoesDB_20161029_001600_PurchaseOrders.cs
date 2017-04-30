using FluentMigrator;

namespace ERP.Migrations.ShoesDB
{
    [Migration(20161029001600)]
    public class ShoesDB_20161029_001600_PurchaseOrders : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("PurchaseOrders")
                .WithColumn("OrderID").AsString(14).PrimaryKey().NotNullable()
                .WithColumn("SupplierID").AsInt32().NotNullable()
                .ForeignKey("FK_PurchaseOrders_Suppliers", "Suppliers", "SupplierID")
                .WithColumn("UserID").AsInt32().Nullable()
                .WithColumn("CreateDate").AsDateTime().NotNullable().WithDefaultValue("getdate()")
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("State").AsInt16().NotNullable().WithDefaultValue(0);

            Create.Table("PurchaseOrderDetails")
                .WithColumn("ID").AsInt32().Identity().NotNullable()
                .WithColumn("OrderID").AsString(14).PrimaryKey().NotNullable()
                .ForeignKey("FK_PurchaseOrderDetails_PurchaseOrders", "PurchaseOrders", "OrderID")
                .WithColumn("ProductID").AsInt32().PrimaryKey().NotNullable()
                .ForeignKey("FK_PurchaseOrderDetails_Products", "Products", "ProductID")
                .WithColumn("ColorID").AsInt32().PrimaryKey().NotNullable()
                .ForeignKey("FK_PurchaseOrderDetails_ProductColor", "ProductColor", "ColorID")
                .WithColumn("SizeID").AsInt32().PrimaryKey().NotNullable()
                .ForeignKey("FK_PurchaseOrderDetails_ProductSize", "ProductSize", "SizeID")
                .WithColumn("UnitPrice").AsDecimal().NotNullable().WithDefaultValue(0)
                .WithColumn("Quantity").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("Description").AsString(1000).Nullable();
        }
    }
}