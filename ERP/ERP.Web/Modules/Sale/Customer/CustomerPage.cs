
namespace ERP.Sale.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Sale/Customer"), Route("{action=index}")]
    public class CustomerController : Controller
    {
        [PageAuthorize(Sale.PermissionKeys.Customer.View)]
        public ActionResult Index()
        {
            return View(MVC.Views.Sale.Customer.CustomerIndex);
        }
    }
}