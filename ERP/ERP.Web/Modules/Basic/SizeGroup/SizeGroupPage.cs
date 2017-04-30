

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Basic/SizeGroup", typeof(ERP.Basic.Pages.SizeGroupController))]

namespace ERP.Basic.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Basic/SizeGroup"), Route("{action=index}")]
    public class SizeGroupController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/Basic/SizeGroup/SizeGroupIndex.cshtml");
        }
    }
}