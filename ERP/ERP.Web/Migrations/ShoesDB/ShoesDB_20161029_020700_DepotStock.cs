using FluentMigrator;

namespace ERP.Migrations.ShoesDB
{
    [Migration(20161029020700)]
    public class ShoesDB_20161029_020700_DepotStock : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("DepotStock")
                .WithColumn("ID").AsInt32().Identity().NotNullable()
                .WithColumn("DepotID").AsString(5).PrimaryKey().NotNullable()
                .ForeignKey("FK_DepotStock_Depots", "Depots", "DepotID")
                .WithColumn("ProductID").AsInt32().PrimaryKey().NotNullable()
                .ForeignKey("FK_DepotStock_Products", "Products", "ProductID")
                .WithColumn("ColorID").AsInt32().PrimaryKey().NotNullable()
                .ForeignKey("FK_DepotStock_ProductColor", "ProductColor", "ColorID")
                .WithColumn("SizeID").AsInt32().PrimaryKey().NotNullable()
                .ForeignKey("FK_DepotStock_ProductSize", "ProductSize", "SizeID")
                .WithColumn("Quantity").AsInt32().NotNullable().WithDefaultValue(0);
        }
    }
}