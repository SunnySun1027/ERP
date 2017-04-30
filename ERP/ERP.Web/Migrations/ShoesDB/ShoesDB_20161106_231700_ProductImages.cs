using FluentMigrator;

namespace ERP.Migrations.ShoesDB
{
    [Migration(20161106231700)]
    public class ShoesDB_20161106_231700_ProductImages : Migration
    {
        public override void Up()
        {
            Alter.Table("Products")
                .AddColumn("GalleryImages").AsString(int.MaxValue).Nullable();
        }

        public override void Down()
        {
        }
    }
}