

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Inventory/Depot", typeof(ERP.Inventory.Pages.DepotController))]

namespace ERP.Inventory.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Inventory/Depot"), Route("{action=index}")]
    public class DepotController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/Inventory/Depot/DepotIndex.cshtml");
        }
    }
}