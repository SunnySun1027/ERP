

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Purchase/PurchaseOrder", typeof(ERP.Purchase.Pages.PurchaseOrderController))]

namespace ERP.Purchase.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Purchase/PurchaseOrder"), Route("{action=index}")]
    public class PurchaseOrderController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/Purchase/PurchaseOrder/PurchaseOrderIndex.cshtml");
        }
    }
}