

[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Basic/ProductSize", typeof(ERP.Basic.Pages.ProductSizeController))]

namespace ERP.Basic.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Basic/ProductSize"), Route("{action=index}")]
    public class ProductSizeController : Controller
    {
        [PageAuthorize("Administration")]
        public ActionResult Index()
        {
            return View("~/Modules/Basic/ProductSize/ProductSizeIndex.cshtml");
        }
    }
}