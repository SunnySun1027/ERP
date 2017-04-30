using FluentMigrator;

namespace ERP.Migrations.ShoesDB
{
    [Migration(20161021124600)]
    public class ShoesDB_20161021_124600_Depots : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("Depots")
                .WithColumn("DepotID").AsString(5).PrimaryKey().NotNullable()
                .WithColumn("DepotName").AsString(30).NotNullable()
                .WithColumn("Description").AsString(int.MaxValue).Nullable();
        }
    }
}