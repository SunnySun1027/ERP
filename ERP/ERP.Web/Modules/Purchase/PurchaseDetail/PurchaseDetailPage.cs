

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Purchase/PurchaseDetail", typeof(ERP.Purchase.Pages.PurchaseDetailController))]

namespace ERP.Purchase.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Purchase/PurchaseDetail"), Route("{action=index}")]
    public class PurchaseDetailController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/Purchase/PurchaseDetail/PurchaseDetailIndex.cshtml");
        }
    }
}