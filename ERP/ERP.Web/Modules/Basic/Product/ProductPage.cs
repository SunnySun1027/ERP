

//[assembly:Serenity.Navigation.NavigationLink(int.MaxValue, "Basic/Product", typeof(ERP.Basic.Pages.ProductController))]

namespace ERP.Basic.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Basic/Product"), Route("{action=index}")]
    public class ProductController : Controller
    {
        [PageAuthorize(Basic.PermissionKeys.General)]
        public ActionResult Index()
        {
            return View(MVC.Views.Basic.Product.ProductIndex);
        }
    }
}