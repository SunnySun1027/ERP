using Serenity.Navigation;
using Basic = ERP.Basic.Pages;

[assembly: NavigationMenu(11000, "Basic", icon: "icon-puzzle")]
[assembly: NavigationLink(11100, "Basic/Products", typeof(Basic.ProductController), icon: "icon-present")]
//[assembly: NavigationLink(13500, "Basic/Shippers", typeof(Basic.ShipperController), icon: "icon-plane")]
//[assembly: NavigationLink(13600, "Basic/Categories", typeof(Basic.CategoryController), icon: "icon-folder-alt")]
//[assembly: NavigationLink(13700, "Basic/Regions", typeof(Basic.RegionController), icon: "icon-map")]
//[assembly: NavigationLink(13800, "Basic/Territories", typeof(Basic.TerritoryController), icon: "icon-puzzle")]
//[assembly: NavigationLink(13900, "Basic/Inline Image In Grid", typeof(Basic.BasicController), action: "InlineImageInGrid")]