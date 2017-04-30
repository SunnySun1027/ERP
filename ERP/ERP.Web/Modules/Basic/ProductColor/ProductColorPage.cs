

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Basic/ProductColor", typeof(ERP.Basic.Pages.ProductColorController))]

namespace ERP.Basic.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Basic/ProductColor"), Route("{action=index}")]
    public class ProductColorController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/Basic/ProductColor/ProductColorIndex.cshtml");
        }
    }
}