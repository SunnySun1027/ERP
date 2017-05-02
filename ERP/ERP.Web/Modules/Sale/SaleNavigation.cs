using Serenity.Navigation;
using Sale = ERP.Sale.Pages;

[assembly: NavigationMenu(12000, "Sale", icon: "icon-anchor")]
[assembly: NavigationLink(7100, "Sale/Customers", typeof(Sale.CustomerController), icon: "icon-wallet")]
[assembly: NavigationLink(7200, "Sale/Orders", typeof(Sale.OrderController), icon: "icon-basket-loaded")]
//[assembly: NavigationLink(7600, "Sale/Retail", typeof(Sale.), icon: "icon-basket-loaded")]