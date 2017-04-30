
namespace ERP.Purchase.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Purchase/Supplier"), Route("{action=index}")]
    public class SupplierController : Controller
    {
        [PageAuthorize(Purchase.PermissionKeys.General)]
        public ActionResult Index()
        {
            return View(MVC.Views.Purchase.Supplier.SupplierIndex);
        }
    }
}