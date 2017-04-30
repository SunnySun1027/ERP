using FluentMigrator;

namespace ERP.Migrations.ShoesDB
{
    [Migration(20161029001700)]
    public class ShoesDB_20161029_001700_PurchaseList : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("PurchaseList")
                .WithColumn("PurchaseID").AsString(14).PrimaryKey().NotNullable()
                .WithColumn("SupplierID").AsInt32().NotNullable()
                .ForeignKey("FK_PurchaseList_Suppliers", "Suppliers", "SupplierID")
                .WithColumn("DepotID").AsString(5).NotNullable()
                .ForeignKey("FK_PurchaseList_Depots", "Depots", "DepotID")
                .WithColumn("UserID").AsInt32().Nullable()
                .WithColumn("CreateDate").AsDateTime().NotNullable().WithDefaultValue("getdate()")
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("State").AsInt16().NotNullable().WithDefaultValue(0);

            Create.Table("PurchaseDetails")
                .WithColumn("ID").AsInt32().Identity().NotNullable()
                .WithColumn("PurchaseID").AsString(14).PrimaryKey().NotNullable()
                .ForeignKey("FK_PurchaseDetails_PurchaseList", "PurchaseList", "PurchaseID")
                .WithColumn("ProductID").AsInt32().PrimaryKey().NotNullable()
                .ForeignKey("FK_PurchaseDetails_Products", "Products", "ProductID")
                .WithColumn("ColorID").AsInt32().PrimaryKey().NotNullable()
                .ForeignKey("FK_PurchaseDetails_ProductColor", "ProductColor", "ColorID")
                .WithColumn("SizeID").AsInt32().PrimaryKey().NotNullable()
                .ForeignKey("FK_PurchaseDetails_ProductSize", "ProductSize", "SizeID")
                .WithColumn("UnitPrice").AsDecimal().NotNullable().WithDefaultValue(0)
                .WithColumn("Quantity").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("Description").AsString(1000).Nullable();
        }
    }
}