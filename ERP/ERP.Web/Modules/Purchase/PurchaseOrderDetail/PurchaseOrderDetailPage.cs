

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Purchase/PurchaseOrderDetail", typeof(ERP.Purchase.Pages.PurchaseOrderDetailController))]

namespace ERP.Purchase.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Purchase/PurchaseOrderDetail"), Route("{action=index}")]
    public class PurchaseOrderDetailController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/Purchase/PurchaseOrderDetail/PurchaseOrderDetailIndex.cshtml");
        }
    }
}