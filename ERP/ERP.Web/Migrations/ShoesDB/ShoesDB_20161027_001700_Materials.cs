using FluentMigrator;

namespace ERP.Migrations.ShoesDB
{
    [Migration(20161027001700)]
    public class ShoesDB_20161027_001700_Materials : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("Materials")
                .WithColumn("MaterialID").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("MaterialName").AsString(50).NotNullable()
                .WithColumn("Description").AsString(200).Nullable();
        }
    }
}