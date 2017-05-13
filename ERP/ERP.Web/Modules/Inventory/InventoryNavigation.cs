using Serenity.Navigation;
using Inventory = ERP.Inventory.Pages;

[assembly: NavigationMenu(13000, "Inventory", icon: "icon-home")]
[assembly: NavigationLink(13100, "Inventory/DepotStock", typeof(Inventory.DepotStockController), icon: "icon-magic-wand")]
[assembly: NavigationLink(13100, "Inventory/InventoryCount", typeof(Inventory.InventoryCountController), icon: "icon-magic-wand")]