using FluentMigrator;

namespace ERP.Migrations.ShoesDB
{
    [Migration(20161027003000)]
    public class ShoesDB_20161027_003000_Units : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("Units")
                .WithColumn("UnitID").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("UnitName").AsString(50).NotNullable();
        }
    }
}