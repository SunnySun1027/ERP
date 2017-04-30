
namespace ERP.Basic.Pages
{
    using Serenity;
    using Serenity.Web;
    using System.Web.Mvc;

    [RoutePrefix("Basic/Category"), Route("{action=index}")]
    public class CategoryController : Controller
    {
        [PageAuthorize(Basic.PermissionKeys.General)]
        public ActionResult Index()
        {
            return View(MVC.Views.Basic.Category.CategoryIndex);
        }
    }
}