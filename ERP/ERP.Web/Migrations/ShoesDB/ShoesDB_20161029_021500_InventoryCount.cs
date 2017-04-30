using FluentMigrator;

namespace ERP.Migrations.ShoesDB
{
    [Migration(20161029021500)]
    public class ShoesDB_20161029_021500_InventoryCount : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("InventoryCount")
                .WithColumn("InventoryID").AsString(14).PrimaryKey().NotNullable()
                .WithColumn("DepotID").AsString(5).NotNullable()
                .ForeignKey("FK_InventoryCount_Depots", "Depots", "DepotID")
                .WithColumn("CheckDate").AsDateTime().NotNullable().WithDefaultValue("getdate()")
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("State").AsInt16().NotNullable().WithDefaultValue(0);

            Create.Table("InventoryCountDetails")
                .WithColumn("ID").AsInt32().Identity().NotNullable()
                .WithColumn("InventoryID").AsString(14).PrimaryKey().NotNullable()
                .ForeignKey("FK_InventoryCountDetails_InventoryCount", "InventoryCount", "InventoryID")
                .WithColumn("ProductID").AsInt32().PrimaryKey().NotNullable()
                .ForeignKey("FK_InventoryCountDetails_Products", "Products", "ProductID")
                .WithColumn("ColorID").AsInt32().PrimaryKey().NotNullable()
                .ForeignKey("FK_InventoryCountDetails_ProductColor", "ProductColor", "ColorID")
                .WithColumn("SizeID").AsInt32().PrimaryKey().NotNullable()
                .ForeignKey("FK_InventoryCountDetails_ProductSize", "ProductSize", "SizeID")
                .WithColumn("Quantity").AsInt32().NotNullable().WithDefaultValue(0)
                .WithColumn("OriginalQuantity").AsInt32().NotNullable().WithDefaultValue(0)
                .WithColumn("Description").AsString(1000).Nullable();
        }
    }
}