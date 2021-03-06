﻿using FluentMigrator;

namespace ERP.Migrations.ShoesDB
{
    [Migration(20161029001900)]
    public class ShoesDB_20161029_001900_SaleOrders : AutoReversingMigration
    {
        public override void Up()
        {
            Create.Table("SaleOrders")
                .WithColumn("OrderID").AsString(14).PrimaryKey().NotNullable()
                .WithColumn("CustomerID").AsString(5).NotNullable()
                .ForeignKey("FK_SaleOrders_Customers", "Customers", "CustomerID")
                .WithColumn("UserID").AsInt32().Nullable()
                .WithColumn("CreateDate").AsDateTime().NotNullable().WithDefaultValue("getdate()")
                .WithColumn("Description").AsString(1000).Nullable()
                .WithColumn("State").AsInt16().NotNullable().WithDefaultValue(0);

            Create.Table("SaleOrderDetails")
                .WithColumn("ID").AsInt32().Identity().NotNullable()
                .WithColumn("OrderID").AsString(14).PrimaryKey().NotNullable()
                .ForeignKey("FK_SaleOrderDetails_SaleOrders", "SaleOrders", "OrderID")
                .WithColumn("ProductID").AsInt32().PrimaryKey().NotNullable()
                .ForeignKey("FK_SaleOrderDetails_Products", "Products", "ProductID")
                .WithColumn("ColorID").AsInt32().PrimaryKey().NotNullable()
                .ForeignKey("FK_SaleOrderDetails_ProductColor", "ProductColor", "ColorID")
                .WithColumn("SizeID").AsInt32().PrimaryKey().NotNullable()
                .ForeignKey("FK_SaleOrderDetails_ProductSize", "ProductSize", "SizeID")
                .WithColumn("UnitPrice").AsDecimal().NotNullable().WithDefaultValue(0)
                .WithColumn("Quantity").AsInt32().NotNullable().WithDefaultValue(1)
                .WithColumn("Description").AsString(1000).Nullable();
        }
    }
}