

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Basic/Style", typeof(ERP.Basic.Pages.StyleController))]

namespace ERP.Basic.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Basic/Style"), Route("{action=index}")]
    public class StyleController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/Basic/Style/StyleIndex.cshtml");
        }
    }
}