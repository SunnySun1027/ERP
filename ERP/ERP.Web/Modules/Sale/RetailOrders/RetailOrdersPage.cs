

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Sale/RetailOrders", typeof(ERP.Sale.Pages.RetailOrdersController))]

namespace ERP.Sale.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Sale/RetailOrders"), Route("{action=index}")]
    [PageAuthorize(typeof(Entities.RetailOrdersRow))]
    public class RetailOrdersController : Controller
    {
        public ActionResult Index()
        {
            return View("~/Modules/Sale/RetailOrders/RetailOrdersIndex.cshtml");
        }
    }
}