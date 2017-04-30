

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Basic/Material", typeof(ERP.Basic.Pages.MaterialController))]

namespace ERP.Basic.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Basic/Material"), Route("{action=index}")]
    public class MaterialController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/Basic/Material/MaterialIndex.cshtml");
        }
    }
}