using Serenity.Navigation;
using Administration = ERP.Administration.Pages;

[assembly: NavigationMenu(19000, "Administration", icon: "icon-screen-desktop")]
[assembly: NavigationLink(19000, "Administration/Exceptions Log", url: "~/errorlog.axd", permission: ERP.Administration.PermissionKeys.Security, icon: "icon-ban", Target = "_blank")]
[assembly: NavigationLink(19000, "Administration/Languages", typeof(Administration.LanguageController), icon: "icon-bubbles")]
[assembly: NavigationLink(19000, "Administration/Translations", typeof(Administration.TranslationController), icon: "icon-speech")]
[assembly: NavigationLink(19000, "Administration/Roles", typeof(Administration.RoleController), icon: "icon-lock")]
[assembly: NavigationLink(19000, "Administration/User Management", typeof(Administration.UserController), icon: "icon-people")]