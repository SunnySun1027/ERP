

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Basic/Brand", typeof(ERP.Basic.Pages.BrandController))]

namespace ERP.Basic.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Basic/Brand"), Route("{action=index}")]
    public class BrandController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View(MVC.Views.Basic.Brand.BrandIndex);
        }
    }
}