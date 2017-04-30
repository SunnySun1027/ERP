using FluentMigrator;

namespace ERP.Migrations.ShoesDB
{
    [Migration(20161024215300)]
    public class ShoesDB_20161024_215300_ProductColorAndSize : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("ProductProductColor")
                .WithColumn("ID").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("ProductID").AsInt32().NotNullable()
                .WithColumn("ColorID").AsInt32().NotNullable()
                .ForeignKey("FK_Product_ProductColor", "ProductColor", "ColorID");
           
            Create.Table("ProductProductSize")
              .WithColumn("ID").AsInt32().Identity().PrimaryKey().NotNullable()
              .WithColumn("ProductID").AsInt32().NotNullable()
              .WithColumn("SizeID").AsInt32().NotNullable()
              .ForeignKey("FK_Product_ProductSize", "ProductSize", "SizeID");
        }
    }
}