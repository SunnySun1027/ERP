using FluentMigrator;

namespace ERP.Migrations.ShoesDB
{
    [Migration(20161029023900)]
    public class ShoesDB_20161029_023900_StockTransfer : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("StockTransfer")
                .WithColumn("TransferID").AsString(14).PrimaryKey().NotNullable()
                .WithColumn("OutDepotID").AsString(5).NotNullable()
                .ForeignKey("FK_StockTransfer_Depots1", "Depots", "DepotID")
                .WithColumn("InDepotID").AsString(5).NotNullable()
                .ForeignKey("FK_StockTransfer_Depots2", "Depots", "DepotID")
                .WithColumn("CreateDate").AsDateTime().NotNullable().WithDefaultValue("getdate()")
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("State").AsInt16().NotNullable().WithDefaultValue(0);

            Create.Table("StockTransferDetails")
                .WithColumn("ID").AsInt32().Identity().NotNullable()
                .WithColumn("TransferID").AsString(14).PrimaryKey().NotNullable()
                .ForeignKey("FK_StockTransferDetails_StockTransfer", "StockTransfer", "TransferID")
                .WithColumn("ProductID").AsInt32().PrimaryKey().NotNullable()
                .ForeignKey("FK_StockTransferDetails_Products", "Products", "ProductID")
                .WithColumn("ColorID").AsInt32().PrimaryKey().NotNullable()
                .ForeignKey("FK_StockTransferDetails_ProductColor", "ProductColor", "ColorID")
                .WithColumn("SizeID").AsInt32().PrimaryKey().NotNullable()
                .ForeignKey("FK_StockTransferDetails_ProductSize", "ProductSize", "SizeID")
                .WithColumn("Quantity").AsInt32().NotNullable();
        }
    }
}