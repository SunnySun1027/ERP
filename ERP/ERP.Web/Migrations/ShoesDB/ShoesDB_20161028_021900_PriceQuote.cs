using FluentMigrator;

namespace ERP.Migrations.ShoesDB
{
    [Migration(20161028021900)]
    public class ShoesDB_20161028_021900_PriceQuote : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("PriceQuote")
                .WithColumn("QuoteID").AsString(14).PrimaryKey().NotNullable()
                .WithColumn("CustomerID").AsString(5).NotNullable()
                .ForeignKey("FK_PriceQuoteDetailsPriceQuote_Customers", "Customers", "CustomerID")
                .WithColumn("UserID").AsInt32().Nullable()
                .WithColumn("CreateDate").AsDateTime().NotNullable().WithDefaultValue("getdate()")
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("State").AsInt16().NotNullable().WithDefaultValue(0);

            Create.Table("PriceQuoteDetails")
                .WithColumn("QuoteID").AsString(14).PrimaryKey().NotNullable()
                .ForeignKey("FK_PriceQuoteDetails_PriceQuote", "PriceQuote", "QuoteID")
                .WithColumn("ProductID").AsInt32().PrimaryKey().NotNullable()
                .ForeignKey("FK_PriceQuoteDetails_Products", "Products", "ProductID")
                .WithColumn("UnitPrice").AsDecimal().NotNullable().WithDefaultValue(1)
                .WithColumn("Quantity").AsInt32().NotNullable().WithDefaultValue(0)
                .WithColumn("Description").AsString(1000).Nullable();
        }
    }
}