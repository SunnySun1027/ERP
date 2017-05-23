

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Inventory/InventoryCountDetail", typeof(ERP.Inventory.Pages.InventoryCountDetailController))]

namespace ERP.Inventory.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Inventory/InventoryCountDetail"), Route("{action=index}")]
    public class InventoryCountDetailController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/Inventory/InventoryCountDetail/InventoryCountDetailIndex.cshtml");
        }
    }
}