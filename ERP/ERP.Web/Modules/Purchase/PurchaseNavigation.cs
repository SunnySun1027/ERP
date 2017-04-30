using Serenity.Navigation;
using Purchase = ERP.Purchase.Pages;

[assembly: NavigationMenu(11000, "Purchase", icon: "icon-anchor")]
[assembly: NavigationLink(11100, "Purchase/Suppliers", typeof(Purchase.SupplierController), icon: "icon-magic-wand")]