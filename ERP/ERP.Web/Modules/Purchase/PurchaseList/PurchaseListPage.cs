

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Purchase/PurchaseList", typeof(ERP.Purchase.Pages.PurchaseListController))]

namespace ERP.Purchase.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Purchase/PurchaseList"), Route("{action=index}")]
    public class PurchaseListController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/Purchase/PurchaseList/PurchaseListIndex.cshtml");
        }
    }
}