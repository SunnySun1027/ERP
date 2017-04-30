using FluentMigrator;

namespace ERP.Migrations.ShoesDB
{
    [Migration(20161029002000)]
    public class ShoesDB_20161029_002000_SaleList : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("SaleList")
                .WithColumn("SaleID").AsString(14).PrimaryKey().NotNullable()
                .WithColumn("CustomerID").AsString(5).NotNullable()
                .ForeignKey("FK_SaleList_Customers", "Customers", "CustomerID")
                .WithColumn("DepotID").AsString(5).NotNullable()
                .ForeignKey("FK_SaleList_Depots", "Depots", "DepotID")
                .WithColumn("UserID").AsInt32().Nullable()
                .WithColumn("CreateDate").AsDateTime().NotNullable().WithDefaultValue("getdate()")
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("State").AsInt16().NotNullable().WithDefaultValue(0);

            Create.Table("SaleDetails")
                .WithColumn("ID").AsInt32().Identity().NotNullable()
                .WithColumn("SaleID").AsString(14).PrimaryKey().NotNullable()
                .ForeignKey("FK_SaleDetails_SaleOrders", "SaleOrders", "OrderID")
                .WithColumn("ProductID").AsInt32().PrimaryKey().NotNullable()
                .ForeignKey("FK_SaleDetails_Products", "Products", "ProductID")
                .WithColumn("ColorID").AsInt32().PrimaryKey().NotNullable()
                .ForeignKey("FK_SaleDetails_ProductColor", "ProductColor", "ColorID")
                .WithColumn("SizeID").AsInt32().PrimaryKey().NotNullable()
                .ForeignKey("FK_SaleDetails_ProductSize", "ProductSize", "SizeID")
                .WithColumn("UnitPrice").AsDecimal().NotNullable().WithDefaultValue(0)
                .WithColumn("Quantity").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("Description").AsString(1000).Nullable();
        }
    }
}