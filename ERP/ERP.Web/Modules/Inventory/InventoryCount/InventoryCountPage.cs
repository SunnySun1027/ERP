

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Inventory/InventoryCount", typeof(ERP.Inventory.Pages.InventoryCountController))]

namespace ERP.Inventory.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Inventory/InventoryCount"), Route("{action=index}")]
    public class InventoryCountController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/Inventory/InventoryCount/InventoryCountIndex.cshtml");
        }
    }
}