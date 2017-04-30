using FluentMigrator;

namespace ERP.Migrations.ShoesDB
{
    [Migration(20161028002600)]
    public class ShoesDB_20161028_002600_SystemLog : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("SystemLog")
                .WithColumn("ID").AsInt32().Identity().PrimaryKey().NotNullable()
                .WithColumn("Time").AsDateTime().Nullable()
                .WithColumn("Value").AsString(int.MaxValue).Nullable()
                .WithColumn("IsLog").AsBoolean().Nullable();
        }
    }
}