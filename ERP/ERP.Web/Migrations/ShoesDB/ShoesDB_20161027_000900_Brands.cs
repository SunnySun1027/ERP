using FluentMigrator;

namespace ERP.Migrations.ShoesDB
{
    [Migration(20161027000900)]
    public class ShoesDB_20161027_000900_Brands : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("Brands")
                .WithColumn("BrandID").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("BrandName").AsString(50).NotNullable()
                .WithColumn("Site").AsString(100).Nullable()
                .WithColumn("Description").AsString(200).Nullable();
        }
    }
}