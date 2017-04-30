

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Basic/Unit", typeof(ERP.Basic.Pages.UnitController))]

namespace ERP.Basic.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Basic/Unit"), Route("{action=index}")]
    public class UnitController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/Basic/Unit/UnitIndex.cshtml");
        }
    }
}