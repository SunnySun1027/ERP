

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Basic/Season", typeof(ERP.Basic.Pages.SeasonController))]

namespace ERP.Basic.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Basic/Season"), Route("{action=index}")]
    public class SeasonController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/Basic/Season/SeasonIndex.cshtml");
        }
    }
}