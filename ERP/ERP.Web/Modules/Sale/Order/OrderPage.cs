

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Sale/Order", url: "~/Sale/Order", permission: "Sale")]

namespace ERP.Sale.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Sale/Order"), Route("{action=index}")]
    public class OrderController : Controller
    {
        [PageAuthorize(Sale.PermissionKeys.General)]
        public ActionResult Index()
        {
            return View(MVC.Views.Sale.Order.OrderIndex);
        }
    }
}