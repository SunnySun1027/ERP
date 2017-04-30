

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Basic/ColorGroup", typeof(ERP.Basic.Pages.ColorGroupController))]

namespace ERP.Basic.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Basic/ColorGroup"), Route("{action=index}")]
    public class ColorGroupController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/Basic/ColorGroup/ColorGroupIndex.cshtml");
        }
    }
}