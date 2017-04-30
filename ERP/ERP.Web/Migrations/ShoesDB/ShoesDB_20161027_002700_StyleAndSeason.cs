using FluentMigrator;

namespace ERP.Migrations.ShoesDB
{
    [Migration(20161027002700)]
    public class ShoesDB_20161027_002700_StyleAndSeason : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("Styles")
                .WithColumn("StyleID").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("StyleName").AsString(50).NotNullable()
                .WithColumn("Description").AsString(200).Nullable();

            Create.Table("Seasons")
                .WithColumn("SeasonID").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("SeasonName").AsString(50).NotNullable()
                .WithColumn("Description").AsString(200).Nullable();
        }
    }
}