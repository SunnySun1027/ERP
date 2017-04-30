using FluentMigrator;

namespace ERP.Migrations.ShoesDB
{
    [Migration(20161021134000)]
    public class ShoesDB_20161021_134000_ColorAndSize : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("ColorGroup")
                .WithColumn("GroupID").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("GroupName").AsString(30).NotNullable();

            Create.Table("ProductColor")
                .WithColumn("ColorID").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("ColorName").AsString(30).NotNullable()
                .WithColumn("ColorGroupID").AsInt32().NotNullable()
                .ForeignKey("FK_ProductColor_ColorGroup", "ColorGroup", "GroupID");

            Create.Table("SizeGroup")
                .WithColumn("GroupID").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("GroupName").AsString(30).NotNullable();

            Create.Table("ProductSize")
              .WithColumn("SizeID").AsInt32().Identity().PrimaryKey().NotNullable()
              .WithColumn("SizeName").AsString(30).NotNullable()
              .WithColumn("SizeGroupID").AsInt32().NotNullable()
              .ForeignKey("FK_ProductSize_SizeGroup", "SizeGroup", "GroupID");
        }
    }
}