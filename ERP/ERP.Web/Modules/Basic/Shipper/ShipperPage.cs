



namespace ERP.Basic.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Basic/Shipper"), Route("{action=index}")]
    public class ShipperController : Controller
    {
        [PageAuthorize(Basic.PermissionKeys.General)]
        public ActionResult Index()
        {
            return View(MVC.Views.Basic.Shipper.ShipperIndex);
        }
    }
}