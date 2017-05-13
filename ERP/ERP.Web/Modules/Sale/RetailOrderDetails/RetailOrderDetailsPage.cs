

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Sale/RetailOrderDetails", typeof(ERP.Sale.Pages.RetailOrderDetailsController))]

namespace ERP.Sale.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Sale/RetailOrderDetails"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.RetailOrderDetailsRow))]
    public class RetailOrderDetailsController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Sale/RetailOrderDetails/RetailOrderDetailsIndex.cshtml");
        }
    }
}