

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Sale/OrderDetail", url: "~/Sale/OrderDetail", permission: "Sale")]

namespace ERP.Sale.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Sale/OrderDetail"), Route("{action=index}")]
    public class OrderDetailController : Controller
    {
        [PageAuthorize(Sale.PermissionKeys.General)]
        public ActionResult Index()
        {
            return View(MVC.Views.Sale.OrderDetail.OrderDetailIndex);
        }
    }
}