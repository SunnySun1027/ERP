using FluentMigrator;

namespace ERP.Migrations.ShoesDB
{
    [Migration(20170503000100)]
    public class ShoesDB_20170503_000100_RetailOrdersDepot : AutoReversingMigration
    {
        public override void Up()
        {
            Alter.Table("RetailOrders")
                .AddColumn("DepotID").AsString(5).NotNullable()
                .ForeignKey("FK_RetailOrders_Depots", "Depots", "DepotID");
        }
    }
}