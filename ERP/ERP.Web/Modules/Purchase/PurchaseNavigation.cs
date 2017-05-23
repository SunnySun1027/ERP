using Serenity.Navigation;
using Purchase = ERP.Purchase.Pages;

[assembly: NavigationMenu(12000, "Purchase", icon: "icon-handbag")]
[assembly: NavigationLink(12100, "Purchase/Suppliers", typeof(Purchase.SupplierController), icon: "icon-magic-wand")]