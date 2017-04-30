using System;

namespace MVC
{
    public static class Views
    {
        public static class Administration
        {
            public static class Language
            {
                public const string LanguageIndex = "~/Modules/Administration/Language/LanguageIndex.cshtml";
            }

            public static class Role
            {
                public const string RoleIndex = "~/Modules/Administration/Role/RoleIndex.cshtml";
            }

            public static class Sergen
            {
                public const string SergenError = "~/Modules/Administration/Sergen/SergenError.cshtml";
                public const string SergenIndex = "~/Modules/Administration/Sergen/SergenIndex.cshtml";
            }

            public static class Translation
            {
                public const string TranslationIndex = "~/Modules/Administration/Translation/TranslationIndex.cshtml";
            }

            public static class User
            {
                public const string UserIndex = "~/Modules/Administration/User/UserIndex.cshtml";
            }
        }

        public static class Common
        {
            public static class Dashboard
            {
                public const string DashboardIndex = "~/Modules/Common/Dashboard/DashboardIndex.cshtml";
            }

            public static class Reporting
            {
                public const string ReportPage = "~/Modules/Common/Reporting/ReportPage.cshtml";
            }
        }

        public static class Errors
        {
            public const string ValidationError = "~/Views/Errors/ValidationError.cshtml";
        }

        public static class Meeting
        {
            public static class Meeting_
            {
                public const string MeetingIndex = "~/Modules/Meeting/Meeting/MeetingIndex.cshtml";
            }

            public static class MeetingAgendaRelevant
            {
                public const string MeetingAgendaRelevantIndex = "~/Modules/Meeting/MeetingAgendaRelevant/MeetingAgendaRelevantIndex.cshtml";
            }

            public static class MeetingAgendaType
            {
                public const string MeetingAgendaTypeIndex = "~/Modules/Meeting/MeetingAgendaType/MeetingAgendaTypeIndex.cshtml";
            }

            public static class MeetingDecisionRelevant
            {
                public const string MeetingDecisionRelevantIndex = "~/Modules/Meeting/MeetingDecisionRelevant/MeetingDecisionRelevantIndex.cshtml";
            }

            public static class MeetingLocation
            {
                public const string MeetingLocationIndex = "~/Modules/Meeting/MeetingLocation/MeetingLocationIndex.cshtml";
            }

            public static class MeetingType
            {
                public const string MeetingTypeIndex = "~/Modules/Meeting/MeetingType/MeetingTypeIndex.cshtml";
            }

        }

        public static class Membership
        {
            public static class Account
            {
                public const string AccountLogin = "~/Modules/Membership/Account/AccountLogin.cshtml";
                public const string AccountLogin_AdminLTE = "~/Modules/Membership/Account/AccountLogin.AdminLTE.cshtml";
                public static class ChangePassword
                {
                    public const string AccountChangePassword = "~/Modules/Membership/Account/ChangePassword/AccountChangePassword.cshtml";
                }

                public static class ForgotPassword
                {
                    public const string AccountForgotPassword = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.cshtml";
                    public const string AccountForgotPassword_AdminLTE = "~/Modules/Membership/Account/ForgotPassword/AccountForgotPassword.AdminLTE.cshtml";
                }

                public static class ResetPassword
                {
                    public const string AccountResetPassword = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.cshtml";
                    public const string AccountResetPassword_AdminLTE = "~/Modules/Membership/Account/ResetPassword/AccountResetPassword.AdminLTE.cshtml";
                    public const string AccountResetPasswordEmail = "~/Modules/Membership/Account/ResetPassword/AccountResetPasswordEmail.cshtml";
                }

                public static class SignUp
                {
                    public const string AccountActivateEmail = "~/Modules/Membership/Account/SignUp/AccountActivateEmail.cshtml";
                    public const string AccountSignUp = "~/Modules/Membership/Account/SignUp/AccountSignUp.cshtml";
                    public const string AccountSignUp_AdminLTE = "~/Modules/Membership/Account/SignUp/AccountSignUp.AdminLTE.cshtml";
                }
            }

        }

        public static class Basic
        {
            public static class Brand
            {
                public const string BrandIndex = "~/Modules/Basic/Brand/BrandIndex.cshtml";
            }

            public static class Category
            {
                public const string CategoryIndex = "~/Modules/Basic/Category/CategoryIndex.cshtml";
            }

            public static class ColorGroup
            {
                public const string ColorGroupIndex = "~/Modules/Basic/ColorGroup/ColorGroupIndex.cshtml";
            }

            public static class Employee
            {
                public const string EmployeeIndex = "~/Modules/Basic/Employee/EmployeeIndex.cshtml";
            }

            public static class InlineImageInGrid
            {
                public const string InlineImageInGridIndex = "~/Modules/Basic/InlineImageInGrid/InlineImageInGridIndex.cshtml";
            }

            public static class Material
            {
                public const string MaterialIndex = "~/Modules/Basic/Material/MaterialIndex.cshtml";
            }

            public static class Product
            {
                public const string ProductIndex = "~/Modules/Basic/Product/ProductIndex.cshtml";
            }

            public static class ProductColor
            {
                public const string ProductColorIndex = "~/Modules/Basic/ProductColor/ProductColorIndex.cshtml";
            }

            public static class ProductSize
            {
                public const string ProductSizeIndex = "~/Modules/Basic/ProductSize/ProductSizeIndex.cshtml";
            }

            public static class Season
            {
                public const string SeasonIndex = "~/Modules/Basic/Season/SeasonIndex.cshtml";
            }


            public static class Shipper
            {
                public const string ShipperIndex = "~/Modules/Basic/Shipper/ShipperIndex.cshtml";
            }


            public static class Style
            {
                public const string StyleIndex = "~/Modules/Basic/Style/StyleIndex.cshtml";
            }

            public static class Unit
            {
                public const string UnitIndex = "~/Modules/Basic/Unit/UnitIndex.cshtml";
            }
        }

        public static class Purchase
        {
            public static class Category
            {
                public const string CategoryIndex = "~/Modules/Northwind/Category/CategoryIndex.cshtml";
            }

            public static class Customer
            {
                public const string CustomerIndex = "~/Modules/Northwind/Customer/CustomerIndex.cshtml";
            }

            public static class Order
            {
                public const string OrderDetailReport = "~/Modules/Northwind/Order/OrderDetailReport.cshtml";
                public const string OrderIndex = "~/Modules/Northwind/Order/OrderIndex.cshtml";
            }

            public static class OrderDetail
            {
                public const string OrderDetailIndex = "~/Modules/Northwind/OrderDetail/OrderDetailIndex.cshtml";
            }

            public static class Product
            {
                public const string ProductIndex = "~/Modules/Northwind/Product/ProductIndex.cshtml";
            }

            public static class Region
            {
                public const string RegionIndex = "~/Modules/Northwind/Region/RegionIndex.cshtml";
            }

            public static class Shipper
            {
                public const string ShipperIndex = "~/Modules/Northwind/Shipper/ShipperIndex.cshtml";
            }

            public static class Supplier
            {
                public const string SupplierIndex = "~/Modules/Purchase/Supplier/SupplierIndex.cshtml";
            }

            public static class Territory
            {
                public const string TerritoryIndex = "~/Modules/Northwind/Territory/TerritoryIndex.cshtml";
            }

        }

        public static class Sale
        {
            public static class Customer
            {
                public const string CustomerIndex = "~/Modules/Sale/Customer/CustomerIndex.cshtml";
            }

            public static class Order
            {
                public const string OrderDetailReport = "~/Modules/Sale/Order/OrderDetailReport.cshtml";
                public const string OrderIndex = "~/Modules/Sale/Order/OrderIndex.cshtml";
            }

            public static class OrderDetail
            {
                public const string OrderDetailIndex = "~/Modules/Sale/OrderDetail/OrderDetailIndex.cshtml";
            }
        }

        public static class Organization
        {
            public static class BusinessUnit
            {
                public const string BusinessUnitIndex = "~/Modules/Organization/BusinessUnit/BusinessUnitIndex.cshtml";
            }

            public static class Contact
            {
                public const string ContactIndex = "~/Modules/Organization/Contact/ContactIndex.cshtml";
            }
        }

        public static class Shared
        {
            public const string _Layout = "~/Views/Shared/_Layout.cshtml";
            public const string _LayoutHead = "~/Views/Shared/_LayoutHead.cshtml";
            public const string _LayoutNoNavigation = "~/Views/Shared/_LayoutNoNavigation.cshtml";
            public const string Error = "~/Views/Shared/Error.cshtml";
            public const string LeftNavigation = "~/Views/Shared/LeftNavigation.cshtml";
        }
    }
}