

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Inventory/DepotStock", typeof(ERP.Inventory.Pages.DepotStockController))]

namespace ERP.Inventory.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Inventory/DepotStock"), Route("{action=index}")]
    public class DepotStockController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/Inventory/DepotStock/DepotStockIndex.cshtml");
        }
    }
}