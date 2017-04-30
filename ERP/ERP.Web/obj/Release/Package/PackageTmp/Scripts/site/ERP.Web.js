var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ERP;
(function (ERP) {
    var Administration;
    (function (Administration) {
        var LanguageForm = (function (_super) {
            __extends(LanguageForm, _super);
            function LanguageForm() {
                _super.apply(this, arguments);
            }
            LanguageForm.formKey = 'Administration.Language';
            return LanguageForm;
        }(Serenity.PrefixedContext));
        Administration.LanguageForm = LanguageForm;
        [['LanguageId', function () { return Serenity.StringEditor; }], ['LanguageName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(LanguageForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = ERP.Administration || (ERP.Administration = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Administration;
    (function (Administration) {
        var LanguageRow;
        (function (LanguageRow) {
            LanguageRow.idProperty = 'Id';
            LanguageRow.nameProperty = 'LanguageName';
            LanguageRow.localTextPrefix = 'Administration.Language';
            LanguageRow.lookupKey = 'Administration.Language';
            function getLookup() {
                return Q.getLookup('Administration.Language');
            }
            LanguageRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = LanguageRow.Fields || (LanguageRow.Fields = {}));
            ['Id', 'LanguageId', 'LanguageName'].forEach(function (x) { return Fields[x] = x; });
        })(LanguageRow = Administration.LanguageRow || (Administration.LanguageRow = {}));
    })(Administration = ERP.Administration || (ERP.Administration = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Administration;
    (function (Administration) {
        var LanguageService;
        (function (LanguageService) {
            LanguageService.baseUrl = 'Administration/Language';
            var Methods;
            (function (Methods) {
            })(Methods = LanguageService.Methods || (LanguageService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                LanguageService[x] = function (r, s, o) { return Q.serviceRequest(LanguageService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = LanguageService.baseUrl + '/' + x;
            });
        })(LanguageService = Administration.LanguageService || (Administration.LanguageService = {}));
    })(Administration = ERP.Administration || (ERP.Administration = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Administration;
    (function (Administration) {
        var RoleForm = (function (_super) {
            __extends(RoleForm, _super);
            function RoleForm() {
                _super.apply(this, arguments);
            }
            RoleForm.formKey = 'Administration.Role';
            return RoleForm;
        }(Serenity.PrefixedContext));
        Administration.RoleForm = RoleForm;
        [['RoleName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(RoleForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = ERP.Administration || (ERP.Administration = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Administration;
    (function (Administration) {
        var RolePermissionRow;
        (function (RolePermissionRow) {
            RolePermissionRow.idProperty = 'RolePermissionId';
            RolePermissionRow.nameProperty = 'PermissionKey';
            RolePermissionRow.localTextPrefix = 'Administration.RolePermission';
            var Fields;
            (function (Fields) {
            })(Fields = RolePermissionRow.Fields || (RolePermissionRow.Fields = {}));
            ['RolePermissionId', 'RoleId', 'PermissionKey', 'RoleRoleName'].forEach(function (x) { return Fields[x] = x; });
        })(RolePermissionRow = Administration.RolePermissionRow || (Administration.RolePermissionRow = {}));
    })(Administration = ERP.Administration || (ERP.Administration = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Administration;
    (function (Administration) {
        var RolePermissionService;
        (function (RolePermissionService) {
            RolePermissionService.baseUrl = 'Administration/RolePermission';
            var Methods;
            (function (Methods) {
            })(Methods = RolePermissionService.Methods || (RolePermissionService.Methods = {}));
            ['Update', 'List'].forEach(function (x) {
                RolePermissionService[x] = function (r, s, o) { return Q.serviceRequest(RolePermissionService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = RolePermissionService.baseUrl + '/' + x;
            });
        })(RolePermissionService = Administration.RolePermissionService || (Administration.RolePermissionService = {}));
    })(Administration = ERP.Administration || (ERP.Administration = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Administration;
    (function (Administration) {
        var RoleRow;
        (function (RoleRow) {
            RoleRow.idProperty = 'RoleId';
            RoleRow.nameProperty = 'RoleName';
            RoleRow.localTextPrefix = 'Administration.Role';
            RoleRow.lookupKey = 'Administration.Role';
            function getLookup() {
                return Q.getLookup('Administration.Role');
            }
            RoleRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = RoleRow.Fields || (RoleRow.Fields = {}));
            ['RoleId', 'RoleName'].forEach(function (x) { return Fields[x] = x; });
        })(RoleRow = Administration.RoleRow || (Administration.RoleRow = {}));
    })(Administration = ERP.Administration || (ERP.Administration = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Administration;
    (function (Administration) {
        var RoleService;
        (function (RoleService) {
            RoleService.baseUrl = 'Administration/Role';
            var Methods;
            (function (Methods) {
            })(Methods = RoleService.Methods || (RoleService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                RoleService[x] = function (r, s, o) { return Q.serviceRequest(RoleService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = RoleService.baseUrl + '/' + x;
            });
        })(RoleService = Administration.RoleService || (Administration.RoleService = {}));
    })(Administration = ERP.Administration || (ERP.Administration = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Administration;
    (function (Administration) {
        var TranslationService;
        (function (TranslationService) {
            TranslationService.baseUrl = 'Administration/Translation';
            var Methods;
            (function (Methods) {
            })(Methods = TranslationService.Methods || (TranslationService.Methods = {}));
            ['List', 'Update'].forEach(function (x) {
                TranslationService[x] = function (r, s, o) { return Q.serviceRequest(TranslationService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = TranslationService.baseUrl + '/' + x;
            });
        })(TranslationService = Administration.TranslationService || (Administration.TranslationService = {}));
    })(Administration = ERP.Administration || (ERP.Administration = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Administration;
    (function (Administration) {
        var UserForm = (function (_super) {
            __extends(UserForm, _super);
            function UserForm() {
                _super.apply(this, arguments);
            }
            UserForm.formKey = 'Administration.User';
            return UserForm;
        }(Serenity.PrefixedContext));
        Administration.UserForm = UserForm;
        [['Username', function () { return Serenity.StringEditor; }], ['DisplayName', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['UserImage', function () { return Serenity.ImageUploadEditor; }], ['Password', function () { return Serenity.PasswordEditor; }], ['PasswordConfirm', function () { return Serenity.PasswordEditor; }], ['Source', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(UserForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Administration = ERP.Administration || (ERP.Administration = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Administration;
    (function (Administration) {
        var UserPermissionRow;
        (function (UserPermissionRow) {
            UserPermissionRow.idProperty = 'UserPermissionId';
            UserPermissionRow.nameProperty = 'PermissionKey';
            UserPermissionRow.localTextPrefix = 'Administration.UserPermission';
            var Fields;
            (function (Fields) {
            })(Fields = UserPermissionRow.Fields || (UserPermissionRow.Fields = {}));
            ['UserPermissionId', 'UserId', 'PermissionKey', 'Granted', 'Username', 'User'].forEach(function (x) { return Fields[x] = x; });
        })(UserPermissionRow = Administration.UserPermissionRow || (Administration.UserPermissionRow = {}));
    })(Administration = ERP.Administration || (ERP.Administration = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Administration;
    (function (Administration) {
        var UserPermissionService;
        (function (UserPermissionService) {
            UserPermissionService.baseUrl = 'Administration/UserPermission';
            var Methods;
            (function (Methods) {
            })(Methods = UserPermissionService.Methods || (UserPermissionService.Methods = {}));
            ['Update', 'List', 'ListRolePermissions', 'ListPermissionKeys'].forEach(function (x) {
                UserPermissionService[x] = function (r, s, o) { return Q.serviceRequest(UserPermissionService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserPermissionService.baseUrl + '/' + x;
            });
        })(UserPermissionService = Administration.UserPermissionService || (Administration.UserPermissionService = {}));
    })(Administration = ERP.Administration || (ERP.Administration = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Administration;
    (function (Administration) {
        var UserRoleRow;
        (function (UserRoleRow) {
            UserRoleRow.idProperty = 'UserRoleId';
            UserRoleRow.localTextPrefix = 'Administration.UserRole';
            var Fields;
            (function (Fields) {
            })(Fields = UserRoleRow.Fields || (UserRoleRow.Fields = {}));
            ['UserRoleId', 'UserId', 'RoleId', 'Username', 'User'].forEach(function (x) { return Fields[x] = x; });
        })(UserRoleRow = Administration.UserRoleRow || (Administration.UserRoleRow = {}));
    })(Administration = ERP.Administration || (ERP.Administration = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Administration;
    (function (Administration) {
        var UserRoleService;
        (function (UserRoleService) {
            UserRoleService.baseUrl = 'Administration/UserRole';
            var Methods;
            (function (Methods) {
            })(Methods = UserRoleService.Methods || (UserRoleService.Methods = {}));
            ['Update', 'List'].forEach(function (x) {
                UserRoleService[x] = function (r, s, o) { return Q.serviceRequest(UserRoleService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserRoleService.baseUrl + '/' + x;
            });
        })(UserRoleService = Administration.UserRoleService || (Administration.UserRoleService = {}));
    })(Administration = ERP.Administration || (ERP.Administration = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Administration;
    (function (Administration) {
        var UserRow;
        (function (UserRow) {
            UserRow.idProperty = 'UserId';
            UserRow.isActiveProperty = 'IsActive';
            UserRow.nameProperty = 'Username';
            UserRow.localTextPrefix = 'Administration.User';
            var Fields;
            (function (Fields) {
            })(Fields = UserRow.Fields || (UserRow.Fields = {}));
            ['UserId', 'Username', 'Source', 'PasswordHash', 'PasswordSalt', 'DisplayName', 'Email', 'UserImage', 'LastDirectoryUpdate', 'IsActive', 'Password', 'PasswordConfirm', 'InsertUserId', 'InsertDate', 'UpdateUserId', 'UpdateDate'].forEach(function (x) { return Fields[x] = x; });
        })(UserRow = Administration.UserRow || (Administration.UserRow = {}));
    })(Administration = ERP.Administration || (ERP.Administration = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Administration;
    (function (Administration) {
        var UserService;
        (function (UserService) {
            UserService.baseUrl = 'Administration/User';
            var Methods;
            (function (Methods) {
            })(Methods = UserService.Methods || (UserService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Undelete', 'Retrieve', 'List'].forEach(function (x) {
                UserService[x] = function (r, s, o) { return Q.serviceRequest(UserService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserService.baseUrl + '/' + x;
            });
        })(UserService = Administration.UserService || (Administration.UserService = {}));
    })(Administration = ERP.Administration || (ERP.Administration = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var BasicService;
        (function (BasicService) {
            BasicService.baseUrl = 'Basic/Basic';
            var Methods;
            (function (Methods) {
            })(Methods = BasicService.Methods || (BasicService.Methods = {}));
            ['OrdersByShipper', 'OrderBulkAction'].forEach(function (x) {
                BasicService[x] = function (r, s, o) { return Q.serviceRequest(BasicService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = BasicService.baseUrl + '/' + x;
            });
        })(BasicService = Basic.BasicService || (Basic.BasicService = {}));
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var BrandForm = (function (_super) {
            __extends(BrandForm, _super);
            function BrandForm() {
                _super.apply(this, arguments);
            }
            BrandForm.formKey = 'Basic.Brand';
            return BrandForm;
        }(Serenity.PrefixedContext));
        Basic.BrandForm = BrandForm;
        [['BrandName', function () { return Serenity.StringEditor; }], ['Site', function () { return Serenity.StringEditor; }], ['Description', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(BrandForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var BrandRow;
        (function (BrandRow) {
            BrandRow.idProperty = 'BrandId';
            BrandRow.nameProperty = 'BrandName';
            BrandRow.localTextPrefix = 'Basic.Brand';
            var Fields;
            (function (Fields) {
            })(Fields = BrandRow.Fields || (BrandRow.Fields = {}));
            ['BrandId', 'BrandName', 'Site', 'Description'].forEach(function (x) { return Fields[x] = x; });
        })(BrandRow = Basic.BrandRow || (Basic.BrandRow = {}));
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var BrandService;
        (function (BrandService) {
            BrandService.baseUrl = 'Basic/Brand';
            var Methods;
            (function (Methods) {
            })(Methods = BrandService.Methods || (BrandService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                BrandService[x] = function (r, s, o) { return Q.serviceRequest(BrandService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = BrandService.baseUrl + '/' + x;
            });
        })(BrandService = Basic.BrandService || (Basic.BrandService = {}));
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var CategoryForm = (function (_super) {
            __extends(CategoryForm, _super);
            function CategoryForm() {
                _super.apply(this, arguments);
            }
            CategoryForm.formKey = 'Basic.Category';
            return CategoryForm;
        }(Serenity.PrefixedContext));
        Basic.CategoryForm = CategoryForm;
        [['CategoryName', function () { return Serenity.StringEditor; }], ['Description', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(CategoryForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var CategoryLangRow;
        (function (CategoryLangRow) {
            CategoryLangRow.idProperty = 'Id';
            CategoryLangRow.nameProperty = 'CategoryName';
            CategoryLangRow.localTextPrefix = 'Basic.CategoryLang';
            var Fields;
            (function (Fields) {
            })(Fields = CategoryLangRow.Fields || (CategoryLangRow.Fields = {}));
            ['Id', 'CategoryId', 'LanguageId', 'CategoryName', 'Description'].forEach(function (x) { return Fields[x] = x; });
        })(CategoryLangRow = Basic.CategoryLangRow || (Basic.CategoryLangRow = {}));
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var CategoryLangService;
        (function (CategoryLangService) {
            CategoryLangService.baseUrl = 'Basic/CategoryLang';
            var Methods;
            (function (Methods) {
            })(Methods = CategoryLangService.Methods || (CategoryLangService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                CategoryLangService[x] = function (r, s, o) { return Q.serviceRequest(CategoryLangService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = CategoryLangService.baseUrl + '/' + x;
            });
        })(CategoryLangService = Basic.CategoryLangService || (Basic.CategoryLangService = {}));
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var CategoryRow;
        (function (CategoryRow) {
            CategoryRow.idProperty = 'CategoryID';
            CategoryRow.nameProperty = 'CategoryName';
            CategoryRow.localTextPrefix = 'Basic.Category';
            CategoryRow.lookupKey = 'Basic.Category';
            function getLookup() {
                return Q.getLookup('Basic.Category');
            }
            CategoryRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = CategoryRow.Fields || (CategoryRow.Fields = {}));
            ['CategoryID', 'CategoryName', 'Description', 'Picture'].forEach(function (x) { return Fields[x] = x; });
        })(CategoryRow = Basic.CategoryRow || (Basic.CategoryRow = {}));
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var CategoryService;
        (function (CategoryService) {
            CategoryService.baseUrl = 'Basic/Category';
            var Methods;
            (function (Methods) {
            })(Methods = CategoryService.Methods || (CategoryService.Methods = {}));
            ['Create', 'Update', 'Delete', 'RetrieveLocalization', 'Retrieve', 'List'].forEach(function (x) {
                CategoryService[x] = function (r, s, o) { return Q.serviceRequest(CategoryService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = CategoryService.baseUrl + '/' + x;
            });
        })(CategoryService = Basic.CategoryService || (Basic.CategoryService = {}));
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var ColorGroupForm = (function (_super) {
            __extends(ColorGroupForm, _super);
            function ColorGroupForm() {
                _super.apply(this, arguments);
            }
            ColorGroupForm.formKey = 'Basic.ColorGroup';
            return ColorGroupForm;
        }(Serenity.PrefixedContext));
        Basic.ColorGroupForm = ColorGroupForm;
        [['GroupName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(ColorGroupForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var ColorGroupRow;
        (function (ColorGroupRow) {
            ColorGroupRow.idProperty = 'GroupId';
            ColorGroupRow.nameProperty = 'GroupName';
            ColorGroupRow.localTextPrefix = 'Basic.ColorGroup';
            ColorGroupRow.lookupKey = 'Shoes.ColorGroup';
            function getLookup() {
                return Q.getLookup('Shoes.ColorGroup');
            }
            ColorGroupRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ColorGroupRow.Fields || (ColorGroupRow.Fields = {}));
            ['GroupId', 'GroupName'].forEach(function (x) { return Fields[x] = x; });
        })(ColorGroupRow = Basic.ColorGroupRow || (Basic.ColorGroupRow = {}));
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var ColorGroupService;
        (function (ColorGroupService) {
            ColorGroupService.baseUrl = 'Basic/ColorGroup';
            var Methods;
            (function (Methods) {
            })(Methods = ColorGroupService.Methods || (ColorGroupService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ColorGroupService[x] = function (r, s, o) { return Q.serviceRequest(ColorGroupService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ColorGroupService.baseUrl + '/' + x;
            });
        })(ColorGroupService = Basic.ColorGroupService || (Basic.ColorGroupService = {}));
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var EmployeeRow;
        (function (EmployeeRow) {
            EmployeeRow.idProperty = 'EmployeeID';
            EmployeeRow.nameProperty = 'FullName';
            EmployeeRow.localTextPrefix = 'Basic.Employee';
            EmployeeRow.lookupKey = 'Basic.Employee';
            function getLookup() {
                return Q.getLookup('Basic.Employee');
            }
            EmployeeRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = EmployeeRow.Fields || (EmployeeRow.Fields = {}));
            ['EmployeeID', 'LastName', 'FirstName', 'FullName', 'Title', 'TitleOfCourtesy', 'BirthDate', 'HireDate', 'Address', 'City', 'Region', 'PostalCode', 'Country', 'HomePhone', 'Extension', 'Photo', 'Notes', 'ReportsTo', 'PhotoPath', 'ReportsToFullName', 'ReportsToLastName', 'ReportsToFirstName', 'ReportsToTitle', 'ReportsToTitleOfCourtesy', 'ReportsToBirthDate', 'ReportsToHireDate', 'ReportsToAddress', 'ReportsToCity', 'ReportsToRegion', 'ReportsToPostalCode', 'ReportsToCountry', 'ReportsToHomePhone', 'ReportsToExtension', 'ReportsToPhoto', 'ReportsToNotes', 'ReportsToReportsTo', 'ReportsToPhotoPath', 'Gender'].forEach(function (x) { return Fields[x] = x; });
        })(EmployeeRow = Basic.EmployeeRow || (Basic.EmployeeRow = {}));
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        (function (Gender) {
            Gender[Gender["Male"] = 1] = "Male";
            Gender[Gender["Female"] = 2] = "Female";
        })(Basic.Gender || (Basic.Gender = {}));
        var Gender = Basic.Gender;
        Serenity.Decorators.registerEnum(Gender, 'ERP.Basic.Entities.Gender');
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var MaterialForm = (function (_super) {
            __extends(MaterialForm, _super);
            function MaterialForm() {
                _super.apply(this, arguments);
            }
            MaterialForm.formKey = 'Basic.Material';
            return MaterialForm;
        }(Serenity.PrefixedContext));
        Basic.MaterialForm = MaterialForm;
        [['MaterialName', function () { return Serenity.StringEditor; }], ['Description', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(MaterialForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var MaterialRow;
        (function (MaterialRow) {
            MaterialRow.idProperty = 'MaterialId';
            MaterialRow.nameProperty = 'MaterialName';
            MaterialRow.localTextPrefix = 'Basic.Material';
            var Fields;
            (function (Fields) {
            })(Fields = MaterialRow.Fields || (MaterialRow.Fields = {}));
            ['MaterialId', 'MaterialName', 'Description'].forEach(function (x) { return Fields[x] = x; });
        })(MaterialRow = Basic.MaterialRow || (Basic.MaterialRow = {}));
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var MaterialService;
        (function (MaterialService) {
            MaterialService.baseUrl = 'Basic/Material';
            var Methods;
            (function (Methods) {
            })(Methods = MaterialService.Methods || (MaterialService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                MaterialService[x] = function (r, s, o) { return Q.serviceRequest(MaterialService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = MaterialService.baseUrl + '/' + x;
            });
        })(MaterialService = Basic.MaterialService || (Basic.MaterialService = {}));
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var ProductColorForm = (function (_super) {
            __extends(ProductColorForm, _super);
            function ProductColorForm() {
                _super.apply(this, arguments);
            }
            ProductColorForm.formKey = 'Basic.ProductColor';
            return ProductColorForm;
        }(Serenity.PrefixedContext));
        Basic.ProductColorForm = ProductColorForm;
        [['ColorName', function () { return Serenity.StringEditor; }], ['ColorGroupId', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(ProductColorForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var ProductColorRow;
        (function (ProductColorRow) {
            ProductColorRow.idProperty = 'ColorID';
            ProductColorRow.nameProperty = 'ColorName';
            ProductColorRow.localTextPrefix = 'Basic.ProductColor';
            ProductColorRow.lookupKey = 'Basic.ProductColor';
            function getLookup() {
                return Q.getLookup('Basic.ProductColor');
            }
            ProductColorRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ProductColorRow.Fields || (ProductColorRow.Fields = {}));
            ['ColorID', 'ColorName', 'ColorGroupId', 'ColorGroupGroupName'].forEach(function (x) { return Fields[x] = x; });
        })(ProductColorRow = Basic.ProductColorRow || (Basic.ProductColorRow = {}));
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var ProductColorService;
        (function (ProductColorService) {
            ProductColorService.baseUrl = 'Basic/ProductColor';
            var Methods;
            (function (Methods) {
            })(Methods = ProductColorService.Methods || (ProductColorService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ProductColorService[x] = function (r, s, o) { return Q.serviceRequest(ProductColorService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ProductColorService.baseUrl + '/' + x;
            });
        })(ProductColorService = Basic.ProductColorService || (Basic.ProductColorService = {}));
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var ProductForm = (function (_super) {
            __extends(ProductForm, _super);
            function ProductForm() {
                _super.apply(this, arguments);
            }
            ProductForm.formKey = 'Basic.Product';
            return ProductForm;
        }(Serenity.PrefixedContext));
        Basic.ProductForm = ProductForm;
        [['ProductName', function () { return Serenity.StringEditor; }], ['ProductImage', function () { return Serenity.ImageUploadEditor; }], ['GalleryImages', function () { return Serenity.MultipleImageUploadEditor; }], ['Discontinued', function () { return Serenity.BooleanEditor; }], ['SupplierID', function () { return Serenity.LookupEditor; }], ['CategoryID', function () { return Serenity.LookupEditor; }], ['QuantityPerUnit', function () { return Serenity.StringEditor; }], ['UnitPrice', function () { return Serenity.DecimalEditor; }], ['UnitsInStock', function () { return Serenity.IntegerEditor; }], ['UnitsOnOrder', function () { return Serenity.IntegerEditor; }], ['ReorderLevel', function () { return Serenity.IntegerEditor; }], ['ProductColor', function () { return Serenity.LookupEditor; }], ['ProductSize', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(ProductForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var ProductLangRow;
        (function (ProductLangRow) {
            ProductLangRow.idProperty = 'Id';
            ProductLangRow.nameProperty = 'ProductName';
            ProductLangRow.localTextPrefix = 'Basic.ProductLang';
            var Fields;
            (function (Fields) {
            })(Fields = ProductLangRow.Fields || (ProductLangRow.Fields = {}));
            ['Id', 'ProductID', 'LanguageId', 'ProductName'].forEach(function (x) { return Fields[x] = x; });
        })(ProductLangRow = Basic.ProductLangRow || (Basic.ProductLangRow = {}));
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var ProductLangService;
        (function (ProductLangService) {
            ProductLangService.baseUrl = 'Basic/ProductLang';
            var Methods;
            (function (Methods) {
            })(Methods = ProductLangService.Methods || (ProductLangService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ProductLangService[x] = function (r, s, o) { return Q.serviceRequest(ProductLangService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ProductLangService.baseUrl + '/' + x;
            });
        })(ProductLangService = Basic.ProductLangService || (Basic.ProductLangService = {}));
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var ProductLogRow;
        (function (ProductLogRow) {
            ProductLogRow.idProperty = 'ProductLogID';
            ProductLogRow.localTextPrefix = 'Basic.ProductLog';
            var Fields;
            (function (Fields) {
            })(Fields = ProductLogRow.Fields || (ProductLogRow.Fields = {}));
            ['ProductLogID', 'OperationType', 'ChangingUserId', 'ValidFrom', 'ValidUntil', 'ProductID', 'ProductName', 'ProductImage', 'Discontinued', 'SupplierID', 'CategoryID', 'QuantityPerUnit', 'UnitPrice', 'UnitsInStock', 'UnitsOnOrder', 'ReorderLevel'].forEach(function (x) { return Fields[x] = x; });
        })(ProductLogRow = Basic.ProductLogRow || (Basic.ProductLogRow = {}));
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var ProductProductColorRow;
        (function (ProductProductColorRow) {
            ProductProductColorRow.idProperty = 'Id';
            ProductProductColorRow.localTextPrefix = 'Basic.ProductProductColor';
            ProductProductColorRow.lookupKey = 'Purchase.PColor';
            function getLookup() {
                return Q.getLookup('Purchase.PColor');
            }
            ProductProductColorRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ProductProductColorRow.Fields || (ProductProductColorRow.Fields = {}));
            ['Id', 'ProductID', 'ColorID', 'ColorName', 'ColorColorGroupId'].forEach(function (x) { return Fields[x] = x; });
        })(ProductProductColorRow = Basic.ProductProductColorRow || (Basic.ProductProductColorRow = {}));
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var ProductProductSizeRow;
        (function (ProductProductSizeRow) {
            ProductProductSizeRow.idProperty = 'Id';
            ProductProductSizeRow.localTextPrefix = 'Basic.ProductProductSize';
            ProductProductSizeRow.lookupKey = 'Purchase.PSize';
            function getLookup() {
                return Q.getLookup('Purchase.PSize');
            }
            ProductProductSizeRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ProductProductSizeRow.Fields || (ProductProductSizeRow.Fields = {}));
            ['Id', 'ProductID', 'SizeID', 'SizeName', 'SizeSizeGroupId'].forEach(function (x) { return Fields[x] = x; });
        })(ProductProductSizeRow = Basic.ProductProductSizeRow || (Basic.ProductProductSizeRow = {}));
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var ProductRow;
        (function (ProductRow) {
            ProductRow.idProperty = 'ProductID';
            ProductRow.nameProperty = 'ProductName';
            ProductRow.localTextPrefix = 'Basic.Product';
            ProductRow.lookupKey = 'Basic.Product';
            function getLookup() {
                return Q.getLookup('Basic.Product');
            }
            ProductRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ProductRow.Fields || (ProductRow.Fields = {}));
            ['ProductID', 'ProductName', 'ProductImage', 'Discontinued', 'SupplierID', 'CategoryID', 'QuantityPerUnit', 'UnitPrice', 'UnitsInStock', 'UnitsOnOrder', 'ReorderLevel', 'SupplierCompanyName', 'SupplierContactName', 'SupplierContactTitle', 'SupplierAddress', 'SupplierCity', 'SupplierRegion', 'SupplierPostalCode', 'SupplierCountry', 'SupplierPhone', 'SupplierFax', 'SupplierHomePage', 'CategoryName', 'CategoryDescription', 'CategoryPicture', 'ProductColor', 'ProductSize', 'GalleryImages'].forEach(function (x) { return Fields[x] = x; });
        })(ProductRow = Basic.ProductRow || (Basic.ProductRow = {}));
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var ProductService;
        (function (ProductService) {
            ProductService.baseUrl = 'Basic/Product';
            var Methods;
            (function (Methods) {
            })(Methods = ProductService.Methods || (ProductService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'RetrieveLocalization', 'List'].forEach(function (x) {
                ProductService[x] = function (r, s, o) { return Q.serviceRequest(ProductService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ProductService.baseUrl + '/' + x;
            });
        })(ProductService = Basic.ProductService || (Basic.ProductService = {}));
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var ProductSizeForm = (function (_super) {
            __extends(ProductSizeForm, _super);
            function ProductSizeForm() {
                _super.apply(this, arguments);
            }
            ProductSizeForm.formKey = 'Basic.ProductSize';
            return ProductSizeForm;
        }(Serenity.PrefixedContext));
        Basic.ProductSizeForm = ProductSizeForm;
        [['SizeName', function () { return Serenity.StringEditor; }], ['SizeGroupId', function () { return Serenity.LookupEditor; }]].forEach(function (x) { return Object.defineProperty(ProductSizeForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var ProductSizeRow;
        (function (ProductSizeRow) {
            ProductSizeRow.idProperty = 'SizeID';
            ProductSizeRow.nameProperty = 'SizeName';
            ProductSizeRow.localTextPrefix = 'Basic.ProductSize';
            ProductSizeRow.lookupKey = 'Basic.ProductSize';
            function getLookup() {
                return Q.getLookup('Basic.ProductSize');
            }
            ProductSizeRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ProductSizeRow.Fields || (ProductSizeRow.Fields = {}));
            ['SizeID', 'SizeName', 'SizeGroupId', 'SizeGroupGroupName'].forEach(function (x) { return Fields[x] = x; });
        })(ProductSizeRow = Basic.ProductSizeRow || (Basic.ProductSizeRow = {}));
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var ProductSizeService;
        (function (ProductSizeService) {
            ProductSizeService.baseUrl = 'Basic/ProductSize';
            var Methods;
            (function (Methods) {
            })(Methods = ProductSizeService.Methods || (ProductSizeService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ProductSizeService[x] = function (r, s, o) { return Q.serviceRequest(ProductSizeService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ProductSizeService.baseUrl + '/' + x;
            });
        })(ProductSizeService = Basic.ProductSizeService || (Basic.ProductSizeService = {}));
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var SeasonForm = (function (_super) {
            __extends(SeasonForm, _super);
            function SeasonForm() {
                _super.apply(this, arguments);
            }
            SeasonForm.formKey = 'Basic.Season';
            return SeasonForm;
        }(Serenity.PrefixedContext));
        Basic.SeasonForm = SeasonForm;
        [['SeasonName', function () { return Serenity.StringEditor; }], ['Description', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(SeasonForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var SeasonRow;
        (function (SeasonRow) {
            SeasonRow.idProperty = 'SeasonId';
            SeasonRow.nameProperty = 'SeasonName';
            SeasonRow.localTextPrefix = 'Basic.Season';
            var Fields;
            (function (Fields) {
            })(Fields = SeasonRow.Fields || (SeasonRow.Fields = {}));
            ['SeasonId', 'SeasonName', 'Description'].forEach(function (x) { return Fields[x] = x; });
        })(SeasonRow = Basic.SeasonRow || (Basic.SeasonRow = {}));
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var SeasonService;
        (function (SeasonService) {
            SeasonService.baseUrl = 'Basic/Season';
            var Methods;
            (function (Methods) {
            })(Methods = SeasonService.Methods || (SeasonService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                SeasonService[x] = function (r, s, o) { return Q.serviceRequest(SeasonService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = SeasonService.baseUrl + '/' + x;
            });
        })(SeasonService = Basic.SeasonService || (Basic.SeasonService = {}));
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var ShipperForm = (function (_super) {
            __extends(ShipperForm, _super);
            function ShipperForm() {
                _super.apply(this, arguments);
            }
            ShipperForm.formKey = 'Basic.Shipper';
            return ShipperForm;
        }(Serenity.PrefixedContext));
        Basic.ShipperForm = ShipperForm;
        [['CompanyName', function () { return Serenity.StringEditor; }], ['Phone', function () { return Basic.PhoneEditor; }]].forEach(function (x) { return Object.defineProperty(ShipperForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var ShipperRow;
        (function (ShipperRow) {
            ShipperRow.idProperty = 'ShipperID';
            ShipperRow.nameProperty = 'CompanyName';
            ShipperRow.localTextPrefix = 'Basic.Shipper';
            ShipperRow.lookupKey = 'Basic.Shipper';
            function getLookup() {
                return Q.getLookup('Basic.Shipper');
            }
            ShipperRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = ShipperRow.Fields || (ShipperRow.Fields = {}));
            ['ShipperID', 'CompanyName', 'Phone'].forEach(function (x) { return Fields[x] = x; });
        })(ShipperRow = Basic.ShipperRow || (Basic.ShipperRow = {}));
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var ShipperService;
        (function (ShipperService) {
            ShipperService.baseUrl = 'Basic/Shipper';
            var Methods;
            (function (Methods) {
            })(Methods = ShipperService.Methods || (ShipperService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                ShipperService[x] = function (r, s, o) { return Q.serviceRequest(ShipperService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = ShipperService.baseUrl + '/' + x;
            });
        })(ShipperService = Basic.ShipperService || (Basic.ShipperService = {}));
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var SizeGroupForm = (function (_super) {
            __extends(SizeGroupForm, _super);
            function SizeGroupForm() {
                _super.apply(this, arguments);
            }
            SizeGroupForm.formKey = 'Basic.SizeGroup';
            return SizeGroupForm;
        }(Serenity.PrefixedContext));
        Basic.SizeGroupForm = SizeGroupForm;
        [['GroupName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(SizeGroupForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var SizeGroupRow;
        (function (SizeGroupRow) {
            SizeGroupRow.idProperty = 'GroupId';
            SizeGroupRow.nameProperty = 'GroupName';
            SizeGroupRow.localTextPrefix = 'Basic.SizeGroup';
            SizeGroupRow.lookupKey = 'Shoes.SizeGroup';
            function getLookup() {
                return Q.getLookup('Shoes.SizeGroup');
            }
            SizeGroupRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = SizeGroupRow.Fields || (SizeGroupRow.Fields = {}));
            ['GroupId', 'GroupName'].forEach(function (x) { return Fields[x] = x; });
        })(SizeGroupRow = Basic.SizeGroupRow || (Basic.SizeGroupRow = {}));
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var SizeGroupService;
        (function (SizeGroupService) {
            SizeGroupService.baseUrl = 'Basic/SizeGroup';
            var Methods;
            (function (Methods) {
            })(Methods = SizeGroupService.Methods || (SizeGroupService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                SizeGroupService[x] = function (r, s, o) { return Q.serviceRequest(SizeGroupService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = SizeGroupService.baseUrl + '/' + x;
            });
        })(SizeGroupService = Basic.SizeGroupService || (Basic.SizeGroupService = {}));
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var StyleForm = (function (_super) {
            __extends(StyleForm, _super);
            function StyleForm() {
                _super.apply(this, arguments);
            }
            StyleForm.formKey = 'Basic.Style';
            return StyleForm;
        }(Serenity.PrefixedContext));
        Basic.StyleForm = StyleForm;
        [['StyleName', function () { return Serenity.StringEditor; }], ['Description', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(StyleForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var StyleRow;
        (function (StyleRow) {
            StyleRow.idProperty = 'StyleId';
            StyleRow.nameProperty = 'StyleName';
            StyleRow.localTextPrefix = 'Basic.Style';
            var Fields;
            (function (Fields) {
            })(Fields = StyleRow.Fields || (StyleRow.Fields = {}));
            ['StyleId', 'StyleName', 'Description'].forEach(function (x) { return Fields[x] = x; });
        })(StyleRow = Basic.StyleRow || (Basic.StyleRow = {}));
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var StyleService;
        (function (StyleService) {
            StyleService.baseUrl = 'Basic/Style';
            var Methods;
            (function (Methods) {
            })(Methods = StyleService.Methods || (StyleService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                StyleService[x] = function (r, s, o) { return Q.serviceRequest(StyleService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = StyleService.baseUrl + '/' + x;
            });
        })(StyleService = Basic.StyleService || (Basic.StyleService = {}));
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var UnitForm = (function (_super) {
            __extends(UnitForm, _super);
            function UnitForm() {
                _super.apply(this, arguments);
            }
            UnitForm.formKey = 'Basic.Unit';
            return UnitForm;
        }(Serenity.PrefixedContext));
        Basic.UnitForm = UnitForm;
        [['UnitName', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(UnitForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var UnitRow;
        (function (UnitRow) {
            UnitRow.idProperty = 'UnitId';
            UnitRow.nameProperty = 'UnitName';
            UnitRow.localTextPrefix = 'Basic.Unit';
            var Fields;
            (function (Fields) {
            })(Fields = UnitRow.Fields || (UnitRow.Fields = {}));
            ['UnitId', 'UnitName'].forEach(function (x) { return Fields[x] = x; });
        })(UnitRow = Basic.UnitRow || (Basic.UnitRow = {}));
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var UnitService;
        (function (UnitService) {
            UnitService.baseUrl = 'Basic/Unit';
            var Methods;
            (function (Methods) {
            })(Methods = UnitService.Methods || (UnitService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                UnitService[x] = function (r, s, o) { return Q.serviceRequest(UnitService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UnitService.baseUrl + '/' + x;
            });
        })(UnitService = Basic.UnitService || (Basic.UnitService = {}));
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Common;
    (function (Common) {
        var UserPreferenceRow;
        (function (UserPreferenceRow) {
            UserPreferenceRow.idProperty = 'UserPreferenceId';
            UserPreferenceRow.nameProperty = 'Name';
            UserPreferenceRow.localTextPrefix = 'Common.UserPreference';
            var Fields;
            (function (Fields) {
            })(Fields = UserPreferenceRow.Fields || (UserPreferenceRow.Fields = {}));
            ['UserPreferenceId', 'UserId', 'PreferenceType', 'Name', 'Value'].forEach(function (x) { return Fields[x] = x; });
        })(UserPreferenceRow = Common.UserPreferenceRow || (Common.UserPreferenceRow = {}));
    })(Common = ERP.Common || (ERP.Common = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Common;
    (function (Common) {
        var UserPreferenceService;
        (function (UserPreferenceService) {
            UserPreferenceService.baseUrl = 'Common/UserPreference';
            var Methods;
            (function (Methods) {
            })(Methods = UserPreferenceService.Methods || (UserPreferenceService.Methods = {}));
            ['Update', 'Retrieve'].forEach(function (x) {
                UserPreferenceService[x] = function (r, s, o) { return Q.serviceRequest(UserPreferenceService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = UserPreferenceService.baseUrl + '/' + x;
            });
        })(UserPreferenceService = Common.UserPreferenceService || (Common.UserPreferenceService = {}));
    })(Common = ERP.Common || (ERP.Common = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Inventory;
    (function (Inventory) {
        var DepotForm = (function (_super) {
            __extends(DepotForm, _super);
            function DepotForm() {
                _super.apply(this, arguments);
            }
            DepotForm.formKey = 'Inventory.Depot';
            return DepotForm;
        }(Serenity.PrefixedContext));
        Inventory.DepotForm = DepotForm;
        [['DepotID', function () { return Serenity.StringEditor; }], ['DepotName', function () { return Serenity.StringEditor; }], ['Description', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(DepotForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Inventory = ERP.Inventory || (ERP.Inventory = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Inventory;
    (function (Inventory) {
        var DepotRow;
        (function (DepotRow) {
            DepotRow.idProperty = 'DepotID';
            DepotRow.nameProperty = 'DepotName';
            DepotRow.localTextPrefix = 'Inventory.Depot';
            DepotRow.lookupKey = 'Inventory.Depot';
            function getLookup() {
                return Q.getLookup('Inventory.Depot');
            }
            DepotRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = DepotRow.Fields || (DepotRow.Fields = {}));
            ['DepotID', 'DepotName', 'Description'].forEach(function (x) { return Fields[x] = x; });
        })(DepotRow = Inventory.DepotRow || (Inventory.DepotRow = {}));
    })(Inventory = ERP.Inventory || (ERP.Inventory = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Inventory;
    (function (Inventory) {
        var DepotService;
        (function (DepotService) {
            DepotService.baseUrl = 'Inventory/Depot';
            var Methods;
            (function (Methods) {
            })(Methods = DepotService.Methods || (DepotService.Methods = {}));
            ['Create', 'Update', 'Delete', 'GetNextNumber', 'Retrieve', 'List'].forEach(function (x) {
                DepotService[x] = function (r, s, o) { return Q.serviceRequest(DepotService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = DepotService.baseUrl + '/' + x;
            });
        })(DepotService = Inventory.DepotService || (Inventory.DepotService = {}));
    })(Inventory = ERP.Inventory || (ERP.Inventory = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Inventory;
    (function (Inventory) {
        var DepotStockForm = (function (_super) {
            __extends(DepotStockForm, _super);
            function DepotStockForm() {
                _super.apply(this, arguments);
            }
            DepotStockForm.formKey = 'Inventory.DepotStock';
            return DepotStockForm;
        }(Serenity.PrefixedContext));
        Inventory.DepotStockForm = DepotStockForm;
        [['DepotID', function () { return Serenity.LookupEditor; }], ['ProductID', function () { return Serenity.LookupEditor; }], ['ColorID', function () { return Serenity.LookupEditor; }], ['SizeID', function () { return Serenity.LookupEditor; }], ['Quantity', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(DepotStockForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Inventory = ERP.Inventory || (ERP.Inventory = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Inventory;
    (function (Inventory) {
        var DepotStockRow;
        (function (DepotStockRow) {
            DepotStockRow.idProperty = 'Id';
            DepotStockRow.nameProperty = 'DepotID';
            DepotStockRow.localTextPrefix = 'Inventory.DepotStock';
            DepotStockRow.lookupKey = 'Inventory.DepotStock';
            function getLookup() {
                return Q.getLookup('Inventory.DepotStock');
            }
            DepotStockRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = DepotStockRow.Fields || (DepotStockRow.Fields = {}));
            ['Id', 'DepotID', 'ProductID', 'ColorID', 'SizeID', 'Quantity', 'DepotDepotName', 'DepotDescription', 'ProductName', 'ProductSupplierId', 'ProductCategoryId', 'ProductQuantityPerUnit', 'ProductUnitPrice', 'ProductUnitsInStock', 'ProductUnitsOnOrder', 'ProductReorderLevel', 'ProductDiscontinued', 'ProductProductImage', 'ProductGalleryImages', 'ColorName', 'ColorColorGroupId', 'SizeName', 'SizeSizeGroupId'].forEach(function (x) { return Fields[x] = x; });
        })(DepotStockRow = Inventory.DepotStockRow || (Inventory.DepotStockRow = {}));
    })(Inventory = ERP.Inventory || (ERP.Inventory = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Inventory;
    (function (Inventory) {
        var DepotStockService;
        (function (DepotStockService) {
            DepotStockService.baseUrl = 'Inventory/DepotStock';
            var Methods;
            (function (Methods) {
            })(Methods = DepotStockService.Methods || (DepotStockService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                DepotStockService[x] = function (r, s, o) { return Q.serviceRequest(DepotStockService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = DepotStockService.baseUrl + '/' + x;
            });
        })(DepotStockService = Inventory.DepotStockService || (Inventory.DepotStockService = {}));
    })(Inventory = ERP.Inventory || (ERP.Inventory = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Inventory;
    (function (Inventory) {
        var InventoryCountDetailForm = (function (_super) {
            __extends(InventoryCountDetailForm, _super);
            function InventoryCountDetailForm() {
                _super.apply(this, arguments);
            }
            InventoryCountDetailForm.formKey = 'Inventory.InventoryCountDetail';
            return InventoryCountDetailForm;
        }(Serenity.PrefixedContext));
        Inventory.InventoryCountDetailForm = InventoryCountDetailForm;
        [['ProductID', function () { return Serenity.LookupEditor; }], ['ColorID', function () { return Serenity.LookupEditor; }], ['SizeID', function () { return Serenity.LookupEditor; }], ['Quantity', function () { return Serenity.IntegerEditor; }], ['OriginalQuantity', function () { return Serenity.IntegerEditor; }], ['Description', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(InventoryCountDetailForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Inventory = ERP.Inventory || (ERP.Inventory = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Inventory;
    (function (Inventory) {
        var InventoryCountDetailRow;
        (function (InventoryCountDetailRow) {
            InventoryCountDetailRow.idProperty = 'Id';
            InventoryCountDetailRow.nameProperty = 'InventoryId';
            InventoryCountDetailRow.localTextPrefix = 'Inventory.InventoryCountDetail';
            var Fields;
            (function (Fields) {
            })(Fields = InventoryCountDetailRow.Fields || (InventoryCountDetailRow.Fields = {}));
            ['Id', 'InventoryId', 'ProductID', 'ColorID', 'SizeID', 'Quantity', 'OriginalQuantity', 'Description', 'InventoryDepotId', 'InventoryCheckDate', 'InventoryDescription', 'InventoryState', 'ProductName', 'ProductSupplierId', 'ProductCategoryId', 'ProductQuantityPerUnit', 'ProductUnitPrice', 'ProductUnitsInStock', 'ProductUnitsOnOrder', 'ProductReorderLevel', 'ProductDiscontinued', 'ProductProductImage', 'ColorName', 'ColorColorGroupId', 'SizeName', 'SizeSizeGroupId'].forEach(function (x) { return Fields[x] = x; });
        })(InventoryCountDetailRow = Inventory.InventoryCountDetailRow || (Inventory.InventoryCountDetailRow = {}));
    })(Inventory = ERP.Inventory || (ERP.Inventory = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Inventory;
    (function (Inventory) {
        var InventoryCountDetailService;
        (function (InventoryCountDetailService) {
            InventoryCountDetailService.baseUrl = 'Inventory/InventoryCountDetail';
            var Methods;
            (function (Methods) {
            })(Methods = InventoryCountDetailService.Methods || (InventoryCountDetailService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                InventoryCountDetailService[x] = function (r, s, o) { return Q.serviceRequest(InventoryCountDetailService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = InventoryCountDetailService.baseUrl + '/' + x;
            });
        })(InventoryCountDetailService = Inventory.InventoryCountDetailService || (Inventory.InventoryCountDetailService = {}));
    })(Inventory = ERP.Inventory || (ERP.Inventory = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Inventory;
    (function (Inventory) {
        var InventoryCountForm = (function (_super) {
            __extends(InventoryCountForm, _super);
            function InventoryCountForm() {
                _super.apply(this, arguments);
            }
            InventoryCountForm.formKey = 'Inventory.InventoryCount';
            return InventoryCountForm;
        }(Serenity.PrefixedContext));
        Inventory.InventoryCountForm = InventoryCountForm;
        [['InventoryId', function () { return Serenity.StringEditor; }], ['DepotID', function () { return Serenity.LookupEditor; }], ['CheckDate', function () { return Serenity.DateEditor; }], ['Description', function () { return Serenity.StringEditor; }], ['DetailList', function () { return Inventory.InventoryCountDetailsEditor; }]].forEach(function (x) { return Object.defineProperty(InventoryCountForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Inventory = ERP.Inventory || (ERP.Inventory = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Inventory;
    (function (Inventory) {
        var InventoryCountRow;
        (function (InventoryCountRow) {
            InventoryCountRow.idProperty = 'InventoryId';
            InventoryCountRow.nameProperty = 'InventoryId';
            InventoryCountRow.localTextPrefix = 'Inventory.InventoryCount';
            var Fields;
            (function (Fields) {
            })(Fields = InventoryCountRow.Fields || (InventoryCountRow.Fields = {}));
            ['InventoryId', 'DepotID', 'CheckDate', 'Description', 'State', 'DepotDepotName', 'DepotDescription', 'DetailList'].forEach(function (x) { return Fields[x] = x; });
        })(InventoryCountRow = Inventory.InventoryCountRow || (Inventory.InventoryCountRow = {}));
    })(Inventory = ERP.Inventory || (ERP.Inventory = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Inventory;
    (function (Inventory) {
        var InventoryCountService;
        (function (InventoryCountService) {
            InventoryCountService.baseUrl = 'Inventory/InventoryCount';
            var Methods;
            (function (Methods) {
            })(Methods = InventoryCountService.Methods || (InventoryCountService.Methods = {}));
            ['Create', 'Update', 'Delete', 'GetNextNumber', 'Retrieve', 'List'].forEach(function (x) {
                InventoryCountService[x] = function (r, s, o) { return Q.serviceRequest(InventoryCountService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = InventoryCountService.baseUrl + '/' + x;
            });
        })(InventoryCountService = Inventory.InventoryCountService || (Inventory.InventoryCountService = {}));
    })(Inventory = ERP.Inventory || (ERP.Inventory = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Membership;
    (function (Membership) {
        var ChangePasswordForm = (function (_super) {
            __extends(ChangePasswordForm, _super);
            function ChangePasswordForm() {
                _super.apply(this, arguments);
            }
            ChangePasswordForm.formKey = 'Membership.ChangePassword';
            return ChangePasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ChangePasswordForm = ChangePasswordForm;
        [['OldPassword', function () { return Serenity.PasswordEditor; }], ['NewPassword', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(ChangePasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = ERP.Membership || (ERP.Membership = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordForm = (function (_super) {
            __extends(ForgotPasswordForm, _super);
            function ForgotPasswordForm() {
                _super.apply(this, arguments);
            }
            ForgotPasswordForm.formKey = 'Membership.ForgotPassword';
            return ForgotPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ForgotPasswordForm = ForgotPasswordForm;
        [['Email', function () { return Serenity.EmailEditor; }]].forEach(function (x) { return Object.defineProperty(ForgotPasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = ERP.Membership || (ERP.Membership = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Membership;
    (function (Membership) {
        var LoginForm = (function (_super) {
            __extends(LoginForm, _super);
            function LoginForm() {
                _super.apply(this, arguments);
            }
            LoginForm.formKey = 'Membership.Login';
            return LoginForm;
        }(Serenity.PrefixedContext));
        Membership.LoginForm = LoginForm;
        [['Username', function () { return Serenity.StringEditor; }], ['Password', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(LoginForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = ERP.Membership || (ERP.Membership = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Membership;
    (function (Membership) {
        var ResetPasswordForm = (function (_super) {
            __extends(ResetPasswordForm, _super);
            function ResetPasswordForm() {
                _super.apply(this, arguments);
            }
            ResetPasswordForm.formKey = 'Membership.ResetPassword';
            return ResetPasswordForm;
        }(Serenity.PrefixedContext));
        Membership.ResetPasswordForm = ResetPasswordForm;
        [['NewPassword', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(ResetPasswordForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = ERP.Membership || (ERP.Membership = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Membership;
    (function (Membership) {
        var SignUpForm = (function (_super) {
            __extends(SignUpForm, _super);
            function SignUpForm() {
                _super.apply(this, arguments);
            }
            SignUpForm.formKey = 'Membership.SignUp';
            return SignUpForm;
        }(Serenity.PrefixedContext));
        Membership.SignUpForm = SignUpForm;
        [['DisplayName', function () { return Serenity.StringEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['ConfirmEmail', function () { return Serenity.EmailEditor; }], ['Password', function () { return Serenity.PasswordEditor; }], ['ConfirmPassword', function () { return Serenity.PasswordEditor; }]].forEach(function (x) { return Object.defineProperty(SignUpForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Membership = ERP.Membership || (ERP.Membership = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Purchase;
    (function (Purchase) {
        var PurchaseDetailForm = (function (_super) {
            __extends(PurchaseDetailForm, _super);
            function PurchaseDetailForm() {
                _super.apply(this, arguments);
            }
            PurchaseDetailForm.formKey = 'Purchase.PurchaseDetail';
            return PurchaseDetailForm;
        }(Serenity.PrefixedContext));
        Purchase.PurchaseDetailForm = PurchaseDetailForm;
        [['ProductID', function () { return Serenity.LookupEditor; }], ['ColorID', function () { return Serenity.LookupEditor; }], ['SizeID', function () { return Serenity.LookupEditor; }], ['UnitPrice', function () { return Serenity.DecimalEditor; }], ['Quantity', function () { return Serenity.IntegerEditor; }], ['Description', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(PurchaseDetailForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Purchase = ERP.Purchase || (ERP.Purchase = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Purchase;
    (function (Purchase) {
        var PurchaseDetailRow;
        (function (PurchaseDetailRow) {
            PurchaseDetailRow.idProperty = 'Id';
            PurchaseDetailRow.nameProperty = 'PurchaseId';
            PurchaseDetailRow.localTextPrefix = 'Purchase.PurchaseDetail';
            var Fields;
            (function (Fields) {
            })(Fields = PurchaseDetailRow.Fields || (PurchaseDetailRow.Fields = {}));
            ['Id', 'PurchaseId', 'ProductID', 'ColorID', 'SizeID', 'UnitPrice', 'Quantity', 'Description', 'PurchaseSupplierId', 'PurchaseUserId', 'PurchaseCreateDate', 'PurchaseDescription', 'PurchaseState', 'ProductName', 'ProductSupplierId', 'ProductCategoryId', 'ProductQuantityPerUnit', 'ProductUnitPrice', 'ProductUnitsInStock', 'ProductUnitsOnOrder', 'ProductReorderLevel', 'ProductDiscontinued', 'ProductProductImage', 'ProductGalleryImages', 'ColorName', 'ColorColorGroupId', 'SizeName', 'SizeSizeGroupId'].forEach(function (x) { return Fields[x] = x; });
        })(PurchaseDetailRow = Purchase.PurchaseDetailRow || (Purchase.PurchaseDetailRow = {}));
    })(Purchase = ERP.Purchase || (ERP.Purchase = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Purchase;
    (function (Purchase) {
        var PurchaseDetailService;
        (function (PurchaseDetailService) {
            PurchaseDetailService.baseUrl = 'Purchase/PurchaseDetail';
            var Methods;
            (function (Methods) {
            })(Methods = PurchaseDetailService.Methods || (PurchaseDetailService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                PurchaseDetailService[x] = function (r, s, o) { return Q.serviceRequest(PurchaseDetailService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = PurchaseDetailService.baseUrl + '/' + x;
            });
        })(PurchaseDetailService = Purchase.PurchaseDetailService || (Purchase.PurchaseDetailService = {}));
    })(Purchase = ERP.Purchase || (ERP.Purchase = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Purchase;
    (function (Purchase) {
        var PurchaseListForm = (function (_super) {
            __extends(PurchaseListForm, _super);
            function PurchaseListForm() {
                _super.apply(this, arguments);
            }
            PurchaseListForm.formKey = 'Purchase.PurchaseList';
            return PurchaseListForm;
        }(Serenity.PrefixedContext));
        Purchase.PurchaseListForm = PurchaseListForm;
        [['PurchaseId', function () { return Serenity.StringEditor; }], ['SupplierId', function () { return Serenity.LookupEditor; }], ['DepotID', function () { return Serenity.LookupEditor; }], ['UserId', function () { return Serenity.IntegerEditor; }], ['CreateDate', function () { return Serenity.DateEditor; }], ['Description', function () { return Serenity.StringEditor; }], ['State', function () { return Serenity.IntegerEditor; }], ['DetailList', function () { return Purchase.PurchaseDetailsEditor; }]].forEach(function (x) { return Object.defineProperty(PurchaseListForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Purchase = ERP.Purchase || (ERP.Purchase = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Purchase;
    (function (Purchase) {
        var PurchaseListRow;
        (function (PurchaseListRow) {
            PurchaseListRow.idProperty = 'PurchaseId';
            PurchaseListRow.nameProperty = 'PurchaseId';
            PurchaseListRow.localTextPrefix = 'Purchase.PurchaseList';
            var Fields;
            (function (Fields) {
            })(Fields = PurchaseListRow.Fields || (PurchaseListRow.Fields = {}));
            ['PurchaseId', 'SupplierId', 'DepotID', 'UserId', 'CreateDate', 'Description', 'State', 'SupplierCompanyName', 'SupplierContactName', 'SupplierContactTitle', 'SupplierAddress', 'SupplierCity', 'SupplierRegion', 'SupplierPostalCode', 'SupplierCountry', 'SupplierPhone', 'SupplierFax', 'SupplierHomePage', 'DepotDepotName', 'DepotDescription', 'DetailList'].forEach(function (x) { return Fields[x] = x; });
        })(PurchaseListRow = Purchase.PurchaseListRow || (Purchase.PurchaseListRow = {}));
    })(Purchase = ERP.Purchase || (ERP.Purchase = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Purchase;
    (function (Purchase) {
        var PurchaseListService;
        (function (PurchaseListService) {
            PurchaseListService.baseUrl = 'Purchase/PurchaseList';
            var Methods;
            (function (Methods) {
            })(Methods = PurchaseListService.Methods || (PurchaseListService.Methods = {}));
            ['Create', 'Update', 'Delete', 'GetNextNumber', 'Retrieve', 'List'].forEach(function (x) {
                PurchaseListService[x] = function (r, s, o) { return Q.serviceRequest(PurchaseListService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = PurchaseListService.baseUrl + '/' + x;
            });
        })(PurchaseListService = Purchase.PurchaseListService || (Purchase.PurchaseListService = {}));
    })(Purchase = ERP.Purchase || (ERP.Purchase = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Purchase;
    (function (Purchase) {
        var PurchaseOrderDetailForm = (function (_super) {
            __extends(PurchaseOrderDetailForm, _super);
            function PurchaseOrderDetailForm() {
                _super.apply(this, arguments);
            }
            PurchaseOrderDetailForm.formKey = 'Purchase.PurchaseOrderDetail';
            return PurchaseOrderDetailForm;
        }(Serenity.PrefixedContext));
        Purchase.PurchaseOrderDetailForm = PurchaseOrderDetailForm;
        [['OrderId', function () { return Serenity.StringEditor; }], ['ProductID', function () { return Serenity.IntegerEditor; }], ['ColorID', function () { return Serenity.IntegerEditor; }], ['SizeID', function () { return Serenity.IntegerEditor; }], ['UnitPrice', function () { return Serenity.DecimalEditor; }], ['Quantity', function () { return Serenity.IntegerEditor; }], ['Description', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(PurchaseOrderDetailForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Purchase = ERP.Purchase || (ERP.Purchase = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Purchase;
    (function (Purchase) {
        var PurchaseOrderDetailRow;
        (function (PurchaseOrderDetailRow) {
            PurchaseOrderDetailRow.idProperty = 'Id';
            PurchaseOrderDetailRow.nameProperty = 'OrderId';
            PurchaseOrderDetailRow.localTextPrefix = 'Purchase.PurchaseOrderDetail';
            var Fields;
            (function (Fields) {
            })(Fields = PurchaseOrderDetailRow.Fields || (PurchaseOrderDetailRow.Fields = {}));
            ['Id', 'OrderId', 'ProductID', 'ColorID', 'SizeID', 'UnitPrice', 'Quantity', 'Description', 'OrderSupplierId', 'OrderUserId', 'OrderCreateDate', 'OrderDescription', 'OrderState', 'ProductName', 'ProductSupplierId', 'ProductCategoryId', 'ProductQuantityPerUnit', 'ProductUnitPrice', 'ProductUnitsInStock', 'ProductUnitsOnOrder', 'ProductReorderLevel', 'ProductDiscontinued', 'ProductProductImage', 'ProductGalleryImages', 'ColorName', 'ColorColorGroupId', 'SizeName', 'SizeSizeGroupId'].forEach(function (x) { return Fields[x] = x; });
        })(PurchaseOrderDetailRow = Purchase.PurchaseOrderDetailRow || (Purchase.PurchaseOrderDetailRow = {}));
    })(Purchase = ERP.Purchase || (ERP.Purchase = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Purchase;
    (function (Purchase) {
        var PurchaseOrderDetailService;
        (function (PurchaseOrderDetailService) {
            PurchaseOrderDetailService.baseUrl = 'Purchase/PurchaseOrderDetail';
            var Methods;
            (function (Methods) {
            })(Methods = PurchaseOrderDetailService.Methods || (PurchaseOrderDetailService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                PurchaseOrderDetailService[x] = function (r, s, o) { return Q.serviceRequest(PurchaseOrderDetailService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = PurchaseOrderDetailService.baseUrl + '/' + x;
            });
        })(PurchaseOrderDetailService = Purchase.PurchaseOrderDetailService || (Purchase.PurchaseOrderDetailService = {}));
    })(Purchase = ERP.Purchase || (ERP.Purchase = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Purchase;
    (function (Purchase) {
        var PurchaseOrderForm = (function (_super) {
            __extends(PurchaseOrderForm, _super);
            function PurchaseOrderForm() {
                _super.apply(this, arguments);
            }
            PurchaseOrderForm.formKey = 'Purchase.PurchaseOrder';
            return PurchaseOrderForm;
        }(Serenity.PrefixedContext));
        Purchase.PurchaseOrderForm = PurchaseOrderForm;
        [['OrderId', function () { return Serenity.StringEditor; }], ['SupplierId', function () { return Serenity.LookupEditor; }], ['UserId', function () { return Serenity.IntegerEditor; }], ['CreateDate', function () { return Serenity.DateEditor; }], ['Description', function () { return Serenity.StringEditor; }], ['State', function () { return Serenity.IntegerEditor; }]].forEach(function (x) { return Object.defineProperty(PurchaseOrderForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Purchase = ERP.Purchase || (ERP.Purchase = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Purchase;
    (function (Purchase) {
        var PurchaseOrderRow;
        (function (PurchaseOrderRow) {
            PurchaseOrderRow.idProperty = 'OrderId';
            PurchaseOrderRow.nameProperty = 'OrderId';
            PurchaseOrderRow.localTextPrefix = 'Purchase.PurchaseOrder';
            var Fields;
            (function (Fields) {
            })(Fields = PurchaseOrderRow.Fields || (PurchaseOrderRow.Fields = {}));
            ['OrderId', 'SupplierId', 'UserId', 'CreateDate', 'Description', 'State', 'SupplierCompanyName', 'SupplierContactName', 'SupplierContactTitle', 'SupplierAddress', 'SupplierCity', 'SupplierRegion', 'SupplierPostalCode', 'SupplierCountry', 'SupplierPhone', 'SupplierFax', 'SupplierHomePage'].forEach(function (x) { return Fields[x] = x; });
        })(PurchaseOrderRow = Purchase.PurchaseOrderRow || (Purchase.PurchaseOrderRow = {}));
    })(Purchase = ERP.Purchase || (ERP.Purchase = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Purchase;
    (function (Purchase) {
        var PurchaseOrderService;
        (function (PurchaseOrderService) {
            PurchaseOrderService.baseUrl = 'Purchase/PurchaseOrder';
            var Methods;
            (function (Methods) {
            })(Methods = PurchaseOrderService.Methods || (PurchaseOrderService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                PurchaseOrderService[x] = function (r, s, o) { return Q.serviceRequest(PurchaseOrderService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = PurchaseOrderService.baseUrl + '/' + x;
            });
        })(PurchaseOrderService = Purchase.PurchaseOrderService || (Purchase.PurchaseOrderService = {}));
    })(Purchase = ERP.Purchase || (ERP.Purchase = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Purchase;
    (function (Purchase) {
        var SupplierForm = (function (_super) {
            __extends(SupplierForm, _super);
            function SupplierForm() {
                _super.apply(this, arguments);
            }
            SupplierForm.formKey = 'Purchase.Supplier';
            return SupplierForm;
        }(Serenity.PrefixedContext));
        Purchase.SupplierForm = SupplierForm;
        [['CompanyName', function () { return Serenity.StringEditor; }], ['ContactName', function () { return Serenity.StringEditor; }], ['ContactTitle', function () { return Serenity.StringEditor; }], ['Address', function () { return Serenity.StringEditor; }], ['Region', function () { return Serenity.StringEditor; }], ['PostalCode', function () { return Serenity.StringEditor; }], ['Country', function () { return Serenity.StringEditor; }], ['City', function () { return Serenity.StringEditor; }], ['Phone', function () { return Serenity.StringEditor; }], ['Fax', function () { return Serenity.StringEditor; }], ['HomePage', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(SupplierForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Purchase = ERP.Purchase || (ERP.Purchase = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Purchase;
    (function (Purchase) {
        var SupplierRow;
        (function (SupplierRow) {
            SupplierRow.idProperty = 'SupplierID';
            SupplierRow.nameProperty = 'CompanyName';
            SupplierRow.localTextPrefix = 'Purchase.Supplier';
            SupplierRow.lookupKey = 'Purchase.Supplier';
            function getLookup() {
                return Q.getLookup('Purchase.Supplier');
            }
            SupplierRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = SupplierRow.Fields || (SupplierRow.Fields = {}));
            ['SupplierID', 'CompanyName', 'ContactName', 'ContactTitle', 'Address', 'City', 'Region', 'PostalCode', 'Country', 'Phone', 'Fax', 'HomePage'].forEach(function (x) { return Fields[x] = x; });
        })(SupplierRow = Purchase.SupplierRow || (Purchase.SupplierRow = {}));
    })(Purchase = ERP.Purchase || (ERP.Purchase = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Purchase;
    (function (Purchase) {
        var SupplierService;
        (function (SupplierService) {
            SupplierService.baseUrl = 'Purchase/Supplier';
            var Methods;
            (function (Methods) {
            })(Methods = SupplierService.Methods || (SupplierService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                SupplierService[x] = function (r, s, o) { return Q.serviceRequest(SupplierService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = SupplierService.baseUrl + '/' + x;
            });
        })(SupplierService = Purchase.SupplierService || (Purchase.SupplierService = {}));
    })(Purchase = ERP.Purchase || (ERP.Purchase = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Sale;
    (function (Sale) {
        var CustomerDetailsRow;
        (function (CustomerDetailsRow) {
            CustomerDetailsRow.idProperty = 'Id';
            CustomerDetailsRow.nameProperty = 'Email';
            CustomerDetailsRow.localTextPrefix = 'Sale.CustomerDetails';
            var Fields;
            (function (Fields) {
            })(Fields = CustomerDetailsRow.Fields || (CustomerDetailsRow.Fields = {}));
            ['Id', 'LastContactDate', 'LastContactedBy', 'Email', 'SendBulletin', 'LastContactedByLastName', 'LastContactedByFirstName', 'LastContactedByTitle', 'LastContactedByTitleOfCourtesy', 'LastContactedByBirthDate', 'LastContactedByHireDate', 'LastContactedByAddress', 'LastContactedByCity', 'LastContactedByRegion', 'LastContactedByPostalCode', 'LastContactedByCountry', 'LastContactedByHomePhone', 'LastContactedByExtension', 'LastContactedByPhoto', 'LastContactedByNotes', 'LastContactedByReportsTo', 'LastContactedByPhotoPath'].forEach(function (x) { return Fields[x] = x; });
        })(CustomerDetailsRow = Sale.CustomerDetailsRow || (Sale.CustomerDetailsRow = {}));
    })(Sale = ERP.Sale || (ERP.Sale = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Sale;
    (function (Sale) {
        var CustomerForm = (function (_super) {
            __extends(CustomerForm, _super);
            function CustomerForm() {
                _super.apply(this, arguments);
            }
            CustomerForm.formKey = 'Sale.Customer';
            return CustomerForm;
        }(Serenity.PrefixedContext));
        Sale.CustomerForm = CustomerForm;
        [['CustomerID', function () { return Serenity.StringEditor; }], ['CompanyName', function () { return Serenity.StringEditor; }], ['ContactName', function () { return Serenity.StringEditor; }], ['ContactTitle', function () { return Serenity.StringEditor; }], ['Representatives', function () { return Serenity.LookupEditor; }], ['Address', function () { return Serenity.StringEditor; }], ['City', function () { return Serenity.StringEditor; }], ['Region', function () { return Serenity.StringEditor; }], ['PostalCode', function () { return Serenity.StringEditor; }], ['Country', function () { return Serenity.StringEditor; }], ['Phone', function () { return Serenity.StringEditor; }], ['Fax', function () { return Serenity.StringEditor; }], ['NoteList', function () { return Sale.NotesEditor; }], ['LastContactDate', function () { return Serenity.DateEditor; }], ['LastContactedBy', function () { return Serenity.LookupEditor; }], ['Email', function () { return Serenity.EmailEditor; }], ['SendBulletin', function () { return Serenity.BooleanEditor; }]].forEach(function (x) { return Object.defineProperty(CustomerForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Sale = ERP.Sale || (ERP.Sale = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Sale;
    (function (Sale) {
        var CustomerRepresentativesRow;
        (function (CustomerRepresentativesRow) {
            CustomerRepresentativesRow.idProperty = 'RepresentativeId';
            CustomerRepresentativesRow.localTextPrefix = 'CustomerRepresentatives';
            var Fields;
            (function (Fields) {
            })(Fields = CustomerRepresentativesRow.Fields || (CustomerRepresentativesRow.Fields = {}));
            ['RepresentativeId', 'CustomerId', 'EmployeeId'].forEach(function (x) { return Fields[x] = x; });
        })(CustomerRepresentativesRow = Sale.CustomerRepresentativesRow || (Sale.CustomerRepresentativesRow = {}));
    })(Sale = ERP.Sale || (ERP.Sale = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Sale;
    (function (Sale) {
        var CustomerRow;
        (function (CustomerRow) {
            CustomerRow.idProperty = 'ID';
            CustomerRow.nameProperty = 'CompanyName';
            CustomerRow.localTextPrefix = 'Sale.Customer';
            CustomerRow.lookupKey = 'Sale.CustomerCity';
            function getLookup() {
                return Q.getLookup('Sale.CustomerCity');
            }
            CustomerRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = CustomerRow.Fields || (CustomerRow.Fields = {}));
            ['ID', 'CustomerID', 'CompanyName', 'ContactName', 'ContactTitle', 'Address', 'City', 'Region', 'PostalCode', 'Country', 'Phone', 'Fax', 'NoteList', 'Representatives', 'LastContactDate', 'LastContactedBy', 'Email', 'SendBulletin'].forEach(function (x) { return Fields[x] = x; });
        })(CustomerRow = Sale.CustomerRow || (Sale.CustomerRow = {}));
    })(Sale = ERP.Sale || (ERP.Sale = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Sale;
    (function (Sale) {
        var CustomerService;
        (function (CustomerService) {
            CustomerService.baseUrl = 'Sale/Customer';
            var Methods;
            (function (Methods) {
            })(Methods = CustomerService.Methods || (CustomerService.Methods = {}));
            ['Create', 'Update', 'Delete', 'GetNextNumber', 'Retrieve', 'List'].forEach(function (x) {
                CustomerService[x] = function (r, s, o) { return Q.serviceRequest(CustomerService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = CustomerService.baseUrl + '/' + x;
            });
        })(CustomerService = Sale.CustomerService || (Sale.CustomerService = {}));
    })(Sale = ERP.Sale || (ERP.Sale = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Sale;
    (function (Sale) {
        var NoteRow;
        (function (NoteRow) {
            NoteRow.idProperty = 'NoteId';
            NoteRow.nameProperty = 'EntityType';
            NoteRow.localTextPrefix = 'Sale.Note';
            var Fields;
            (function (Fields) {
            })(Fields = NoteRow.Fields || (NoteRow.Fields = {}));
            ['NoteId', 'EntityType', 'EntityId', 'Text', 'InsertUserId', 'InsertDate', 'InsertUserDisplayName'].forEach(function (x) { return Fields[x] = x; });
        })(NoteRow = Sale.NoteRow || (Sale.NoteRow = {}));
    })(Sale = ERP.Sale || (ERP.Sale = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Sale;
    (function (Sale) {
        var OrderDetailForm = (function (_super) {
            __extends(OrderDetailForm, _super);
            function OrderDetailForm() {
                _super.apply(this, arguments);
            }
            OrderDetailForm.formKey = 'Sale.OrderDetail';
            return OrderDetailForm;
        }(Serenity.PrefixedContext));
        Sale.OrderDetailForm = OrderDetailForm;
        [['ProductID', function () { return Serenity.LookupEditor; }], ['UnitPrice', function () { return Serenity.DecimalEditor; }], ['Quantity', function () { return Serenity.IntegerEditor; }], ['Discount', function () { return Serenity.DecimalEditor; }]].forEach(function (x) { return Object.defineProperty(OrderDetailForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Sale = ERP.Sale || (ERP.Sale = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Sale;
    (function (Sale) {
        var OrderDetailRow;
        (function (OrderDetailRow) {
            OrderDetailRow.idProperty = 'DetailID';
            OrderDetailRow.localTextPrefix = 'Sale.OrderDetail';
            var Fields;
            (function (Fields) {
            })(Fields = OrderDetailRow.Fields || (OrderDetailRow.Fields = {}));
            ['DetailID', 'OrderID', 'ProductID', 'UnitPrice', 'Quantity', 'Discount', 'OrderCustomerID', 'OrderEmployeeID', 'OrderDate', 'OrderShippedDate', 'OrderShipVia', 'OrderShipCity', 'OrderShipCountry', 'ProductName', 'ProductDiscontinued', 'ProductSupplierID', 'ProductQuantityPerUnit', 'ProductUnitPrice', 'LineTotal'].forEach(function (x) { return Fields[x] = x; });
        })(OrderDetailRow = Sale.OrderDetailRow || (Sale.OrderDetailRow = {}));
    })(Sale = ERP.Sale || (ERP.Sale = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Sale;
    (function (Sale) {
        var OrderDetailService;
        (function (OrderDetailService) {
            OrderDetailService.baseUrl = 'Sale/OrderDetail';
            var Methods;
            (function (Methods) {
            })(Methods = OrderDetailService.Methods || (OrderDetailService.Methods = {}));
            ['Retrieve', 'List'].forEach(function (x) {
                OrderDetailService[x] = function (r, s, o) { return Q.serviceRequest(OrderDetailService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = OrderDetailService.baseUrl + '/' + x;
            });
        })(OrderDetailService = Sale.OrderDetailService || (Sale.OrderDetailService = {}));
    })(Sale = ERP.Sale || (ERP.Sale = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Sale;
    (function (Sale) {
        var OrderForm = (function (_super) {
            __extends(OrderForm, _super);
            function OrderForm() {
                _super.apply(this, arguments);
            }
            OrderForm.formKey = 'Sale.Order';
            return OrderForm;
        }(Serenity.PrefixedContext));
        Sale.OrderForm = OrderForm;
        [['CustomerID', function () { return Sale.CustomerEditor; }], ['OrderDate', function () { return Serenity.DateEditor; }], ['RequiredDate', function () { return Serenity.DateEditor; }], ['EmployeeID', function () { return Serenity.LookupEditor; }], ['DetailList', function () { return Sale.OrderDetailsEditor; }], ['ShippedDate', function () { return Serenity.DateEditor; }], ['ShipVia', function () { return Serenity.LookupEditor; }], ['Freight', function () { return Serenity.DecimalEditor; }], ['ShipName', function () { return Serenity.StringEditor; }], ['ShipAddress', function () { return Serenity.StringEditor; }], ['ShipCity', function () { return Serenity.StringEditor; }], ['ShipRegion', function () { return Serenity.StringEditor; }], ['ShipPostalCode', function () { return Serenity.StringEditor; }], ['ShipCountry', function () { return Serenity.StringEditor; }]].forEach(function (x) { return Object.defineProperty(OrderForm.prototype, x[0], { get: function () { return this.w(x[0], x[1]()); }, enumerable: true, configurable: true }); });
    })(Sale = ERP.Sale || (ERP.Sale = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Sale;
    (function (Sale) {
        var OrderRow;
        (function (OrderRow) {
            OrderRow.idProperty = 'OrderID';
            OrderRow.nameProperty = 'CustomerID';
            OrderRow.localTextPrefix = 'Sale.Order';
            OrderRow.lookupKey = 'Sale.OrderShipCity';
            function getLookup() {
                return Q.getLookup('Sale.OrderShipCity');
            }
            OrderRow.getLookup = getLookup;
            var Fields;
            (function (Fields) {
            })(Fields = OrderRow.Fields || (OrderRow.Fields = {}));
            ['OrderID', 'CustomerID', 'EmployeeID', 'OrderDate', 'RequiredDate', 'ShippedDate', 'ShipVia', 'Freight', 'ShipName', 'ShipAddress', 'ShipCity', 'ShipRegion', 'ShipPostalCode', 'ShipCountry', 'CustomerCompanyName', 'CustomerContactName', 'CustomerContactTitle', 'CustomerCity', 'CustomerRegion', 'CustomerCountry', 'CustomerPhone', 'CustomerFax', 'EmployeeFullName', 'EmployeeGender', 'ShipViaCompanyName', 'ShipViaPhone', 'ShippingState', 'DetailList'].forEach(function (x) { return Fields[x] = x; });
        })(OrderRow = Sale.OrderRow || (Sale.OrderRow = {}));
    })(Sale = ERP.Sale || (ERP.Sale = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Sale;
    (function (Sale) {
        var OrderService;
        (function (OrderService) {
            OrderService.baseUrl = 'Sale/Order';
            var Methods;
            (function (Methods) {
            })(Methods = OrderService.Methods || (OrderService.Methods = {}));
            ['Create', 'Update', 'Delete', 'Retrieve', 'List'].forEach(function (x) {
                OrderService[x] = function (r, s, o) { return Q.serviceRequest(OrderService.baseUrl + '/' + x, r, s, o); };
                Methods[x] = OrderService.baseUrl + '/' + x;
            });
        })(OrderService = Sale.OrderService || (Sale.OrderService = {}));
    })(Sale = ERP.Sale || (ERP.Sale = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Sale;
    (function (Sale) {
        (function (OrderShippingState) {
            OrderShippingState[OrderShippingState["NotShipped"] = 0] = "NotShipped";
            OrderShippingState[OrderShippingState["Shipped"] = 1] = "Shipped";
        })(Sale.OrderShippingState || (Sale.OrderShippingState = {}));
        var OrderShippingState = Sale.OrderShippingState;
        Serenity.Decorators.registerEnum(OrderShippingState, 'Sale.OrderShippingState');
    })(Sale = ERP.Sale || (ERP.Sale = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Administration;
    (function (Administration) {
        var LanguageDialog = (function (_super) {
            __extends(LanguageDialog, _super);
            function LanguageDialog() {
                _super.apply(this, arguments);
                this.form = new Administration.LanguageForm(this.idPrefix);
            }
            LanguageDialog.prototype.getFormKey = function () { return Administration.LanguageForm.formKey; };
            LanguageDialog.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageDialog.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageDialog.prototype.getNameProperty = function () { return Administration.LanguageRow.nameProperty; };
            LanguageDialog.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageDialog);
            return LanguageDialog;
        }(Serenity.EntityDialog));
        Administration.LanguageDialog = LanguageDialog;
    })(Administration = ERP.Administration || (ERP.Administration = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Administration;
    (function (Administration) {
        var LanguageGrid = (function (_super) {
            __extends(LanguageGrid, _super);
            function LanguageGrid(container) {
                _super.call(this, container);
            }
            LanguageGrid.prototype.getColumnsKey = function () { return "Administration.Language"; };
            LanguageGrid.prototype.getDialogType = function () { return Administration.LanguageDialog; };
            LanguageGrid.prototype.getIdProperty = function () { return Administration.LanguageRow.idProperty; };
            LanguageGrid.prototype.getLocalTextPrefix = function () { return Administration.LanguageRow.localTextPrefix; };
            LanguageGrid.prototype.getService = function () { return Administration.LanguageService.baseUrl; };
            LanguageGrid.prototype.getDefaultSortBy = function () {
                return [Administration.LanguageRow.Fields.LanguageName];
            };
            LanguageGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], LanguageGrid);
            return LanguageGrid;
        }(Serenity.EntityGrid));
        Administration.LanguageGrid = LanguageGrid;
    })(Administration = ERP.Administration || (ERP.Administration = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Administration;
    (function (Administration) {
        var RoleDialog = (function (_super) {
            __extends(RoleDialog, _super);
            function RoleDialog() {
                _super.apply(this, arguments);
                this.form = new Administration.RoleForm(this.idPrefix);
            }
            RoleDialog.prototype.getFormKey = function () { return Administration.RoleForm.formKey; };
            RoleDialog.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleDialog.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleDialog.prototype.getNameProperty = function () { return Administration.RoleRow.nameProperty; };
            RoleDialog.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.RolePermissionDialog.EditButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'icon-lock-open text-green',
                    onClick: function () {
                        new Administration.RolePermissionDialog({
                            roleID: _this.entity.RoleId,
                            title: _this.entity.RoleName
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            RoleDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            RoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleDialog);
            return RoleDialog;
        }(Serenity.EntityDialog));
        Administration.RoleDialog = RoleDialog;
    })(Administration = ERP.Administration || (ERP.Administration = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Administration;
    (function (Administration) {
        var RoleGrid = (function (_super) {
            __extends(RoleGrid, _super);
            function RoleGrid(container) {
                _super.call(this, container);
            }
            RoleGrid.prototype.getColumnsKey = function () { return "Administration.Role"; };
            RoleGrid.prototype.getDialogType = function () { return Administration.RoleDialog; };
            RoleGrid.prototype.getIdProperty = function () { return Administration.RoleRow.idProperty; };
            RoleGrid.prototype.getLocalTextPrefix = function () { return Administration.RoleRow.localTextPrefix; };
            RoleGrid.prototype.getService = function () { return Administration.RoleService.baseUrl; };
            RoleGrid.prototype.getDefaultSortBy = function () {
                return [Administration.RoleRow.Fields.RoleName];
            };
            RoleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], RoleGrid);
            return RoleGrid;
        }(Serenity.EntityGrid));
        Administration.RoleGrid = RoleGrid;
    })(Administration = ERP.Administration || (ERP.Administration = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Administration;
    (function (Administration) {
        var RolePermissionDialog = (function (_super) {
            __extends(RolePermissionDialog, _super);
            function RolePermissionDialog(opt) {
                var _this = this;
                _super.call(this, opt);
                this.permissions = new Administration.PermissionCheckEditor(this.byId('Permissions'), {
                    showRevoke: false
                });
                Administration.RolePermissionService.List({
                    RoleID: this.options.roleID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.set_value(response.Entities.map(function (x) { return ({ PermissionKey: x }); }));
                });
            }
            RolePermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.RolePermissionService.Update({
                                RoleID: _this.options.roleID,
                                Permissions: _this.permissions.get_value().map(function (x) { return x.PermissionKey; }),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.RolePermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.RolePermissionDialog.DialogTitle'), this.options.title);
                return opt;
            };
            RolePermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            RolePermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], RolePermissionDialog);
            return RolePermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.RolePermissionDialog = RolePermissionDialog;
    })(Administration = ERP.Administration || (ERP.Administration = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Administration;
    (function (Administration) {
        var TranslationGrid = (function (_super) {
            __extends(TranslationGrid, _super);
            function TranslationGrid(container) {
                var _this = this;
                _super.call(this, container);
                this.element.on('keyup.' + this.uniqueName + ' change.' + this.uniqueName, 'input.custom-text', function (e) {
                    var value = Q.trimToNull($(e.target).val());
                    if (value === '') {
                        value = null;
                    }
                    _this.view.getItemById($(e.target).data('key')).CustomText = value;
                    _this.hasChanges = true;
                });
            }
            TranslationGrid.prototype.getIdProperty = function () { return "Key"; };
            TranslationGrid.prototype.getLocalTextPrefix = function () { return "Administration.Translation"; };
            TranslationGrid.prototype.getService = function () { return Administration.TranslationService.baseUrl; };
            TranslationGrid.prototype.onClick = function (e, row, cell) {
                var _this = this;
                _super.prototype.onClick.call(this, e, row, cell);
                if (e.isDefaultPrevented()) {
                    return;
                }
                var item = this.itemAt(row);
                var done;
                if ($(e.target).hasClass('source-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.SourceText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.SourceText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
                if ($(e.target).hasClass('target-text')) {
                    e.preventDefault();
                    done = function () {
                        item.CustomText = item.TargetText;
                        _this.view.updateItem(item.Key, item);
                        _this.hasChanges = true;
                    };
                    if (Q.isTrimmedEmpty(item.CustomText) ||
                        (Q.trimToEmpty(item.CustomText) === Q.trimToEmpty(item.TargetText))) {
                        done();
                        return;
                    }
                    Q.confirm(Q.text('Db.Administration.Translation.OverrideConfirmation'), done);
                    return;
                }
            };
            TranslationGrid.prototype.getColumns = function () {
                var columns = [];
                columns.push({ field: 'Key', width: 300, sortable: false });
                columns.push({
                    field: 'SourceText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) {
                        return Q.outerHtml($('<a/>')
                            .addClass('source-text')
                            .text(ctx.value || ''));
                    }
                });
                columns.push({
                    field: 'CustomText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<input/>')
                        .addClass('custom-text')
                        .attr('value', ctx.value)
                        .attr('type', 'text')
                        .attr('data-key', ctx.item.Key)); }
                });
                columns.push({
                    field: 'TargetText',
                    width: 300,
                    sortable: false,
                    format: function (ctx) { return Q.outerHtml($('<a/>')
                        .addClass('target-text')
                        .text(ctx.value || '')); }
                });
                return columns;
            };
            TranslationGrid.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                var opt = {
                    lookupKey: 'Administration.Language'
                };
                this.sourceLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.SourceLanguage') + ' ---'); },
                    options: opt
                });
                this.sourceLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
                this.targetLanguage = Serenity.Widget.create({
                    type: Serenity.LookupEditor,
                    element: function (el) { return el.appendTo(_this.toolbar.element).attr('placeholder', '--- ' +
                        Q.text('Db.Administration.Translation.TargetLanguage') + ' ---'); },
                    options: opt
                });
                this.targetLanguage.changeSelect2(function (e) {
                    if (_this.hasChanges) {
                        _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); });
                    }
                    else {
                        _this.refresh();
                    }
                });
            };
            TranslationGrid.prototype.saveChanges = function (language) {
                var _this = this;
                var translations = {};
                for (var _i = 0, _a = this.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    translations[item.Key] = item.CustomText;
                }
                return RSVP.resolve(Administration.TranslationService.Update({
                    TargetLanguageID: language,
                    Translations: translations
                })).then(function () {
                    _this.hasChanges = false;
                    language = Q.trimToNull(language) || 'invariant';
                    Q.notifySuccess('User translations in "' + language +
                        '" language are saved to "user.texts.' +
                        language + '.json" ' + 'file under "~/App_Data/texts/"', '');
                });
            };
            TranslationGrid.prototype.onViewSubmit = function () {
                var request = this.view.params;
                request.SourceLanguageID = this.sourceLanguage.value;
                this.targetLanguageKey = this.targetLanguage.value || '';
                request.TargetLanguageID = this.targetLanguageKey;
                this.hasChanges = false;
                return _super.prototype.onViewSubmit.call(this);
            };
            TranslationGrid.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                        onClick: function (e) { return _this.saveChanges(_this.targetLanguageKey).then(function () { return _this.refresh(); }); },
                        cssClass: 'apply-changes-button'
                    }];
            };
            TranslationGrid.prototype.createQuickSearchInput = function () {
                var _this = this;
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, searchText) {
                    _this.searchText = searchText;
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            TranslationGrid.prototype.onViewFilter = function (item) {
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!this.searchText) {
                    return true;
                }
                var sd = Select2.util.stripDiacritics;
                var searching = sd(this.searchText).toLowerCase();
                function match(str) {
                    if (!str)
                        return false;
                    return str.toLowerCase().indexOf(searching) >= 0;
                }
                return Q.isEmptyOrNull(searching) || match(item.Key) || match(item.SourceText) ||
                    match(item.TargetText) || match(item.CustomText);
            };
            TranslationGrid.prototype.usePager = function () {
                return false;
            };
            TranslationGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], TranslationGrid);
            return TranslationGrid;
        }(Serenity.EntityGrid));
        Administration.TranslationGrid = TranslationGrid;
    })(Administration = ERP.Administration || (ERP.Administration = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Administration;
    (function (Administration) {
        var UserDialog = (function (_super) {
            __extends(UserDialog, _super);
            function UserDialog() {
                var _this = this;
                _super.call(this);
                this.form = new Administration.UserForm(this.idPrefix);
                this.form.Password.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.Password.value.length < 7)
                        return "Password must be at least 7 characters!";
                });
                this.form.PasswordConfirm.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.Password.value != _this.form.PasswordConfirm.value)
                        return "The passwords entered doesn't match!";
                });
            }
            UserDialog.prototype.getFormKey = function () { return Administration.UserForm.formKey; };
            UserDialog.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserDialog.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserDialog.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserDialog.prototype.getNameProperty = function () { return Administration.UserRow.nameProperty; };
            UserDialog.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: Q.text('Site.UserDialog.EditRolesButton'),
                    cssClass: 'edit-roles-button',
                    icon: 'icon-people text-blue',
                    onClick: function () {
                        new Administration.UserRoleDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                buttons.push({
                    title: Q.text('Site.UserDialog.EditPermissionsButton'),
                    cssClass: 'edit-permissions-button',
                    icon: 'icon-lock-open text-green',
                    onClick: function () {
                        new Administration.UserPermissionDialog({
                            userID: _this.entity.UserId,
                            username: _this.entity.Username
                        }).dialogOpen();
                    }
                });
                return buttons;
            };
            UserDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                this.toolbar.findButton('edit-roles-button').toggleClass('disabled', this.isNewOrDeleted());
                this.toolbar.findButton("edit-permissions-button").toggleClass("disabled", this.isNewOrDeleted());
            };
            UserDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // these fields are only required in new record mode
                this.form.Password.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
                this.form.PasswordConfirm.element.toggleClass('required', this.isNew())
                    .closest('.field').find('sup').toggle(this.isNew());
            };
            UserDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserDialog);
            return UserDialog;
        }(Serenity.EntityDialog));
        Administration.UserDialog = UserDialog;
    })(Administration = ERP.Administration || (ERP.Administration = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Administration;
    (function (Administration) {
        var UserGrid = (function (_super) {
            __extends(UserGrid, _super);
            function UserGrid(container) {
                _super.call(this, container);
            }
            UserGrid.prototype.getColumnsKey = function () { return "Administration.User"; };
            UserGrid.prototype.getDialogType = function () { return Administration.UserDialog; };
            UserGrid.prototype.getIdProperty = function () { return Administration.UserRow.idProperty; };
            UserGrid.prototype.getIsActiveProperty = function () { return Administration.UserRow.isActiveProperty; };
            UserGrid.prototype.getLocalTextPrefix = function () { return Administration.UserRow.localTextPrefix; };
            UserGrid.prototype.getService = function () { return Administration.UserService.baseUrl; };
            UserGrid.prototype.getDefaultSortBy = function () {
                return [Administration.UserRow.Fields.Username];
            };
            UserGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UserGrid);
            return UserGrid;
        }(Serenity.EntityGrid));
        Administration.UserGrid = UserGrid;
    })(Administration = ERP.Administration || (ERP.Administration = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Authorization;
    (function (Authorization) {
        Object.defineProperty(Authorization, 'userDefinition', {
            get: function () {
                return Q.getRemoteData('UserData');
            }
        });
        function hasPermission(permissionKey) {
            var ud = Authorization.userDefinition;
            return ud.Username === 'admin' || !!ud.Permissions[permissionKey];
        }
        Authorization.hasPermission = hasPermission;
    })(Authorization = ERP.Authorization || (ERP.Authorization = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Administration;
    (function (Administration) {
        var PermissionCheckEditor = (function (_super) {
            __extends(PermissionCheckEditor, _super);
            function PermissionCheckEditor(container, opt) {
                var _this = this;
                _super.call(this, container, opt);
                this.rolePermissions = {};
                var titleByKey = {};
                var permissionKeys = this.getSortedGroupAndPermissionKeys(titleByKey);
                var items = permissionKeys.map(function (key) { return {
                    Key: key,
                    ParentKey: _this.getParentKey(key),
                    Title: titleByKey[key],
                    GrantRevoke: null,
                    IsGroup: key.charAt(key.length - 1) === ':'
                }; });
                this.byParentKey = Q.toGrouping(items, function (x) { return x.ParentKey; });
                this.setItems(items);
            }
            PermissionCheckEditor.prototype.getIdProperty = function () { return "Key"; };
            PermissionCheckEditor.prototype.getItemGrantRevokeClass = function (item, grant) {
                if (!item.IsGroup) {
                    return ((item.GrantRevoke === grant) ? ' checked' : '');
                }
                var desc = this.getDescendants(item, true);
                var granted = desc.filter(function (x) { return x.GrantRevoke === grant; });
                if (!granted.length) {
                    return '';
                }
                if (desc.length === granted.length) {
                    return 'checked';
                }
                return 'checked partial';
            };
            PermissionCheckEditor.prototype.getItemEffectiveClass = function (item) {
                var _this = this;
                if (item.IsGroup) {
                    var desc = this.getDescendants(item, true);
                    var grantCount = Q.count(desc, function (x) { return x.GrantRevoke === true ||
                        (x.GrantRevoke == null && _this.rolePermissions[x.Key]); });
                    if (grantCount === desc.length || desc.length === 0) {
                        return 'allow';
                    }
                    if (grantCount === 0) {
                        return 'deny';
                    }
                    return 'partial';
                }
                var granted = item.GrantRevoke === true ||
                    (item.GrantRevoke == null && this.rolePermissions[item.Key]);
                return (granted ? ' allow' : ' deny');
            };
            PermissionCheckEditor.prototype.getColumns = function () {
                var _this = this;
                var columns = [{
                        name: Q.text('Site.UserPermissionDialog.Permission'),
                        field: 'Title',
                        format: Serenity.SlickFormatting.treeToggle(function () { return _this.view; }, function (x) { return x.Key; }, function (ctx) {
                            var item = ctx.item;
                            var klass = _this.getItemEffectiveClass(item);
                            return '<span class="effective-permission ' + klass + '">' + Q.htmlEncode(ctx.value) + '</span>';
                        }),
                        width: 495,
                        sortable: false
                    }, {
                        name: Q.text('Site.UserPermissionDialog.Grant'), field: 'Grant',
                        format: function (ctx) {
                            var item1 = ctx.item;
                            var klass1 = _this.getItemGrantRevokeClass(item1, true);
                            return "<span class='check-box grant no-float " + klass1 + "'></span>";
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    }];
                if (this.options.showRevoke) {
                    columns.push({
                        name: Q.text('Site.UserPermissionDialog.Revoke'), field: 'Revoke',
                        format: function (ctx) {
                            var item2 = ctx.item;
                            var klass2 = _this.getItemGrantRevokeClass(item2, false);
                            return '<span class="check-box revoke no-float ' + klass2 + '"></span>';
                        },
                        width: 65,
                        sortable: false,
                        headerCssClass: 'align-center',
                        cssClass: 'align-center'
                    });
                }
                return columns;
            };
            PermissionCheckEditor.prototype.setItems = function (items) {
                Serenity.SlickTreeHelper.setIndents(items, function (x) { return x.Key; }, function (x) { return x.ParentKey; }, false);
                this.view.setItems(items, true);
            };
            PermissionCheckEditor.prototype.onViewSubmit = function () {
                return false;
            };
            PermissionCheckEditor.prototype.onViewFilter = function (item) {
                var _this = this;
                if (!_super.prototype.onViewFilter.call(this, item)) {
                    return false;
                }
                if (!Serenity.SlickTreeHelper.filterById(item, this.view, function (x) { return x.ParentKey; }))
                    return false;
                if (this.searchText) {
                    return this.matchContains(item) || item.IsGroup && Q.any(this.getDescendants(item, false), function (x) { return _this.matchContains(x); });
                }
                return true;
            };
            PermissionCheckEditor.prototype.matchContains = function (item) {
                return Select2.util.stripDiacritics(item.Title || '').toLowerCase().indexOf(this.searchText) >= 0;
            };
            PermissionCheckEditor.prototype.getDescendants = function (item, excludeGroups) {
                var result = [];
                var stack = [item];
                while (stack.length > 0) {
                    var i = stack.pop();
                    var children = this.byParentKey[i.Key];
                    if (!children)
                        continue;
                    for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                        var child = children_1[_i];
                        if (!excludeGroups || !child.IsGroup) {
                            result.push(child);
                        }
                        stack.push(child);
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.onClick = function (e, row, cell) {
                _super.prototype.onClick.call(this, e, row, cell);
                if (!e.isDefaultPrevented()) {
                    Serenity.SlickTreeHelper.toggleClick(e, row, cell, this.view, function (x) { return x.Key; });
                }
                if (e.isDefaultPrevented()) {
                    return;
                }
                var target = $(e.target);
                var grant = target.hasClass('grant');
                if (grant || target.hasClass('revoke')) {
                    e.preventDefault();
                    var item = this.itemAt(row);
                    var checkedOrPartial = target.hasClass('checked') || target.hasClass('partial');
                    if (checkedOrPartial) {
                        grant = null;
                    }
                    else {
                        grant = grant !== checkedOrPartial;
                    }
                    if (item.IsGroup) {
                        for (var _i = 0, _a = this.getDescendants(item, true); _i < _a.length; _i++) {
                            var d = _a[_i];
                            d.GrantRevoke = grant;
                        }
                    }
                    else
                        item.GrantRevoke = grant;
                    this.slickGrid.invalidate();
                }
            };
            PermissionCheckEditor.prototype.getParentKey = function (key) {
                if (key.charAt(key.length - 1) === ':') {
                    key = key.substr(0, key.length - 1);
                }
                var idx = key.lastIndexOf(':');
                if (idx >= 0) {
                    return key.substr(0, idx + 1);
                }
                return null;
            };
            PermissionCheckEditor.prototype.getButtons = function () {
                return [];
            };
            PermissionCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(Q.trimToNull(text) || '').toLowerCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            PermissionCheckEditor.prototype.getSortedGroupAndPermissionKeys = function (titleByKey) {
                var keys = Q.getRemoteData('Administration.PermissionKeys').Entities;
                var titleWithGroup = {};
                for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                    var k = keys_1[_i];
                    var s = k;
                    if (!s) {
                        continue;
                    }
                    if (s.charAt(s.length - 1) == ':') {
                        s = s.substr(0, s.length - 1);
                        if (s.length === 0) {
                            continue;
                        }
                    }
                    if (titleByKey[s]) {
                        continue;
                    }
                    titleByKey[s] = Q.coalesce(Q.tryGetText('Permission.' + s), s);
                    var parts = s.split(':');
                    var group = '';
                    var groupTitle = '';
                    for (var i = 0; i < parts.length - 1; i++) {
                        group = group + parts[i] + ':';
                        var txt = Q.tryGetText('Permission.' + group);
                        if (txt == null) {
                            txt = parts[i];
                        }
                        titleByKey[group] = txt;
                        groupTitle = groupTitle + titleByKey[group] + ':';
                        titleWithGroup[group] = groupTitle;
                    }
                    titleWithGroup[s] = groupTitle + titleByKey[s];
                }
                keys = Object.keys(titleByKey);
                keys = keys.sort(function (x, y) { return Q.turkishLocaleCompare(titleWithGroup[x], titleWithGroup[y]); });
                return keys;
            };
            PermissionCheckEditor.prototype.get_value = function () {
                var result = [];
                for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (item.GrantRevoke != null && item.Key.charAt(item.Key.length - 1) != ':') {
                        result.push({ PermissionKey: item.Key, Granted: item.GrantRevoke });
                    }
                }
                return result;
            };
            PermissionCheckEditor.prototype.set_value = function (value) {
                for (var _i = 0, _a = this.view.getItems(); _i < _a.length; _i++) {
                    var item = _a[_i];
                    item.GrantRevoke = null;
                }
                if (value != null) {
                    for (var _b = 0, value_1 = value; _b < value_1.length; _b++) {
                        var row = value_1[_b];
                        var r = this.view.getItemById(row.PermissionKey);
                        if (r) {
                            r.GrantRevoke = Q.coalesce(row.Granted, true);
                        }
                    }
                }
                this.setItems(this.getItems());
            };
            PermissionCheckEditor.prototype.get_rolePermissions = function () {
                return Object.keys(this.rolePermissions);
            };
            PermissionCheckEditor.prototype.set_rolePermissions = function (value) {
                this.rolePermissions = {};
                if (value) {
                    for (var _i = 0, value_2 = value; _i < value_2.length; _i++) {
                        var k = value_2[_i];
                        this.rolePermissions[k] = true;
                    }
                }
                this.setItems(this.getItems());
            };
            PermissionCheckEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue])
            ], PermissionCheckEditor);
            return PermissionCheckEditor;
        }(Serenity.DataGrid));
        Administration.PermissionCheckEditor = PermissionCheckEditor;
    })(Administration = ERP.Administration || (ERP.Administration = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Administration;
    (function (Administration) {
        var UserPermissionDialog = (function (_super) {
            __extends(UserPermissionDialog, _super);
            function UserPermissionDialog(opt) {
                var _this = this;
                _super.call(this, opt);
                this.permissions = new Administration.PermissionCheckEditor(this.byId('Permissions'), {
                    showRevoke: true
                });
                Administration.UserPermissionService.List({
                    UserID: this.options.userID,
                    Module: null,
                    Submodule: null
                }, function (response) {
                    _this.permissions.set_value(response.Entities);
                });
                Administration.UserPermissionService.ListRolePermissions({
                    UserID: this.options.userID,
                    Module: null,
                    Submodule: null,
                }, function (response) {
                    _this.permissions.set_rolePermissions(response.Entities);
                });
            }
            UserPermissionDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [
                    {
                        text: Q.text('Dialogs.OkButton'),
                        click: function (e) {
                            Administration.UserPermissionService.Update({
                                UserID: _this.options.userID,
                                Permissions: _this.permissions.get_value(),
                                Module: null,
                                Submodule: null
                            }, function (response) {
                                _this.dialogClose();
                                window.setTimeout(function () { return Q.notifySuccess(Q.text('Site.UserPermissionDialog.SaveSuccess')); }, 0);
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserPermissionDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserPermissionDialog.prototype.getTemplate = function () {
                return '<div id="~_Permissions"></div>';
            };
            UserPermissionDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserPermissionDialog);
            return UserPermissionDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserPermissionDialog = UserPermissionDialog;
    })(Administration = ERP.Administration || (ERP.Administration = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Administration;
    (function (Administration) {
        var RoleCheckEditor = (function (_super) {
            __extends(RoleCheckEditor, _super);
            function RoleCheckEditor(div) {
                _super.call(this, div);
            }
            RoleCheckEditor.prototype.createToolbarExtensions = function () {
                var _this = this;
                _super.prototype.createToolbarExtensions.call(this);
                Serenity.GridUtils.addQuickSearchInputCustom(this.toolbar.element, function (field, text) {
                    _this.searchText = Select2.util.stripDiacritics(text || '').toUpperCase();
                    _this.view.setItems(_this.view.getItems(), true);
                });
            };
            RoleCheckEditor.prototype.getButtons = function () {
                return [];
            };
            RoleCheckEditor.prototype.getTreeItems = function () {
                return Administration.RoleRow.getLookup().items.map(function (role) { return {
                    id: role.RoleId.toString(),
                    text: role.RoleName
                }; });
            };
            RoleCheckEditor.prototype.onViewFilter = function (item) {
                return _super.prototype.onViewFilter.call(this, item) &&
                    (Q.isEmptyOrNull(this.searchText) ||
                        Select2.util.stripDiacritics(item.text || '')
                            .toUpperCase().indexOf(this.searchText) >= 0);
            };
            RoleCheckEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], RoleCheckEditor);
            return RoleCheckEditor;
        }(Serenity.CheckTreeEditor));
        Administration.RoleCheckEditor = RoleCheckEditor;
    })(Administration = ERP.Administration || (ERP.Administration = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Administration;
    (function (Administration) {
        var UserRoleDialog = (function (_super) {
            __extends(UserRoleDialog, _super);
            function UserRoleDialog(opt) {
                var _this = this;
                _super.call(this, opt);
                this.permissions = new Administration.RoleCheckEditor(this.byId('Roles'));
                Administration.UserRoleService.List({
                    UserID: this.options.userID
                }, function (response) {
                    _this.permissions.value = response.Entities.map(function (x) { return x.toString(); });
                });
            }
            UserRoleDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            Q.serviceRequest('Administration/UserRole/Update', {
                                UserID: _this.options.userID,
                                Roles: _this.permissions.value.map(function (x) { return parseInt(x, 10); })
                            }, function (response) {
                                _this.dialogClose();
                                Q.notifySuccess(Q.text('Site.UserRoleDialog.SaveSuccess'));
                            });
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }];
                opt.title = Q.format(Q.text('Site.UserRoleDialog.DialogTitle'), this.options.username);
                return opt;
            };
            UserRoleDialog.prototype.getTemplate = function () {
                return "<div id='~_Roles'></div>";
            };
            UserRoleDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], UserRoleDialog);
            return UserRoleDialog;
        }(Serenity.TemplatedDialog));
        Administration.UserRoleDialog = UserRoleDialog;
    })(Administration = ERP.Administration || (ERP.Administration = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var BrandDialog = (function (_super) {
            __extends(BrandDialog, _super);
            function BrandDialog() {
                _super.apply(this, arguments);
                this.form = new Basic.BrandForm(this.idPrefix);
            }
            BrandDialog.prototype.getFormKey = function () { return Basic.BrandForm.formKey; };
            BrandDialog.prototype.getIdProperty = function () { return Basic.BrandRow.idProperty; };
            BrandDialog.prototype.getLocalTextPrefix = function () { return Basic.BrandRow.localTextPrefix; };
            BrandDialog.prototype.getNameProperty = function () { return Basic.BrandRow.nameProperty; };
            BrandDialog.prototype.getService = function () { return Basic.BrandService.baseUrl; };
            BrandDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], BrandDialog);
            return BrandDialog;
        }(Serenity.EntityDialog));
        Basic.BrandDialog = BrandDialog;
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var BrandGrid = (function (_super) {
            __extends(BrandGrid, _super);
            function BrandGrid(container) {
                _super.call(this, container);
            }
            BrandGrid.prototype.getColumnsKey = function () { return 'Basic.Brand'; };
            BrandGrid.prototype.getDialogType = function () { return Basic.BrandDialog; };
            BrandGrid.prototype.getIdProperty = function () { return Basic.BrandRow.idProperty; };
            BrandGrid.prototype.getLocalTextPrefix = function () { return Basic.BrandRow.localTextPrefix; };
            BrandGrid.prototype.getService = function () { return Basic.BrandService.baseUrl; };
            BrandGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], BrandGrid);
            return BrandGrid;
        }(Serenity.EntityGrid));
        Basic.BrandGrid = BrandGrid;
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var CategoryDialog = (function (_super) {
            __extends(CategoryDialog, _super);
            function CategoryDialog() {
                _super.apply(this, arguments);
                this.form = new Basic.CategoryForm(this.idPrefix);
            }
            CategoryDialog.prototype.getFormKey = function () { return Basic.CategoryForm.formKey; };
            CategoryDialog.prototype.getIdProperty = function () { return Basic.CategoryRow.idProperty; };
            CategoryDialog.prototype.getLocalTextPrefix = function () { return Basic.CategoryRow.localTextPrefix; };
            CategoryDialog.prototype.getNameProperty = function () { return Basic.CategoryRow.nameProperty; };
            CategoryDialog.prototype.getService = function () { return Basic.CategoryService.baseUrl; };
            CategoryDialog.prototype.getLanguages = function () {
                return ERP.LanguageList.getValue();
            };
            CategoryDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoryDialog);
            return CategoryDialog;
        }(Serenity.EntityDialog));
        Basic.CategoryDialog = CategoryDialog;
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var CategoryGrid = (function (_super) {
            __extends(CategoryGrid, _super);
            function CategoryGrid(container) {
                _super.call(this, container);
            }
            CategoryGrid.prototype.getColumnsKey = function () { return "Basic.Category"; };
            CategoryGrid.prototype.getDialogType = function () { return Basic.CategoryDialog; };
            CategoryGrid.prototype.getIdProperty = function () { return Basic.CategoryRow.idProperty; };
            CategoryGrid.prototype.getLocalTextPrefix = function () { return Basic.CategoryRow.localTextPrefix; };
            CategoryGrid.prototype.getService = function () { return Basic.CategoryService.baseUrl; };
            CategoryGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CategoryGrid);
            return CategoryGrid;
        }(Serenity.EntityGrid));
        Basic.CategoryGrid = CategoryGrid;
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var ColorGroupDialog = (function (_super) {
            __extends(ColorGroupDialog, _super);
            function ColorGroupDialog() {
                _super.apply(this, arguments);
                this.form = new Basic.ColorGroupForm(this.idPrefix);
            }
            ColorGroupDialog.prototype.getFormKey = function () { return Basic.ColorGroupForm.formKey; };
            ColorGroupDialog.prototype.getIdProperty = function () { return Basic.ColorGroupRow.idProperty; };
            ColorGroupDialog.prototype.getLocalTextPrefix = function () { return Basic.ColorGroupRow.localTextPrefix; };
            ColorGroupDialog.prototype.getNameProperty = function () { return Basic.ColorGroupRow.nameProperty; };
            ColorGroupDialog.prototype.getService = function () { return Basic.ColorGroupService.baseUrl; };
            ColorGroupDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ColorGroupDialog);
            return ColorGroupDialog;
        }(Serenity.EntityDialog));
        Basic.ColorGroupDialog = ColorGroupDialog;
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var ColorGroupGrid = (function (_super) {
            __extends(ColorGroupGrid, _super);
            function ColorGroupGrid(container) {
                _super.call(this, container);
            }
            ColorGroupGrid.prototype.getColumnsKey = function () { return 'Basic.ColorGroup'; };
            ColorGroupGrid.prototype.getDialogType = function () { return Basic.ColorGroupDialog; };
            ColorGroupGrid.prototype.getIdProperty = function () { return Basic.ColorGroupRow.idProperty; };
            ColorGroupGrid.prototype.getLocalTextPrefix = function () { return Basic.ColorGroupRow.localTextPrefix; };
            ColorGroupGrid.prototype.getService = function () { return Basic.ColorGroupService.baseUrl; };
            ColorGroupGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ColorGroupGrid);
            return ColorGroupGrid;
        }(Serenity.EntityGrid));
        Basic.ColorGroupGrid = ColorGroupGrid;
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var EmployeeFormatter = (function () {
            function EmployeeFormatter() {
            }
            EmployeeFormatter.prototype.format = function (ctx) {
                var text = Q.htmlEncode(ctx.value);
                if (!this.genderProperty) {
                    return text;
                }
                var gender = ctx.item[this.genderProperty];
                return "<span class='" + ((gender === Basic.Gender.Female) ?
                    'employee-symbol female' : 'employee-symbol male') +
                    "'>" + text + '</span>';
            };
            EmployeeFormatter.prototype.initializeColumn = function (column) {
                column.referencedFields = column.referencedFields || [];
                if (this.genderProperty)
                    column.referencedFields.push(this.genderProperty);
            };
            __decorate([
                Serenity.Decorators.option()
            ], EmployeeFormatter.prototype, "genderProperty", void 0);
            EmployeeFormatter = __decorate([
                Serenity.Decorators.registerFormatter([Serenity.ISlickFormatter, Serenity.IInitializeColumn])
            ], EmployeeFormatter);
            return EmployeeFormatter;
        }());
        Basic.EmployeeFormatter = EmployeeFormatter;
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var EmployeeListFormatter = (function () {
            function EmployeeListFormatter() {
            }
            EmployeeListFormatter.prototype.format = function (ctx) {
                var idList = ctx.value;
                if (!idList || !idList.length)
                    return "";
                var byId = ERP.Basic.EmployeeRow.getLookup().itemById;
                var z;
                return idList.map(function (x) { return ((z = byId[x]) ? z.FullName : x); }).join(", ");
            };
            EmployeeListFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], EmployeeListFormatter);
            return EmployeeListFormatter;
        }());
        Basic.EmployeeListFormatter = EmployeeListFormatter;
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
/// <reference path="../../../Sale/Order/OrderGrid.ts" />
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var InlineImageInGrid = (function (_super) {
            __extends(InlineImageInGrid, _super);
            function InlineImageInGrid(container) {
                _super.call(this, container);
            }
            InlineImageInGrid.prototype.getColumnsKey = function () { return "Basic.InlineImageInGrid"; };
            InlineImageInGrid.prototype.getDialogType = function () { return Basic.ProductDialog; };
            InlineImageInGrid.prototype.getIdProperty = function () { return Basic.ProductRow.idProperty; };
            InlineImageInGrid.prototype.getLocalTextPrefix = function () { return Basic.ProductRow.localTextPrefix; };
            InlineImageInGrid.prototype.getService = function () { return Basic.ProductService.baseUrl; };
            InlineImageInGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.rowHeight = 150;
                return opt;
            };
            InlineImageInGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], InlineImageInGrid);
            return InlineImageInGrid;
        }(Serenity.EntityGrid));
        Basic.InlineImageInGrid = InlineImageInGrid;
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var MaterialDialog = (function (_super) {
            __extends(MaterialDialog, _super);
            function MaterialDialog() {
                _super.apply(this, arguments);
                this.form = new Basic.MaterialForm(this.idPrefix);
            }
            MaterialDialog.prototype.getFormKey = function () { return Basic.MaterialForm.formKey; };
            MaterialDialog.prototype.getIdProperty = function () { return Basic.MaterialRow.idProperty; };
            MaterialDialog.prototype.getLocalTextPrefix = function () { return Basic.MaterialRow.localTextPrefix; };
            MaterialDialog.prototype.getNameProperty = function () { return Basic.MaterialRow.nameProperty; };
            MaterialDialog.prototype.getService = function () { return Basic.MaterialService.baseUrl; };
            MaterialDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], MaterialDialog);
            return MaterialDialog;
        }(Serenity.EntityDialog));
        Basic.MaterialDialog = MaterialDialog;
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var MaterialGrid = (function (_super) {
            __extends(MaterialGrid, _super);
            function MaterialGrid(container) {
                _super.call(this, container);
            }
            MaterialGrid.prototype.getColumnsKey = function () { return 'Basic.Material'; };
            MaterialGrid.prototype.getDialogType = function () { return Basic.MaterialDialog; };
            MaterialGrid.prototype.getIdProperty = function () { return Basic.MaterialRow.idProperty; };
            MaterialGrid.prototype.getLocalTextPrefix = function () { return Basic.MaterialRow.localTextPrefix; };
            MaterialGrid.prototype.getService = function () { return Basic.MaterialService.baseUrl; };
            MaterialGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], MaterialGrid);
            return MaterialGrid;
        }(Serenity.EntityGrid));
        Basic.MaterialGrid = MaterialGrid;
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var InlineImageFormatter = (function () {
            function InlineImageFormatter() {
            }
            InlineImageFormatter.prototype.format = function (ctx) {
                var file = (this.fileProperty ? ctx.item[this.fileProperty] : ctx.value);
                if (!file || !file.length)
                    return "";
                var href = Q.resolveUrl("~/upload/" + file);
                if (this.thumb) {
                    var parts = file.split('.');
                    file = parts.slice(0, parts.length - 1).join('.') + '_t.jpg';
                }
                var src = Q.resolveUrl('~/upload/' + file);
                return ("<a class=\"inline-image\" target='_blank' href=\"" + href + "\">") +
                    ("<img src=\"" + src + "\" style='max-height: 145px; max-width: 100%;' /></a>");
            };
            InlineImageFormatter.prototype.initializeColumn = function (column) {
                if (this.fileProperty) {
                    column.referencedFields = column.referencedFields || [];
                    column.referencedFields.push(this.fileProperty);
                }
            };
            __decorate([
                Serenity.Decorators.option()
            ], InlineImageFormatter.prototype, "fileProperty", void 0);
            __decorate([
                Serenity.Decorators.option()
            ], InlineImageFormatter.prototype, "thumb", void 0);
            InlineImageFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], InlineImageFormatter);
            return InlineImageFormatter;
        }());
        Basic.InlineImageFormatter = InlineImageFormatter;
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var ProductColorListFormatter = (function () {
            function ProductColorListFormatter() {
            }
            ProductColorListFormatter.prototype.format = function (ctx) {
                var idList = ctx.value;
                if (!idList || !idList.length)
                    return "";
                var byId = Basic.ProductColorRow.getLookup().itemById;
                var z;
                return idList.map(function (x) { return ((z = byId[x]) ? z.ColorName : x); }).join(", ");
            };
            ProductColorListFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], ProductColorListFormatter);
            return ProductColorListFormatter;
        }());
        Basic.ProductColorListFormatter = ProductColorListFormatter;
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var ProductDialog = (function (_super) {
            __extends(ProductDialog, _super);
            function ProductDialog() {
                _super.apply(this, arguments);
                this.form = new Basic.ProductForm(this.idPrefix);
            }
            ProductDialog.prototype.getFormKey = function () { return Basic.ProductForm.formKey; };
            ProductDialog.prototype.getIdProperty = function () { return Basic.ProductRow.idProperty; };
            ProductDialog.prototype.getLocalTextPrefix = function () { return Basic.ProductRow.localTextPrefix; };
            ProductDialog.prototype.getNameProperty = function () { return Basic.ProductRow.nameProperty; };
            ProductDialog.prototype.getService = function () { return Basic.ProductService.baseUrl; };
            ProductDialog.prototype.getLanguages = function () {
                return ERP.LanguageList.getValue();
            };
            ProductDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.maximizable()
            ], ProductDialog);
            return ProductDialog;
        }(Serenity.EntityDialog));
        Basic.ProductDialog = ProductDialog;
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var ProductGrid = (function (_super) {
            __extends(ProductGrid, _super);
            function ProductGrid(container) {
                var _this = this;
                _super.call(this, container);
                this.pendingChanges = {};
                this.slickContainer.on('change', '.edit:input', function (e) { return _this.inputsChange(e); });
            }
            ProductGrid.prototype.getColumnsKey = function () { return "Basic.Product"; };
            ProductGrid.prototype.getDialogType = function () { return Basic.ProductDialog; };
            ProductGrid.prototype.getIdProperty = function () { return Basic.ProductRow.idProperty; };
            ProductGrid.prototype.getLocalTextPrefix = function () { return Basic.ProductRow.localTextPrefix; };
            ProductGrid.prototype.getService = function () { return Basic.ProductService.baseUrl; };
            ProductGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(ERP.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: Basic.ProductService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(ERP.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    reportTitle: 'Product List',
                    columnTitles: {
                        'Discontinued': 'Dis.',
                    },
                    tableOptions: {
                        columnStyles: {
                            ProductID: {
                                columnWidth: 25,
                                halign: 'right'
                            },
                            Discountinued: {
                                columnWidth: 25
                            }
                        }
                    }
                }));
                buttons.push({
                    title: Q.text('Db.Administration.Translation.SaveChangesButton'),
                    cssClass: 'apply-changes-button disabled',
                    onClick: function (e) { return _this.saveClick(); },
                    separator: true
                });
                return buttons;
            };
            ProductGrid.prototype.onViewProcessData = function (response) {
                this.pendingChanges = {};
                this.setSaveButtonState();
                return _super.prototype.onViewProcessData.call(this, response);
            };
            // PLEASE NOTE! Inline editing in grids is not something Serenity supports nor recommends.
            // SlickGrid has some set of limitations, UI is very hard to use on some devices like mobile, 
            // custom widgets and validations are not possible, and as a bonus the code can become a mess.
            // 
            // This was just a sample how-to after much requests, and is not supported. 
            // This is all we can offer, please don't ask us to Guide you...
            /**
             * It would be nice if we could use autonumeric, Serenity editors etc. here, to control input validation,
             * but it's not supported by SlickGrid as we are only allowed to return a string, and should attach
             * no event handlers to rendered cell contents
             */
            ProductGrid.prototype.numericInputFormatter = function (ctx) {
                var klass = 'edit numeric';
                var item = ctx.item;
                var pending = this.pendingChanges[item.ProductID];
                if (pending && pending[ctx.column.field] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, ctx.column.field);
                return "<input type='text' class='" + klass +
                    "' data-field='" + ctx.column.field +
                    "' value='" + Q.formatNumber(value, '0.##') + "'/>";
            };
            ProductGrid.prototype.stringInputFormatter = function (ctx) {
                var klass = 'edit string';
                var item = ctx.item;
                var pending = this.pendingChanges[item.ProductID];
                var column = ctx.column;
                if (pending && pending[column.field] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, column.field);
                return "<input type='text' class='" + klass +
                    "' data-field='" + column.field +
                    "' value='" + Q.htmlEncode(value) +
                    "' maxlength='" + column.sourceItem.maxLength + "'/>";
            };
            /**
             * Sorry but you cannot use LookupEditor, e.g. Select2 here, only possible is a SELECT element
             */
            ProductGrid.prototype.selectFormatter = function (ctx, idField, lookup) {
                var fld = Basic.ProductRow.Fields;
                var klass = 'edit';
                var item = ctx.item;
                var pending = this.pendingChanges[item.ProductID];
                var column = ctx.column;
                if (pending && pending[idField] !== undefined) {
                    klass += ' dirty';
                }
                var value = this.getEffectiveValue(item, idField);
                var markup = "<select class='" + klass +
                    "' data-field='" + idField +
                    "' style='width: 100%; max-width: 100%'>";
                for (var _i = 0, _a = lookup.items; _i < _a.length; _i++) {
                    var c = _a[_i];
                    var id = c[lookup.idField];
                    markup += "<option value='" + id + "'";
                    if (id == value) {
                        markup += " selected";
                    }
                    markup += ">" + Q.htmlEncode(c[lookup.textField]) + "</option>";
                }
                return markup + "</select>";
            };
            ProductGrid.prototype.getEffectiveValue = function (item, field) {
                var pending = this.pendingChanges[item.ProductID];
                if (pending && pending[field] !== undefined) {
                    return pending[field];
                }
                return item[field];
            };
            ProductGrid.prototype.getColumns = function () {
                var _this = this;
                var columns = _super.prototype.getColumns.call(this);
                var num = function (ctx) { return _this.numericInputFormatter(ctx); };
                var str = function (ctx) { return _this.stringInputFormatter(ctx); };
                var fld = Basic.ProductRow.Fields;
                Q.first(columns, function (x) { return x.field === 'QuantityPerUnit'; }).format = str;
                var category = Q.first(columns, function (x) { return x.field === fld.CategoryName; });
                category.referencedFields = [fld.CategoryID];
                category.format = function (ctx) { return _this.selectFormatter(ctx, fld.CategoryID, Basic.CategoryRow.getLookup()); };
                var supplier = Q.first(columns, function (x) { return x.field === fld.SupplierCompanyName; });
                supplier.referencedFields = [fld.SupplierID];
                supplier.format = function (ctx) { return _this.selectFormatter(ctx, fld.SupplierID, ERP.Purchase.SupplierRow.getLookup()); };
                Q.first(columns, function (x) { return x.field === fld.UnitPrice; }).format = num;
                Q.first(columns, function (x) { return x.field === fld.UnitsInStock; }).format = num;
                Q.first(columns, function (x) { return x.field === fld.UnitsOnOrder; }).format = num;
                Q.first(columns, function (x) { return x.field === fld.ReorderLevel; }).format = num;
                return columns;
            };
            ProductGrid.prototype.inputsChange = function (e) {
                var cell = this.slickGrid.getCellFromEvent(e);
                var item = this.itemAt(cell.row);
                var input = $(e.target);
                var field = input.data('field');
                var text = Q.coalesce(Q.trimToNull(input.val()), '0');
                var pending = this.pendingChanges[item.ProductID];
                var effective = this.getEffectiveValue(item, field);
                var oldText;
                if (input.hasClass("numeric"))
                    oldText = Q.formatNumber(effective, '0.##');
                else
                    oldText = effective;
                var value;
                if (field === 'UnitPrice') {
                    value = Q.parseDecimal(text);
                    if (value == null || isNaN(value)) {
                        Q.notifyError(Q.text('Validation.Decimal'), '', null);
                        input.val(oldText);
                        input.focus();
                        return;
                    }
                }
                else if (input.hasClass("numeric")) {
                    var i = Q.parseInteger(text);
                    if (isNaN(i) || i > 32767 || i < 0) {
                        Q.notifyError(Q.text('Validation.Integer'), '', null);
                        input.val(oldText);
                        input.focus();
                        return;
                    }
                    value = i;
                }
                else
                    value = text;
                if (!pending) {
                    this.pendingChanges[item.ProductID] = pending = {};
                }
                pending[field] = value;
                item[field] = value;
                this.view.refresh();
                if (input.hasClass("numeric"))
                    value = Q.formatNumber(value, '0.##');
                input.val(value).addClass('dirty');
                this.setSaveButtonState();
            };
            ProductGrid.prototype.setSaveButtonState = function () {
                this.toolbar.findButton('apply-changes-button').toggleClass('disabled', Object.keys(this.pendingChanges).length === 0);
            };
            ProductGrid.prototype.saveClick = function () {
                if (Object.keys(this.pendingChanges).length === 0) {
                    return;
                }
                // this calls save service for all modified rows, one by one
                // you could write a batch update service
                var keys = Object.keys(this.pendingChanges);
                var current = -1;
                var self = this;
                (function saveNext() {
                    if (++current >= keys.length) {
                        self.refresh();
                        return;
                    }
                    var key = keys[current];
                    var entity = Q.deepClone(self.pendingChanges[key]);
                    entity.ProductID = key;
                    Q.serviceRequest('Basic/Product/Update', {
                        EntityId: key,
                        Entity: entity
                    }, function (response) {
                        delete self.pendingChanges[key];
                        saveNext();
                    });
                })();
            };
            ProductGrid.prototype.getViewOptions = function () {
                var opt = _super.prototype.getViewOptions.call(this);
                opt.rowsPerPage = 20;
                return opt;
            };
            ProductGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.rowHeight = 100;
                return opt;
            };
            /**
             * This method is called for all rows
             * @param item Data item for current row
             * @param index Index of the row in grid
             */
            ProductGrid.prototype.getItemCssClass = function (item, index) {
                var klass = "";
                if (item.GalleryImages != "")
                    klass += " high-price";
                else if (item.GalleryImages == "")
                    klass += " medium-price";
                else
                    klass += " low-price";
                //if (item.UnitPrice >= 50)
                //    klass += " high-price";
                //else if (item.UnitPrice >= 20)
                //    klass += " medium-price";
                //else
                //    klass += " low-price";
                return Q.trimToNull(klass);
            };
            ProductGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], ProductGrid);
            return ProductGrid;
        }(Serenity.EntityGrid));
        Basic.ProductGrid = ProductGrid;
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var ProductSizeListFormatter = (function () {
            function ProductSizeListFormatter() {
            }
            ProductSizeListFormatter.prototype.format = function (ctx) {
                var idList = ctx.value;
                if (!idList || !idList.length)
                    return "";
                var byId = Basic.ProductSizeRow.getLookup().itemById;
                var z;
                return idList.map(function (x) { return ((z = byId[x]) ? z.SizeName : x); }).join(", ");
            };
            ProductSizeListFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], ProductSizeListFormatter);
            return ProductSizeListFormatter;
        }());
        Basic.ProductSizeListFormatter = ProductSizeListFormatter;
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var ProductColorDialog = (function (_super) {
            __extends(ProductColorDialog, _super);
            function ProductColorDialog() {
                _super.apply(this, arguments);
                this.form = new Basic.ProductColorForm(this.idPrefix);
            }
            ProductColorDialog.prototype.getFormKey = function () { return Basic.ProductColorForm.formKey; };
            ProductColorDialog.prototype.getIdProperty = function () { return Basic.ProductColorRow.idProperty; };
            ProductColorDialog.prototype.getLocalTextPrefix = function () { return Basic.ProductColorRow.localTextPrefix; };
            ProductColorDialog.prototype.getNameProperty = function () { return Basic.ProductColorRow.nameProperty; };
            ProductColorDialog.prototype.getService = function () { return Basic.ProductColorService.baseUrl; };
            ProductColorDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ProductColorDialog);
            return ProductColorDialog;
        }(Serenity.EntityDialog));
        Basic.ProductColorDialog = ProductColorDialog;
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var ProductColorGrid = (function (_super) {
            __extends(ProductColorGrid, _super);
            function ProductColorGrid(container) {
                _super.call(this, container);
            }
            ProductColorGrid.prototype.getColumnsKey = function () { return 'Basic.ProductColor'; };
            ProductColorGrid.prototype.getDialogType = function () { return Basic.ProductColorDialog; };
            ProductColorGrid.prototype.getIdProperty = function () { return Basic.ProductColorRow.idProperty; };
            ProductColorGrid.prototype.getLocalTextPrefix = function () { return Basic.ProductColorRow.localTextPrefix; };
            ProductColorGrid.prototype.getService = function () { return Basic.ProductColorService.baseUrl; };
            ProductColorGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductColorGrid);
            return ProductColorGrid;
        }(Serenity.EntityGrid));
        Basic.ProductColorGrid = ProductColorGrid;
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var ProductSizeDialog = (function (_super) {
            __extends(ProductSizeDialog, _super);
            function ProductSizeDialog() {
                _super.apply(this, arguments);
                this.form = new Basic.ProductSizeForm(this.idPrefix);
            }
            ProductSizeDialog.prototype.getFormKey = function () { return Basic.ProductSizeForm.formKey; };
            ProductSizeDialog.prototype.getIdProperty = function () { return Basic.ProductSizeRow.idProperty; };
            ProductSizeDialog.prototype.getLocalTextPrefix = function () { return Basic.ProductSizeRow.localTextPrefix; };
            ProductSizeDialog.prototype.getNameProperty = function () { return Basic.ProductSizeRow.nameProperty; };
            ProductSizeDialog.prototype.getService = function () { return Basic.ProductSizeService.baseUrl; };
            ProductSizeDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], ProductSizeDialog);
            return ProductSizeDialog;
        }(Serenity.EntityDialog));
        Basic.ProductSizeDialog = ProductSizeDialog;
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var ProductSizeGrid = (function (_super) {
            __extends(ProductSizeGrid, _super);
            function ProductSizeGrid(container) {
                _super.call(this, container);
            }
            ProductSizeGrid.prototype.getColumnsKey = function () { return 'Basic.ProductSize'; };
            ProductSizeGrid.prototype.getDialogType = function () { return Basic.ProductSizeDialog; };
            ProductSizeGrid.prototype.getIdProperty = function () { return Basic.ProductSizeRow.idProperty; };
            ProductSizeGrid.prototype.getLocalTextPrefix = function () { return Basic.ProductSizeRow.localTextPrefix; };
            ProductSizeGrid.prototype.getService = function () { return Basic.ProductSizeService.baseUrl; };
            ProductSizeGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ProductSizeGrid);
            return ProductSizeGrid;
        }(Serenity.EntityGrid));
        Basic.ProductSizeGrid = ProductSizeGrid;
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var SeasonDialog = (function (_super) {
            __extends(SeasonDialog, _super);
            function SeasonDialog() {
                _super.apply(this, arguments);
                this.form = new Basic.SeasonForm(this.idPrefix);
            }
            SeasonDialog.prototype.getFormKey = function () { return Basic.SeasonForm.formKey; };
            SeasonDialog.prototype.getIdProperty = function () { return Basic.SeasonRow.idProperty; };
            SeasonDialog.prototype.getLocalTextPrefix = function () { return Basic.SeasonRow.localTextPrefix; };
            SeasonDialog.prototype.getNameProperty = function () { return Basic.SeasonRow.nameProperty; };
            SeasonDialog.prototype.getService = function () { return Basic.SeasonService.baseUrl; };
            SeasonDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], SeasonDialog);
            return SeasonDialog;
        }(Serenity.EntityDialog));
        Basic.SeasonDialog = SeasonDialog;
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var SeasonGrid = (function (_super) {
            __extends(SeasonGrid, _super);
            function SeasonGrid(container) {
                _super.call(this, container);
            }
            SeasonGrid.prototype.getColumnsKey = function () { return 'Basic.Season'; };
            SeasonGrid.prototype.getDialogType = function () { return Basic.SeasonDialog; };
            SeasonGrid.prototype.getIdProperty = function () { return Basic.SeasonRow.idProperty; };
            SeasonGrid.prototype.getLocalTextPrefix = function () { return Basic.SeasonRow.localTextPrefix; };
            SeasonGrid.prototype.getService = function () { return Basic.SeasonService.baseUrl; };
            SeasonGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SeasonGrid);
            return SeasonGrid;
        }(Serenity.EntityGrid));
        Basic.SeasonGrid = SeasonGrid;
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var PhoneEditor = (function (_super) {
            __extends(PhoneEditor, _super);
            function PhoneEditor(input) {
                var _this = this;
                _super.call(this, input);
                this.addValidationRule(this.uniqueName, function (e) {
                    var value = Q.trimToNull(_this.get_value());
                    if (value == null) {
                        return null;
                    }
                    return PhoneEditor.validate(value, _this.multiple);
                });
                input.bind('change', function (e) {
                    if (!Serenity.WX.hasOriginalEvent(e)) {
                        return;
                    }
                    _this.formatValue();
                });
                input.bind('blur', function (e) {
                    if (_this.element.hasClass('valid')) {
                        _this.formatValue();
                    }
                });
            }
            PhoneEditor.prototype.formatValue = function () {
                this.element.val(this.getFormattedValue());
            };
            PhoneEditor.prototype.getFormattedValue = function () {
                var value = this.element.val();
                if (this.multiple) {
                    return PhoneEditor.formatMulti(value, PhoneEditor.formatPhone);
                }
                return PhoneEditor.formatPhone(value);
            };
            PhoneEditor.prototype.get_value = function () {
                return this.getFormattedValue();
            };
            PhoneEditor.prototype.set_value = function (value) {
                this.element.val(value);
            };
            PhoneEditor.validate = function (phone, isMultiple) {
                var valid = (isMultiple ? PhoneEditor.isValidMulti(phone, PhoneEditor.isValidPhone) : PhoneEditor.isValidPhone(phone));
                if (valid) {
                    return null;
                }
                return Q.text((isMultiple ? 'Validation.NorthwindPhoneMultiple' : 'Validation.NorthwindPhone'));
            };
            PhoneEditor.isValidPhone = function (phone) {
                if (Q.isEmptyOrNull(phone)) {
                    return false;
                }
                phone = Q.replaceAll(Q.replaceAll(phone, ' ', ''), '-', '');
                if (phone.length < 10) {
                    return false;
                }
                if (Q.startsWith(phone, '0')) {
                    phone = phone.substring(1);
                }
                if (Q.startsWith(phone, '(') && phone.charAt(4) === ')') {
                    phone = phone.substr(1, 3) + phone.substring(5);
                }
                if (phone.length !== 10) {
                    return false;
                }
                if (Q.startsWith(phone, '0')) {
                    return false;
                }
                for (var i = 0; i < phone.length; i++) {
                    var c = phone.charAt(i);
                    if (c < '0' || c > '9') {
                        return false;
                    }
                }
                return true;
            };
            PhoneEditor.formatPhone = function (phone) {
                if (!PhoneEditor.isValidPhone(phone)) {
                    return phone;
                }
                phone = Q.replaceAll(Q.replaceAll(Q.replaceAll(Q.replaceAll(phone, ' ', ''), '-', ''), '(', ''), ')', '');
                if (Q.startsWith(phone, '0')) {
                    phone = phone.substring(1);
                }
                phone = '(' + phone.substr(0, 3) + ') ' + phone.substr(3, 3) + '-' + phone.substr(6, 2) + phone.substr(8, 2);
                return phone;
            };
            PhoneEditor.formatMulti = function (phone, format) {
                var phones = Q.replaceAll(phone, String.fromCharCode(59), String.fromCharCode(44)).split(String.fromCharCode(44));
                var result = '';
                for (var _i = 0, phones_1 = phones; _i < phones_1.length; _i++) {
                    var x = phones_1[_i];
                    var s = Q.trimToNull(x);
                    if (s == null) {
                        continue;
                    }
                    if (result.length > 0) {
                        result += ', ';
                    }
                    result += format(s);
                }
                return result;
            };
            PhoneEditor.isValidMulti = function (phone, check) {
                if (Q.isEmptyOrNull(phone)) {
                    return false;
                }
                var phones = Q.replaceAll(phone, String.fromCharCode(59), String.fromCharCode(44)).split(String.fromCharCode(44));
                var anyValid = false;
                for (var $t1 = 0; $t1 < phones.length; $t1++) {
                    var x = phones[$t1];
                    var s = Q.trimToNull(x);
                    if (s == null) {
                        continue;
                    }
                    if (!check(s)) {
                        return false;
                    }
                    anyValid = true;
                }
                if (!anyValid) {
                    return false;
                }
                return true;
            };
            __decorate([
                Serenity.Decorators.option()
            ], PhoneEditor.prototype, "multiple", void 0);
            PhoneEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], PhoneEditor);
            return PhoneEditor;
        }(Serenity.StringEditor));
        Basic.PhoneEditor = PhoneEditor;
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var ShipperDialog = (function (_super) {
            __extends(ShipperDialog, _super);
            function ShipperDialog() {
                _super.apply(this, arguments);
                this.form = new Basic.ShipperForm(this.idPrefix);
            }
            ShipperDialog.prototype.getFormKey = function () { return Basic.ShipperForm.formKey; };
            ShipperDialog.prototype.getIdProperty = function () { return Basic.ShipperRow.idProperty; };
            ShipperDialog.prototype.getLocalTextPrefix = function () { return Basic.ShipperRow.localTextPrefix; };
            ShipperDialog.prototype.getNameProperty = function () { return Basic.ShipperRow.nameProperty; };
            ShipperDialog.prototype.getService = function () { return Basic.ShipperService.baseUrl; };
            ShipperDialog.prototype.getLanguages = function () {
                return ERP.LanguageList.getValue();
            };
            ShipperDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], ShipperDialog);
            return ShipperDialog;
        }(Serenity.EntityDialog));
        Basic.ShipperDialog = ShipperDialog;
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var ShipperFormatter = (function () {
            function ShipperFormatter() {
            }
            ShipperFormatter.prototype.format = function (ctx) {
                return "<span class='shipper-symbol shipper-" +
                    Q.replaceAll((ctx.value || '').toString(), ' ', '') +
                    "'>" + Q.htmlEncode(ctx.value) + '</span>';
            };
            ShipperFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], ShipperFormatter);
            return ShipperFormatter;
        }());
        Basic.ShipperFormatter = ShipperFormatter;
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var ShipperGrid = (function (_super) {
            __extends(ShipperGrid, _super);
            function ShipperGrid(container) {
                _super.call(this, container);
            }
            ShipperGrid.prototype.getColumnsKey = function () { return "Basic.Shipper"; };
            ShipperGrid.prototype.getDialogType = function () { return Basic.ShipperDialog; };
            ShipperGrid.prototype.getIdProperty = function () { return Basic.ShipperRow.idProperty; };
            ShipperGrid.prototype.getLocalTextPrefix = function () { return Basic.ShipperRow.localTextPrefix; };
            ShipperGrid.prototype.getService = function () { return Basic.ShipperService.baseUrl; };
            ShipperGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], ShipperGrid);
            return ShipperGrid;
        }(Serenity.EntityGrid));
        Basic.ShipperGrid = ShipperGrid;
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var SizeGroupDialog = (function (_super) {
            __extends(SizeGroupDialog, _super);
            function SizeGroupDialog() {
                _super.apply(this, arguments);
                this.form = new Basic.SizeGroupForm(this.idPrefix);
            }
            SizeGroupDialog.prototype.getFormKey = function () { return Basic.SizeGroupForm.formKey; };
            SizeGroupDialog.prototype.getIdProperty = function () { return Basic.SizeGroupRow.idProperty; };
            SizeGroupDialog.prototype.getLocalTextPrefix = function () { return Basic.SizeGroupRow.localTextPrefix; };
            SizeGroupDialog.prototype.getNameProperty = function () { return Basic.SizeGroupRow.nameProperty; };
            SizeGroupDialog.prototype.getService = function () { return Basic.SizeGroupService.baseUrl; };
            SizeGroupDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], SizeGroupDialog);
            return SizeGroupDialog;
        }(Serenity.EntityDialog));
        Basic.SizeGroupDialog = SizeGroupDialog;
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var SizeGroupGrid = (function (_super) {
            __extends(SizeGroupGrid, _super);
            function SizeGroupGrid(container) {
                _super.call(this, container);
            }
            SizeGroupGrid.prototype.getColumnsKey = function () { return 'Basic.SizeGroup'; };
            SizeGroupGrid.prototype.getDialogType = function () { return Basic.SizeGroupDialog; };
            SizeGroupGrid.prototype.getIdProperty = function () { return Basic.SizeGroupRow.idProperty; };
            SizeGroupGrid.prototype.getLocalTextPrefix = function () { return Basic.SizeGroupRow.localTextPrefix; };
            SizeGroupGrid.prototype.getService = function () { return Basic.SizeGroupService.baseUrl; };
            SizeGroupGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SizeGroupGrid);
            return SizeGroupGrid;
        }(Serenity.EntityGrid));
        Basic.SizeGroupGrid = SizeGroupGrid;
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var StyleDialog = (function (_super) {
            __extends(StyleDialog, _super);
            function StyleDialog() {
                _super.apply(this, arguments);
                this.form = new Basic.StyleForm(this.idPrefix);
            }
            StyleDialog.prototype.getFormKey = function () { return Basic.StyleForm.formKey; };
            StyleDialog.prototype.getIdProperty = function () { return Basic.StyleRow.idProperty; };
            StyleDialog.prototype.getLocalTextPrefix = function () { return Basic.StyleRow.localTextPrefix; };
            StyleDialog.prototype.getNameProperty = function () { return Basic.StyleRow.nameProperty; };
            StyleDialog.prototype.getService = function () { return Basic.StyleService.baseUrl; };
            StyleDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], StyleDialog);
            return StyleDialog;
        }(Serenity.EntityDialog));
        Basic.StyleDialog = StyleDialog;
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var StyleGrid = (function (_super) {
            __extends(StyleGrid, _super);
            function StyleGrid(container) {
                _super.call(this, container);
            }
            StyleGrid.prototype.getColumnsKey = function () { return 'Basic.Style'; };
            StyleGrid.prototype.getDialogType = function () { return Basic.StyleDialog; };
            StyleGrid.prototype.getIdProperty = function () { return Basic.StyleRow.idProperty; };
            StyleGrid.prototype.getLocalTextPrefix = function () { return Basic.StyleRow.localTextPrefix; };
            StyleGrid.prototype.getService = function () { return Basic.StyleService.baseUrl; };
            StyleGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], StyleGrid);
            return StyleGrid;
        }(Serenity.EntityGrid));
        Basic.StyleGrid = StyleGrid;
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var UnitDialog = (function (_super) {
            __extends(UnitDialog, _super);
            function UnitDialog() {
                _super.apply(this, arguments);
                this.form = new Basic.UnitForm(this.idPrefix);
            }
            UnitDialog.prototype.getFormKey = function () { return Basic.UnitForm.formKey; };
            UnitDialog.prototype.getIdProperty = function () { return Basic.UnitRow.idProperty; };
            UnitDialog.prototype.getLocalTextPrefix = function () { return Basic.UnitRow.localTextPrefix; };
            UnitDialog.prototype.getNameProperty = function () { return Basic.UnitRow.nameProperty; };
            UnitDialog.prototype.getService = function () { return Basic.UnitService.baseUrl; };
            UnitDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], UnitDialog);
            return UnitDialog;
        }(Serenity.EntityDialog));
        Basic.UnitDialog = UnitDialog;
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Basic;
    (function (Basic) {
        var UnitGrid = (function (_super) {
            __extends(UnitGrid, _super);
            function UnitGrid(container) {
                _super.call(this, container);
            }
            UnitGrid.prototype.getColumnsKey = function () { return 'Basic.Unit'; };
            UnitGrid.prototype.getDialogType = function () { return Basic.UnitDialog; };
            UnitGrid.prototype.getIdProperty = function () { return Basic.UnitRow.idProperty; };
            UnitGrid.prototype.getLocalTextPrefix = function () { return Basic.UnitRow.localTextPrefix; };
            UnitGrid.prototype.getService = function () { return Basic.UnitService.baseUrl; };
            UnitGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], UnitGrid);
            return UnitGrid;
        }(Serenity.EntityGrid));
        Basic.UnitGrid = UnitGrid;
    })(Basic = ERP.Basic || (ERP.Basic = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var ScriptInitialization;
    (function (ScriptInitialization) {
        Q.Config.responsiveDialogs = true;
        Q.Config.rootNamespaces.push('ERP');
    })(ScriptInitialization = ERP.ScriptInitialization || (ERP.ScriptInitialization = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var BasicProgressDialog = (function (_super) {
        __extends(BasicProgressDialog, _super);
        function BasicProgressDialog() {
            var _this = this;
            _super.call(this);
            this.byId('ProgressBar').progressbar({
                max: 100,
                value: 0,
                change: function (e, v) {
                    _this.byId('ProgressLabel').text(_this.value + ' / ' + _this.max);
                }
            });
        }
        Object.defineProperty(BasicProgressDialog.prototype, "max", {
            get: function () {
                return this.byId('ProgressBar').progressbar().progressbar('option', 'max');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('option', 'max', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "value", {
            get: function () {
                return this.byId('ProgressBar').progressbar('value');
            },
            set: function (value) {
                this.byId('ProgressBar').progressbar().progressbar('value', value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicProgressDialog.prototype, "title", {
            get: function () {
                return this.element.dialog().dialog('option', 'title');
            },
            set: function (value) {
                this.element.dialog().dialog('option', 'title', value);
            },
            enumerable: true,
            configurable: true
        });
        BasicProgressDialog.prototype.getDialogOptions = function () {
            var _this = this;
            var opt = _super.prototype.getDialogOptions.call(this);
            opt.title = Q.text('Site.BasicProgressDialog.PleaseWait');
            opt.width = 600;
            opt.buttons = [{
                    text: Q.text('Dialogs.CancelButton'),
                    click: function () {
                        _this.cancelled = true;
                        _this.element.closest('.ui-dialog')
                            .find('.ui-dialog-buttonpane .ui-button')
                            .attr('disabled', 'disabled')
                            .css('opacity', '0.5');
                        _this.element.dialog('option', 'title', Q.trimToNull(_this.cancelTitle) ||
                            Q.text('Site.BasicProgressDialog.CancelTitle'));
                    }
                }];
            return opt;
        };
        BasicProgressDialog.prototype.initDialog = function () {
            _super.prototype.initDialog.call(this);
            this.element.closest('.ui-dialog').find('.ui-dialog-titlebar-close').hide();
        };
        BasicProgressDialog.prototype.getTemplate = function () {
            return ("<div class='s-DialogContent s-BasicProgressDialogContent'>" +
                "<div id='~_StatusText' class='status-text' ></div>" +
                "<div id='~_ProgressBar' class='progress-bar'>" +
                "<div id='~_ProgressLabel' class='progress-label' ></div>" +
                "</div>" +
                "</div>");
        };
        return BasicProgressDialog;
    }(Serenity.TemplatedDialog));
    ERP.BasicProgressDialog = BasicProgressDialog;
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Common;
    (function (Common) {
        var BulkServiceAction = (function () {
            function BulkServiceAction() {
            }
            BulkServiceAction.prototype.createProgressDialog = function () {
                this.progressDialog = new ERP.BasicProgressDialog();
                this.progressDialog.dialogOpen();
                this.progressDialog.max = this.keys.length;
                this.progressDialog.value = 0;
            };
            BulkServiceAction.prototype.getConfirmationFormat = function () {
                return Q.text('Site.BulkServiceAction.ConfirmationFormat');
            };
            BulkServiceAction.prototype.getConfirmationMessage = function (targetCount) {
                return Q.format(this.getConfirmationFormat(), targetCount);
            };
            BulkServiceAction.prototype.confirm = function (targetCount, action) {
                Q.confirm(this.getConfirmationMessage(targetCount), action);
            };
            BulkServiceAction.prototype.getNothingToProcessMessage = function () {
                return Q.text('Site.BulkServiceAction.NothingToProcess');
            };
            BulkServiceAction.prototype.nothingToProcess = function () {
                Q.notifyError(this.getNothingToProcessMessage());
            };
            BulkServiceAction.prototype.getParallelRequests = function () {
                return 1;
            };
            BulkServiceAction.prototype.getBatchSize = function () {
                return 1;
            };
            BulkServiceAction.prototype.startParallelExecution = function () {
                this.createProgressDialog();
                this.successCount = 0;
                this.errorCount = 0;
                this.pendingRequests = 0;
                this.completedRequests = 0;
                this.errorCount = 0;
                this.errorByKey = {};
                this.queue = this.keys.slice();
                this.queueIndex = 0;
                var parallelRequests = this.getParallelRequests();
                while (parallelRequests-- > 0) {
                    this.executeNextBatch();
                }
            };
            BulkServiceAction.prototype.serviceCallCleanup = function () {
                this.pendingRequests--;
                this.completedRequests++;
                var title = Q.text((this.progressDialog.cancelled ?
                    'Site.BasicProgressDialog.CancelTitle' : 'Site.BasicProgressDialog.PleaseWait'));
                title += ' (';
                if (this.successCount > 0) {
                    title += Q.format(Q.text('Site.BulkServiceAction.SuccessCount'), this.successCount);
                }
                if (this.errorCount > 0) {
                    if (this.successCount > 0) {
                        title += ', ';
                    }
                    title += Q.format(Q.text('Site.BulkServiceAction.ErrorCount'), this.errorCount);
                }
                this.progressDialog.title = title + ')';
                this.progressDialog.value = this.successCount + this.errorCount;
                if (!this.progressDialog.cancelled && this.progressDialog.value < this.keys.length) {
                    this.executeNextBatch();
                }
                else if (this.pendingRequests === 0) {
                    this.progressDialog.dialogClose();
                    this.showResults();
                    if (this.done) {
                        this.done();
                        this.done = null;
                    }
                }
            };
            BulkServiceAction.prototype.executeForBatch = function (batch) {
            };
            BulkServiceAction.prototype.executeNextBatch = function () {
                var batchSize = this.getBatchSize();
                var batch = [];
                while (true) {
                    if (batch.length >= batchSize) {
                        break;
                    }
                    if (this.queueIndex >= this.queue.length) {
                        break;
                    }
                    batch.push(this.queue[this.queueIndex++]);
                }
                if (batch.length > 0) {
                    this.pendingRequests++;
                    this.executeForBatch(batch);
                }
            };
            BulkServiceAction.prototype.getAllHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.AllHadErrorsFormat');
            };
            BulkServiceAction.prototype.showAllHadErrors = function () {
                Q.notifyError(Q.format(this.getAllHadErrorsFormat(), this.errorCount));
            };
            BulkServiceAction.prototype.getSomeHadErrorsFormat = function () {
                return Q.text('Site.BulkServiceAction.SomeHadErrorsFormat');
            };
            BulkServiceAction.prototype.showSomeHadErrors = function () {
                Q.notifyWarning(Q.format(this.getSomeHadErrorsFormat(), this.successCount, this.errorCount));
            };
            BulkServiceAction.prototype.getAllSuccessFormat = function () {
                return Q.text('Site.BulkServiceAction.AllSuccessFormat');
            };
            BulkServiceAction.prototype.showAllSuccess = function () {
                Q.notifySuccess(Q.format(this.getAllSuccessFormat(), this.successCount));
            };
            BulkServiceAction.prototype.showResults = function () {
                if (this.errorCount === 0 && this.successCount === 0) {
                    this.nothingToProcess();
                    return;
                }
                if (this.errorCount > 0 && this.successCount === 0) {
                    this.showAllHadErrors();
                    return;
                }
                if (this.errorCount > 0) {
                    this.showSomeHadErrors();
                    return;
                }
                this.showAllSuccess();
            };
            BulkServiceAction.prototype.execute = function (keys) {
                var _this = this;
                this.keys = keys;
                if (this.keys.length === 0) {
                    this.nothingToProcess();
                    return;
                }
                this.confirm(this.keys.length, function () { return _this.startParallelExecution(); });
            };
            BulkServiceAction.prototype.get_successCount = function () {
                return this.successCount;
            };
            BulkServiceAction.prototype.set_successCount = function (value) {
                this.successCount = value;
            };
            BulkServiceAction.prototype.get_errorCount = function () {
                return this.errorCount;
            };
            BulkServiceAction.prototype.set_errorCount = function (value) {
                this.errorCount = value;
            };
            return BulkServiceAction;
        }());
        Common.BulkServiceAction = BulkServiceAction;
    })(Common = ERP.Common || (ERP.Common = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var DialogUtils;
    (function (DialogUtils) {
        function pendingChangesConfirmation(element, hasPendingChanges) {
            element.bind('dialogbeforeclose', function (e) {
                if (!Serenity.WX.hasOriginalEvent(e) || !hasPendingChanges()) {
                    return;
                }
                e.preventDefault();
                Q.confirm('You have pending changes. Save them?', function () { return element.find('div.save-and-close-button').click(); }, {
                    onNo: function () {
                        element.dialog().dialog('close');
                    }
                });
            });
        }
        DialogUtils.pendingChangesConfirmation = pendingChangesConfirmation;
    })(DialogUtils = ERP.DialogUtils || (ERP.DialogUtils = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Common;
    (function (Common) {
        var ExcelExportHelper;
        (function (ExcelExportHelper) {
            function createToolButton(options) {
                return {
                    hint: Q.coalesce(options.title, 'Excel'),
                    title: Q.coalesce(options.hint, ''),
                    cssClass: 'export-xlsx-button',
                    onClick: function () {
                        if (!options.onViewSubmit()) {
                            return;
                        }
                        var grid = options.grid;
                        var request = Q.deepClone(grid.getView().params);
                        request.Take = 0;
                        request.Skip = 0;
                        var sortBy = grid.getView().sortBy;
                        if (sortBy) {
                            request.Sort = sortBy;
                        }
                        request.IncludeColumns = [];
                        var columns = grid.getGrid().getColumns();
                        for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
                            var column = columns_1[_i];
                            request.IncludeColumns.push(column.id || column.field);
                        }
                        Q.postToService({ service: options.service, request: request, target: '_blank' });
                    },
                    separator: options.separator
                };
            }
            ExcelExportHelper.createToolButton = createToolButton;
        })(ExcelExportHelper = Common.ExcelExportHelper || (Common.ExcelExportHelper = {}));
    })(Common = ERP.Common || (ERP.Common = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Common;
    (function (Common) {
        var GridEditorBase = (function (_super) {
            __extends(GridEditorBase, _super);
            function GridEditorBase(container) {
                _super.call(this, container);
                this.nextId = 1;
            }
            GridEditorBase.prototype.getIdProperty = function () { return "__id"; };
            GridEditorBase.prototype.id = function (entity) {
                return entity.__id;
            };
            GridEditorBase.prototype.save = function (opt, callback) {
                var _this = this;
                var request = opt.request;
                var row = Q.deepClone(request.Entity);
                var id = row.__id;
                if (id == null) {
                    row.__id = this.nextId++;
                }
                if (!this.validateEntity(row, id)) {
                    return;
                }
                var items = this.view.getItems().slice();
                if (id == null) {
                    items.push(row);
                }
                else {
                    var index = Q.indexOf(items, function (x) { return _this.id(x) === id; });
                    items[index] = Q.deepClone({}, items[index], row);
                }
                this.setEntities(items);
                callback({});
            };
            GridEditorBase.prototype.deleteEntity = function (id) {
                this.view.deleteItem(id);
                return true;
            };
            GridEditorBase.prototype.validateEntity = function (row, id) {
                return true;
            };
            GridEditorBase.prototype.setEntities = function (items) {
                this.view.setItems(items, true);
            };
            GridEditorBase.prototype.getNewEntity = function () {
                return {};
            };
            GridEditorBase.prototype.getButtons = function () {
                var _this = this;
                return [{
                        title: this.getAddButtonCaption(),
                        cssClass: 'add-button',
                        onClick: function () {
                            _this.createEntityDialog(_this.getItemType(), function (dlg) {
                                var dialog = dlg;
                                dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                                dialog.loadEntityAndOpenDialog(_this.getNewEntity());
                            });
                        }
                    }];
            };
            GridEditorBase.prototype.editItem = function (entityOrId) {
                var _this = this;
                var id = entityOrId;
                var item = this.view.getItemById(id);
                this.createEntityDialog(this.getItemType(), function (dlg) {
                    var dialog = dlg;
                    dialog.onDelete = function (opt, callback) {
                        if (!_this.deleteEntity(id)) {
                            return;
                        }
                        callback({});
                    };
                    dialog.onSave = function (opt, callback) { return _this.save(opt, callback); };
                    dialog.loadEntityAndOpenDialog(item);
                });
                ;
            };
            GridEditorBase.prototype.getEditValue = function (property, target) {
                target[property.name] = this.value;
            };
            GridEditorBase.prototype.setEditValue = function (source, property) {
                this.value = source[property.name];
            };
            Object.defineProperty(GridEditorBase.prototype, "value", {
                get: function () {
                    return this.view.getItems().map(function (x) {
                        var y = Q.deepClone(x);
                        delete y['__id'];
                        return y;
                    });
                },
                set: function (value) {
                    var _this = this;
                    this.view.setItems((value || []).map(function (x) {
                        var y = Q.deepClone(x);
                        y.__id = _this.nextId++;
                        return y;
                    }), true);
                },
                enumerable: true,
                configurable: true
            });
            GridEditorBase.prototype.getGridCanLoad = function () {
                return false;
            };
            GridEditorBase.prototype.usePager = function () {
                return false;
            };
            GridEditorBase.prototype.getInitialTitle = function () {
                return null;
            };
            GridEditorBase.prototype.createQuickSearchInput = function () {
            };
            GridEditorBase = __decorate([
                Serenity.Decorators.registerClass([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.editor(),
                Serenity.Decorators.element("<div/>")
            ], GridEditorBase);
            return GridEditorBase;
        }(Serenity.EntityGrid));
        Common.GridEditorBase = GridEditorBase;
    })(Common = ERP.Common || (ERP.Common = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Common;
    (function (Common) {
        var GridEditorDialog = (function (_super) {
            __extends(GridEditorDialog, _super);
            function GridEditorDialog() {
                _super.apply(this, arguments);
            }
            GridEditorDialog.prototype.getIdProperty = function () { return "__id"; };
            GridEditorDialog.prototype.destroy = function () {
                this.onSave = null;
                this.onDelete = null;
                _super.prototype.destroy.call(this);
            };
            GridEditorDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                // apply changes button doesn't work properly with in-memory grids yet
                if (this.applyChangesButton) {
                    this.applyChangesButton.hide();
                }
            };
            GridEditorDialog.prototype.saveHandler = function (options, callback) {
                this.onSave && this.onSave(options, callback);
            };
            GridEditorDialog.prototype.deleteHandler = function (options, callback) {
                this.onDelete && this.onDelete(options, callback);
            };
            GridEditorDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], GridEditorDialog);
            return GridEditorDialog;
        }(Serenity.EntityDialog));
        Common.GridEditorDialog = GridEditorDialog;
    })(Common = ERP.Common || (ERP.Common = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var LanguageList;
    (function (LanguageList) {
        function getValue() {
            var result = [];
            for (var _i = 0, _a = ERP.Administration.LanguageRow.getLookup().items; _i < _a.length; _i++) {
                var k = _a[_i];
                if (k.LanguageId !== 'en') {
                    result.push([k.Id.toString(), k.LanguageName]);
                }
            }
            return result;
        }
        LanguageList.getValue = getValue;
    })(LanguageList = ERP.LanguageList || (ERP.LanguageList = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Common;
    (function (Common) {
        var ReportHelper;
        (function (ReportHelper) {
            function createToolButton(options) {
                return {
                    title: Q.coalesce(options.title, 'Report'),
                    cssClass: Q.coalesce(options.cssClass, 'print-button'),
                    icon: options.icon,
                    onClick: function () {
                        Q.postToUrl({
                            url: '~/Report/' + (options.download ? 'Download' : 'Render'),
                            params: {
                                key: options.reportKey,
                                ext: Q.coalesce(options.extension, 'pdf'),
                                opt: (options.getParams == null ? '' : $.toJSON(options.getParams()))
                            },
                            target: Q.coalesce(options.target, '_blank')
                        });
                    }
                };
            }
            ReportHelper.createToolButton = createToolButton;
        })(ReportHelper = Common.ReportHelper || (Common.ReportHelper = {}));
    })(Common = ERP.Common || (ERP.Common = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Common;
    (function (Common) {
        var LanguageSelection = (function (_super) {
            __extends(LanguageSelection, _super);
            function LanguageSelection(select, currentLanguage) {
                _super.call(this, select);
                currentLanguage = Q.coalesce(currentLanguage, 'en');
                this.change(function (e) {
                    $.cookie('LanguagePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    window.location.reload(true);
                });
                Q.getLookupAsync('Administration.Language').then(function (x) {
                    if (!Q.any(x.items, function (z) { return z.LanguageId === currentLanguage; })) {
                        var idx = currentLanguage.lastIndexOf('-');
                        if (idx >= 0) {
                            currentLanguage = currentLanguage.substr(0, idx);
                            if (!Q.any(x.items, function (y) { return y.LanguageId === currentLanguage; })) {
                                currentLanguage = 'en';
                            }
                        }
                        else {
                            currentLanguage = 'en';
                        }
                    }
                    for (var _i = 0, _a = x.items; _i < _a.length; _i++) {
                        var l = _a[_i];
                        Q.addOption(select, l.LanguageId, l.LanguageName);
                    }
                    select.val(currentLanguage);
                });
            }
            return LanguageSelection;
        }(Serenity.Widget));
        Common.LanguageSelection = LanguageSelection;
    })(Common = ERP.Common || (ERP.Common = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Common;
    (function (Common) {
        var SidebarSearch = (function (_super) {
            __extends(SidebarSearch, _super);
            function SidebarSearch(input, menuUL) {
                var _this = this;
                _super.call(this, input);
                new Serenity.QuickSearchInput(input, {
                    onSearch: function (field, text, success) {
                        _this.updateMatchFlags(text);
                        success(true);
                    }
                });
                this.menuUL = menuUL;
            }
            SidebarSearch.prototype.updateMatchFlags = function (text) {
                var liList = this.menuUL.find('li').removeClass('non-match');
                text = Q.trimToNull(text);
                if (text == null) {
                    liList.show();
                    liList.removeClass('expanded');
                    return;
                }
                var parts = text.replace(',', ' ').split(' ').filter(function (x) { return !Q.isTrimmedEmpty(x); });
                for (var i = 0; i < parts.length; i++) {
                    parts[i] = Q.trimToNull(Select2.util.stripDiacritics(parts[i]).toUpperCase());
                }
                var items = liList;
                items.each(function (idx, e) {
                    var x = $(e);
                    var title = Select2.util.stripDiacritics(Q.coalesce(x.text(), '').toUpperCase());
                    for (var _i = 0, parts_1 = parts; _i < parts_1.length; _i++) {
                        var p = parts_1[_i];
                        if (p != null && !(title.indexOf(p) !== -1)) {
                            x.addClass('non-match');
                            break;
                        }
                    }
                });
                var matchingItems = items.not('.non-match');
                var visibles = matchingItems.parents('li').add(matchingItems);
                var nonVisibles = liList.not(visibles);
                nonVisibles.hide().addClass('non-match');
                visibles.show();
                liList.addClass('expanded');
            };
            return SidebarSearch;
        }(Serenity.Widget));
        Common.SidebarSearch = SidebarSearch;
    })(Common = ERP.Common || (ERP.Common = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Common;
    (function (Common) {
        var ThemeSelection = (function (_super) {
            __extends(ThemeSelection, _super);
            function ThemeSelection(select) {
                var _this = this;
                _super.call(this, select);
                this.change(function (e) {
                    $.cookie('ThemePreference', select.val(), {
                        path: Q.Config.applicationPath,
                        expires: 365
                    });
                    $('body').removeClass('skin-' + _this.getCurrentTheme());
                    $('body').addClass('skin-' + select.val());
                });
                Q.addOption(select, 'blue', Q.text('Site.Layout.ThemeBlue'));
                Q.addOption(select, 'blue-light', Q.text('Site.Layout.ThemeBlueLight'));
                Q.addOption(select, 'purple', Q.text('Site.Layout.ThemePurple'));
                Q.addOption(select, 'purple-light', Q.text('Site.Layout.ThemePurpleLight'));
                Q.addOption(select, 'red', Q.text('Site.Layout.ThemeRed'));
                Q.addOption(select, 'red-light', Q.text('Site.Layout.ThemeRedLight'));
                Q.addOption(select, 'green', Q.text('Site.Layout.ThemeGreen'));
                Q.addOption(select, 'green-light', Q.text('Site.Layout.ThemeGreenLight'));
                Q.addOption(select, 'yellow', Q.text('Site.Layout.ThemeYellow'));
                Q.addOption(select, 'yellow-light', Q.text('Site.Layout.ThemeYellowLight'));
                Q.addOption(select, 'black', Q.text('Site.Layout.ThemeBlack'));
                Q.addOption(select, 'black-light', Q.text('Site.Layout.ThemeBlackLight'));
                select.val(this.getCurrentTheme());
            }
            ThemeSelection.prototype.getCurrentTheme = function () {
                var skinClass = Q.first(($('body').attr('class') || '').split(' '), function (x) { return Q.startsWith(x, 'skin-'); });
                if (skinClass) {
                    return skinClass.substr(5);
                }
                return 'blue';
            };
            return ThemeSelection;
        }(Serenity.Widget));
        Common.ThemeSelection = ThemeSelection;
    })(Common = ERP.Common || (ERP.Common = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Common;
    (function (Common) {
        var PdfExportHelper;
        (function (PdfExportHelper) {
            function toAutoTableColumns(srcColumns, columnStyles, columnTitles) {
                return srcColumns.map(function (src) {
                    var col = {
                        dataKey: src.id || src.field,
                        title: src.name || ''
                    };
                    if (columnTitles && columnTitles[col.dataKey] != null)
                        col.title = columnTitles[col.dataKey];
                    var style = {};
                    if ((src.cssClass || '').indexOf("align-right") >= 0)
                        style.halign = 'right';
                    else if ((src.cssClass || '').indexOf("align-center") >= 0)
                        style.halign = 'center';
                    columnStyles[col.dataKey] = style;
                    return col;
                });
            }
            function toAutoTableData(entities, keys, srcColumns) {
                var el = document.createElement('span');
                var row = 0;
                return entities.map(function (item) {
                    var dst = {};
                    for (var cell = 0; cell < srcColumns.length; cell++) {
                        var src = srcColumns[cell];
                        var fld = src.field || '';
                        var key = keys[cell];
                        var txt = void 0;
                        var html = void 0;
                        if (src.formatter) {
                            html = src.formatter(row, cell, item[fld], src, item);
                        }
                        else if (src.format) {
                            html = src.format({ row: row, cell: cell, item: item, value: item[fld] });
                        }
                        else {
                            dst[key] = item[fld];
                            continue;
                        }
                        if (!html || (html.indexOf('<') < 0 && html.indexOf('&') < 0))
                            dst[key] = html;
                        else {
                            el.innerHTML = html;
                            if (el.children.length == 1 &&
                                $(el.children[0]).is(":input")) {
                                dst[key] = $(el.children[0]).val();
                            }
                            else if (el.children.length == 1 &&
                                $(el.children).is('.check-box')) {
                                dst[key] = $(el.children).hasClass("checked") ? "X" : "";
                            }
                            else
                                dst[key] = el.textContent || '';
                        }
                    }
                    row++;
                    return dst;
                });
            }
            function exportToPdf(options) {
                var g = options.grid;
                if (!options.onViewSubmit())
                    return;
                includeAutoTable();
                var request = Q.deepClone(g.view.params);
                request.Take = 0;
                request.Skip = 0;
                var sortBy = g.view.sortBy;
                if (sortBy != null)
                    request.Sort = sortBy;
                var gridColumns = g.slickGrid.getColumns();
                gridColumns = gridColumns.filter(function (x) { return x.id !== "__select__"; });
                request.IncludeColumns = [];
                for (var _i = 0, gridColumns_1 = gridColumns; _i < gridColumns_1.length; _i++) {
                    var column = gridColumns_1[_i];
                    request.IncludeColumns.push(column.id || column.field);
                }
                Q.serviceCall({
                    url: g.view.url,
                    request: request,
                    onSuccess: function (response) {
                        var doc = new jsPDF('l', 'pt');
                        var srcColumns = gridColumns;
                        var columnStyles = {};
                        var columns = toAutoTableColumns(srcColumns, columnStyles, options.columnTitles);
                        var keys = columns.map(function (x) { return x.dataKey; });
                        var entities = response.Entities || [];
                        var data = toAutoTableData(entities, keys, srcColumns);
                        doc.setFontSize(options.titleFontSize || 10);
                        doc.setFontStyle('bold');
                        var reportTitle = options.reportTitle || g.getTitle() || "Report";
                        doc.autoTableText(reportTitle, doc.internal.pageSize.width / 2, options.titleTop || 25, { halign: 'center' });
                        var totalPagesExp = "{{T}}";
                        var pageNumbers = options.pageNumbers == null || options.pageNumbers;
                        var autoOptions = $.extend({
                            margin: { top: 25, left: 25, right: 25, bottom: pageNumbers ? 25 : 30 },
                            startY: 60,
                            styles: {
                                fontSize: 8,
                                overflow: 'linebreak',
                                cellPadding: 2,
                                valign: 'middle'
                            },
                            columnStyles: columnStyles
                        }, options.tableOptions);
                        if (pageNumbers) {
                            var footer = function (data) {
                                var str = data.pageCount;
                                // Total page number plugin only available in jspdf v1.0+
                                if (typeof doc.putTotalPages === 'function') {
                                    str = str + " / " + totalPagesExp;
                                }
                                doc.autoTableText(str, doc.internal.pageSize.width / 2, doc.internal.pageSize.height - autoOptions.margin.bottom, {
                                    halign: 'center'
                                });
                            };
                            autoOptions.afterPageContent = footer;
                        }
                        doc.autoTable(columns, data, autoOptions);
                        if (typeof doc.putTotalPages === 'function') {
                            doc.putTotalPages(totalPagesExp);
                        }
                        if (!options.output || options.output == "file") {
                            var fileName = options.reportTitle || "{0}_{1}.pdf";
                            fileName = Q.format(fileName, g.getTitle() || "report", Q.formatDate(new Date(), "yyyyMMdd_HHmm"));
                            doc.save(fileName);
                            return;
                        }
                        if (options.autoPrint)
                            doc.autoPrint();
                        var output = options.output;
                        if (output == 'newwindow' || '_blank')
                            output = 'dataurlnewwindow';
                        else if (output == 'window')
                            output = 'datauri';
                        doc.output(output);
                    }
                });
            }
            PdfExportHelper.exportToPdf = exportToPdf;
            function createToolButton(options) {
                return {
                    title: options.title || '',
                    hint: options.hint || 'PDF',
                    cssClass: 'export-pdf-button',
                    onClick: function () { return exportToPdf(options); },
                    separator: options.separator
                };
            }
            PdfExportHelper.createToolButton = createToolButton;
            function includeJsPDF() {
                if (typeof jsPDF !== "undefined")
                    return;
                var script = $("jsPDFScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.min.js"))
                    .appendTo(document.head);
            }
            function includeAutoTable() {
                includeJsPDF();
                if (typeof jsPDF === "undefined" ||
                    typeof jsPDF.API == "undefined" ||
                    typeof jsPDF.API.autoTable !== "undefined")
                    return;
                var script = $("jsPDFAutoTableScript");
                if (script.length > 0)
                    return;
                $("<script/>")
                    .attr("type", "text/javascript")
                    .attr("id", "jsPDFAutoTableScript")
                    .attr("src", Q.resolveUrl("~/Scripts/jspdf.plugin.autotable.min.js"))
                    .appendTo(document.head);
            }
        })(PdfExportHelper = Common.PdfExportHelper || (Common.PdfExportHelper = {}));
    })(Common = ERP.Common || (ERP.Common = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Common;
    (function (Common) {
        var UserPreferenceStorage = (function () {
            function UserPreferenceStorage() {
            }
            UserPreferenceStorage.prototype.getItem = function (key) {
                var value;
                Common.UserPreferenceService.Retrieve({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key
                }, function (response) { return value = response.Value; }, {
                    async: false
                });
                return value;
            };
            UserPreferenceStorage.prototype.setItem = function (key, data) {
                Common.UserPreferenceService.Update({
                    PreferenceType: "UserPreferenceStorage",
                    Name: key,
                    Value: data
                });
            };
            return UserPreferenceStorage;
        }());
        Common.UserPreferenceStorage = UserPreferenceStorage;
    })(Common = ERP.Common || (ERP.Common = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Inventory;
    (function (Inventory) {
        var DepotDialog = (function (_super) {
            __extends(DepotDialog, _super);
            function DepotDialog() {
                var _this = this;
                _super.call(this);
                this.form = new Inventory.DepotForm(this.idPrefix);
                this.form.DepotID.element.on('keyup', function (e) {
                    // only auto number when a key between 'A' and 'Z' is pressed
                    if (e.which >= 65 && e.which <= 90)
                        _this.getNextNumber();
                });
            }
            DepotDialog.prototype.getFormKey = function () { return Inventory.DepotForm.formKey; };
            DepotDialog.prototype.getIdProperty = function () { return Inventory.DepotRow.idProperty; };
            DepotDialog.prototype.getLocalTextPrefix = function () { return Inventory.DepotRow.localTextPrefix; };
            DepotDialog.prototype.getNameProperty = function () { return Inventory.DepotRow.nameProperty; };
            DepotDialog.prototype.getService = function () { return Inventory.DepotService.baseUrl; };
            DepotDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // fill next number in new record mode
                if (this.isNew())
                    this.getNextNumber();
            };
            DepotDialog.prototype.getNextNumber = function () {
                var _this = this;
                var val = Q.trimToNull(this.form.DepotID.value);
                // we will only get next number when customer ID is empty or 1 character in length
                if (!val || val.length <= 1) {
                    // if no customer ID yet (new record mode probably) use 'C' as a prefix
                    var prefix = (val || 'CK').toUpperCase();
                    // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                    ERP.Inventory.DepotService.GetNextNumber({
                        Prefix: prefix,
                        Length: 5 // we want service to search for and return serials of 5 in length
                    }, function (response) {
                        _this.form.DepotID.value = response.Serial;
                        // this is to mark numerical part after prefix
                        _this.form.DepotID.element[0].setSelectionRange(prefix.length, response.Serial.length);
                    });
                }
            };
            DepotDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], DepotDialog);
            return DepotDialog;
        }(Serenity.EntityDialog));
        Inventory.DepotDialog = DepotDialog;
    })(Inventory = ERP.Inventory || (ERP.Inventory = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Inventory;
    (function (Inventory) {
        var DepotGrid = (function (_super) {
            __extends(DepotGrid, _super);
            function DepotGrid(container) {
                _super.call(this, container);
            }
            DepotGrid.prototype.getColumnsKey = function () { return 'Inventory.Depot'; };
            DepotGrid.prototype.getDialogType = function () { return Inventory.DepotDialog; };
            DepotGrid.prototype.getIdProperty = function () { return Inventory.DepotRow.idProperty; };
            DepotGrid.prototype.getLocalTextPrefix = function () { return Inventory.DepotRow.localTextPrefix; };
            DepotGrid.prototype.getService = function () { return Inventory.DepotService.baseUrl; };
            DepotGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DepotGrid);
            return DepotGrid;
        }(Serenity.EntityGrid));
        Inventory.DepotGrid = DepotGrid;
    })(Inventory = ERP.Inventory || (ERP.Inventory = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Inventory;
    (function (Inventory) {
        var DepotStockDialog = (function (_super) {
            __extends(DepotStockDialog, _super);
            function DepotStockDialog() {
                _super.apply(this, arguments);
                this.form = new Inventory.DepotStockForm(this.idPrefix);
            }
            DepotStockDialog.prototype.getFormKey = function () { return Inventory.DepotStockForm.formKey; };
            DepotStockDialog.prototype.getIdProperty = function () { return Inventory.DepotStockRow.idProperty; };
            DepotStockDialog.prototype.getLocalTextPrefix = function () { return Inventory.DepotStockRow.localTextPrefix; };
            DepotStockDialog.prototype.getNameProperty = function () { return Inventory.DepotStockRow.nameProperty; };
            DepotStockDialog.prototype.getService = function () { return Inventory.DepotStockService.baseUrl; };
            DepotStockDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], DepotStockDialog);
            return DepotStockDialog;
        }(Serenity.EntityDialog));
        Inventory.DepotStockDialog = DepotStockDialog;
    })(Inventory = ERP.Inventory || (ERP.Inventory = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Inventory;
    (function (Inventory) {
        var DepotStockGrid = (function (_super) {
            __extends(DepotStockGrid, _super);
            function DepotStockGrid(container) {
                _super.call(this, container);
            }
            DepotStockGrid.prototype.getColumnsKey = function () { return 'Inventory.DepotStock'; };
            DepotStockGrid.prototype.getDialogType = function () { return Inventory.DepotStockDialog; };
            DepotStockGrid.prototype.getIdProperty = function () { return Inventory.DepotStockRow.idProperty; };
            DepotStockGrid.prototype.getLocalTextPrefix = function () { return Inventory.DepotStockRow.localTextPrefix; };
            DepotStockGrid.prototype.getService = function () { return Inventory.DepotStockService.baseUrl; };
            DepotStockGrid.prototype.createSlickGrid = function () {
                var grid = _super.prototype.createSlickGrid.call(this);
                // need to register this plugin for grouping or you'll have errors
                grid.registerPlugin(new Slick.Data.GroupItemMetadataProvider());
                this.view.setSummaryOptions({
                    aggregators: [
                        new Slick.Aggregators.Sum('Quantity')
                    ]
                });
                return grid;
            };
            DepotStockGrid.prototype.getSlickOptions = function () {
                var opt = _super.prototype.getSlickOptions.call(this);
                opt.showFooterRow = true;
                return opt;
            };
            DepotStockGrid.prototype.usePager = function () {
                return false;
            };
            DepotStockGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push({
                    title: 'Group By Product',
                    cssClass: 'expand-all-button',
                    onClick: function () { return _this.view.setGrouping([{
                            getter: 'ProductName'
                        }]); }
                });
                buttons.push({
                    title: 'Group By Depot and Product',
                    cssClass: 'expand-all-button',
                    onClick: function () { return _this.view.setGrouping([{
                            formatter: function (x) { return 'Depot: ' + x.value + ' (' + x.count + ' items)'; },
                            getter: 'DepotDepotName'
                        }, {
                            formatter: function (x) { return 'Product: ' + x.value + ' (' + x.count + ' items)'; },
                            getter: 'ProductName'
                        }]); }
                });
                buttons.push({
                    title: 'No Grouping',
                    cssClass: 'collapse-all-button',
                    onClick: function () { return _this.view.setGrouping([]); }
                });
                return buttons;
            };
            DepotStockGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], DepotStockGrid);
            return DepotStockGrid;
        }(Serenity.EntityGrid));
        Inventory.DepotStockGrid = DepotStockGrid;
    })(Inventory = ERP.Inventory || (ERP.Inventory = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Inventory;
    (function (Inventory) {
        var ICStateFormatter = (function () {
            function ICStateFormatter() {
            }
            ICStateFormatter.prototype.format = function (ctx) {
                var text = Q.htmlEncode(ctx.value);
                return "<span class='" + (ctx.value === 1 ?
                    'employee-symbol female' : 'employee-symbol male') +
                    "'></span>";
            };
            ICStateFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], ICStateFormatter);
            return ICStateFormatter;
        }());
        Inventory.ICStateFormatter = ICStateFormatter;
    })(Inventory = ERP.Inventory || (ERP.Inventory = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Inventory;
    (function (Inventory) {
        var InventoryCountDialog = (function (_super) {
            __extends(InventoryCountDialog, _super);
            function InventoryCountDialog() {
                var _this = this;
                _super.call(this);
                this.form = new Inventory.InventoryCountForm(this.idPrefix);
                this.form.InventoryId.element.on('keyup', function (e) {
                    // only auto number when a key between 'A' and 'Z' is pressed
                    if (e.which >= 65 && e.which <= 90)
                        _this.getNextNumber();
                });
                this.form.DepotID.change(function (e) {
                    _this.form.DetailList.depotID = Q.toId(_this.form.DepotID.value);
                });
            }
            InventoryCountDialog.prototype.getFormKey = function () { return Inventory.InventoryCountForm.formKey; };
            InventoryCountDialog.prototype.getIdProperty = function () { return Inventory.InventoryCountRow.idProperty; };
            InventoryCountDialog.prototype.getLocalTextPrefix = function () { return Inventory.InventoryCountRow.localTextPrefix; };
            InventoryCountDialog.prototype.getNameProperty = function () { return Inventory.InventoryCountRow.nameProperty; };
            InventoryCountDialog.prototype.getService = function () { return Inventory.InventoryCountService.baseUrl; };
            InventoryCountDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // fill next number in new record mode
                if (this.isNew())
                    this.getNextNumber();
                if (!this.isNew()) {
                    this.setSaveButtonState();
                }
                //if (this.isNew()) {
                //    this.applyChangesButton.hide();
                //    this.deleteButton.hide();
                //    this.saveAndCloseButton.hide();
                //}
            };
            InventoryCountDialog.prototype.getNextNumber = function () {
                var _this = this;
                var flag = 'IC' + Q.formatDate(new Date(), "yyyyMMdd");
                var val = Q.trimToNull(this.form.InventoryId.value);
                // we will only get next number when customer ID is empty or 1 character in length
                if (!val || val.length <= 1) {
                    // if no customer ID yet (new record mode probably) use 'C' as a prefix
                    var prefix = (val || flag).toUpperCase();
                    // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                    ERP.Inventory.InventoryCountService.GetNextNumber({
                        Prefix: prefix,
                        Length: 14 // we want service to search for and return serials of 5 in length
                    }, function (response) {
                        _this.form.InventoryId.value = response.Serial;
                        // this is to mark numerical part after prefix
                        _this.form.InventoryId.element[0].setSelectionRange(prefix.length, response.Serial.length);
                    });
                }
            };
            InventoryCountDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: "审核",
                    cssClass: 'apply-changes-button disabled',
                    onClick: function (e) { return _this.saveClick(); },
                    separator: true
                });
                return buttons;
            };
            InventoryCountDialog.prototype.setSaveButtonState = function () {
                this.toolbar.findButton('apply-changes-button').toggleClass('disabled', this.entity.State === 1);
            };
            InventoryCountDialog.prototype.saveClick = function () {
                var self = this;
                for (var _i = 0, _a = self.entity.DetailList; _i < _a.length; _i++) {
                    var c = _a[_i];
                    var entity = new Object();
                    var entity1 = entity;
                    entity1.DepotID = self.entity.DepotID;
                    entity1.ProductID = c.ProductID;
                    entity1.ColorID = c.ColorID;
                    entity1.SizeID = c.SizeID;
                    entity1.Quantity = c.Quantity;
                    var ds = this.getDepotStock(entity1.DepotID, entity1.ProductID, entity1.ColorID, entity1.SizeID);
                    if (ds != null) {
                        Q.serviceRequest('Inventory/DepotStock/Update', {
                            EntityId: ds.Id,
                            Entity: entity1
                        }, function (response) {
                            //delete self.pendingChanges[key];
                            //saveNext();
                            self.entity.State = 1;
                            Q.serviceRequest('Inventory/InventoryCount/Update', {
                                EntityId: self.entityId,
                                Entity: self.entity
                            }, function (response) {
                                //delete self.pendingChanges[key];
                                //saveNext();
                            });
                            self.reloadById();
                        });
                    }
                    else {
                        Q.serviceRequest('Inventory/DepotStock/Create', {
                            //EntityId: self.entityId,
                            Entity: entity1
                        }, function (response) {
                            //delete self.pendingChanges[key];
                            //saveNext();
                            self.entity.State = 1;
                            Q.serviceRequest('Inventory/InventoryCount/Update', {
                                EntityId: self.entityId,
                                Entity: self.entity
                            }, function (response) {
                                //delete self.pendingChanges[key];
                                //saveNext();
                            });
                            self.reloadById();
                        });
                    }
                }
            };
            InventoryCountDialog.prototype.getDepotStock = function (a, b, c, d) {
                var DepotID = a;
                var ProductID = b;
                var ColorID = c;
                var SizeID = d;
                var sameProduct = Q.tryFirst(ERP.Inventory.DepotStockRow.getLookup().items, function (x) { return (x.ProductID === ProductID)
                    && (x.ColorID === ColorID)
                    && (x.SizeID === SizeID)
                    && (x.DepotID === DepotID); });
                if (sameProduct) {
                    return sameProduct;
                }
                return null;
            };
            InventoryCountDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.maximizable()
            ], InventoryCountDialog);
            return InventoryCountDialog;
        }(Serenity.EntityDialog));
        Inventory.InventoryCountDialog = InventoryCountDialog;
    })(Inventory = ERP.Inventory || (ERP.Inventory = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Inventory;
    (function (Inventory) {
        var InventoryCountGrid = (function (_super) {
            __extends(InventoryCountGrid, _super);
            function InventoryCountGrid(container) {
                _super.call(this, container);
            }
            InventoryCountGrid.prototype.getColumnsKey = function () { return 'Inventory.InventoryCount'; };
            InventoryCountGrid.prototype.getDialogType = function () { return Inventory.InventoryCountDialog; };
            InventoryCountGrid.prototype.getIdProperty = function () { return Inventory.InventoryCountRow.idProperty; };
            InventoryCountGrid.prototype.getLocalTextPrefix = function () { return Inventory.InventoryCountRow.localTextPrefix; };
            InventoryCountGrid.prototype.getService = function () { return Inventory.InventoryCountService.baseUrl; };
            InventoryCountGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], InventoryCountGrid);
            return InventoryCountGrid;
        }(Serenity.EntityGrid));
        Inventory.InventoryCountGrid = InventoryCountGrid;
    })(Inventory = ERP.Inventory || (ERP.Inventory = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Inventory;
    (function (Inventory) {
        var InventoryCountDetailDialog = (function (_super) {
            __extends(InventoryCountDetailDialog, _super);
            function InventoryCountDetailDialog() {
                var _this = this;
                _super.call(this);
                this.form = new Inventory.InventoryCountDetailForm(this.idPrefix);
                // we can set cascade field in constructor
                // we could also use FilterField but in this case, when CategoryID is null
                // lookup editor would show all products in any category
                //this.form.ProductID.cascadeField = Inventory.DepotStockRow.Fields.DepotID;
                this.form.ColorID.cascadeFrom = "ProductID";
                this.form.SizeID.cascadeFrom = "ProductID";
                // but CategoryID value is not yet available here as detail editor will set it 
                // after calling constructor (creating a detail dialog) so we'll use BeforeLoadEntity
                this.form.ProductID.changeSelect2(function (e) {
                    _this.getDepotStock();
                });
                this.form.ColorID.changeSelect2(function (e) {
                    _this.getDepotStock();
                });
                this.form.SizeID.changeSelect2(function (e) {
                    _this.getDepotStock();
                });
                //this.form.Discount.addValidationRule(this.uniqueName, e => {
                //    var price = this.form.UnitPrice.value;
                //    var quantity = this.form.Quantity.value;
                //    var discount = this.form.Discount.value;
                //    if (price != null && quantity != null && discount != null &&
                //        discount > 0 && discount >= price * quantity) {
                //        return "Discount can't be higher than total price!";
                //    }
                //});
            }
            InventoryCountDetailDialog.prototype.getFormKey = function () { return Inventory.InventoryCountDetailForm.formKey; };
            InventoryCountDetailDialog.prototype.getLocalTextPrefix = function () { return Inventory.InventoryCountDetailRow.localTextPrefix; };
            InventoryCountDetailDialog.prototype.getDepotStock = function () {
                var _this = this;
                var ProductID = parseInt(this.form.ProductID.value);
                var ColorID = parseInt(this.form.ColorID.value);
                var SizeID = parseInt(this.form.SizeID.value);
                var sameProduct = Q.tryFirst(ERP.Inventory.DepotStockRow.getLookup().items, function (x) { return (x.ProductID === ProductID)
                    && (x.ColorID === ColorID)
                    && (x.SizeID === SizeID)
                    && (x.DepotID === _this.depotID); });
                if (sameProduct) {
                    this.form.Quantity.value = sameProduct.Quantity;
                    this.form.OriginalQuantity.value = sameProduct.Quantity;
                }
            };
            InventoryCountDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], InventoryCountDetailDialog);
            return InventoryCountDetailDialog;
        }(ERP.Common.GridEditorDialog));
        Inventory.InventoryCountDetailDialog = InventoryCountDetailDialog;
    })(Inventory = ERP.Inventory || (ERP.Inventory = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Inventory;
    (function (Inventory) {
        var InventoryCountDetailGrid = (function (_super) {
            __extends(InventoryCountDetailGrid, _super);
            function InventoryCountDetailGrid(container) {
                _super.call(this, container);
            }
            InventoryCountDetailGrid.prototype.getColumnsKey = function () { return 'Inventory.InventoryCountDetail'; };
            InventoryCountDetailGrid.prototype.getDialogType = function () { return Inventory.InventoryCountDetailDialog; };
            InventoryCountDetailGrid.prototype.getIdProperty = function () { return Inventory.InventoryCountDetailRow.idProperty; };
            InventoryCountDetailGrid.prototype.getLocalTextPrefix = function () { return Inventory.InventoryCountDetailRow.localTextPrefix; };
            InventoryCountDetailGrid.prototype.getService = function () { return Inventory.InventoryCountDetailService.baseUrl; };
            InventoryCountDetailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], InventoryCountDetailGrid);
            return InventoryCountDetailGrid;
        }(Serenity.EntityGrid));
        Inventory.InventoryCountDetailGrid = InventoryCountDetailGrid;
    })(Inventory = ERP.Inventory || (ERP.Inventory = {}));
})(ERP || (ERP = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var ERP;
(function (ERP) {
    var Inventory;
    (function (Inventory) {
        var InventoryCountDetailsEditor = (function (_super) {
            __extends(InventoryCountDetailsEditor, _super);
            function InventoryCountDetailsEditor(container) {
                _super.call(this, container);
            }
            InventoryCountDetailsEditor.prototype.getColumnsKey = function () { return 'Inventory.InventoryCountDetail'; };
            InventoryCountDetailsEditor.prototype.getDialogType = function () { return Inventory.InventoryCountDetailDialog; };
            InventoryCountDetailsEditor.prototype.getLocalTextPrefix = function () { return Inventory.InventoryCountDetailRow.localTextPrefix; };
            /**
             * This method is called to initialize an edit dialog created by
             * grid editor when Add button or an edit link is clicked
             * We have an opportunity here to pass CategoryID to edit dialog
             */
            InventoryCountDetailsEditor.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                // passing category ID from grid editor to detail dialog
                dialog.depotID = this.depotID;
            };
            InventoryCountDetailsEditor.prototype.validateEntity = function (row, id) {
                row.ProductID = Q.toId(row.ProductID);
                row.ColorID = Q.toId(row.ColorID);
                row.SizeID = Q.toId(row.SizeID);
                var sameProduct = Q.tryFirst(this.view.getItems(), function (x) { return (x.ProductID === row.ProductID) && (x.ColorID === row.ColorID) && (x.SizeID === row.SizeID); });
                if (sameProduct && this.id(sameProduct) !== id) {
                    Q.alert('This product is already in order details!');
                    return false;
                }
                row.ProductName = ERP.Basic.ProductRow.getLookup().itemById[row.ProductID].ProductName;
                row.ColorName = ERP.Basic.ProductColorRow.getLookup().itemById[row.ColorID].ColorName;
                row.SizeName = ERP.Basic.ProductSizeRow.getLookup().itemById[row.SizeID].SizeName;
                //row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
                return true;
            };
            InventoryCountDetailsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], InventoryCountDetailsEditor);
            return InventoryCountDetailsEditor;
        }(ERP.Common.GridEditorBase));
        Inventory.InventoryCountDetailsEditor = InventoryCountDetailsEditor;
    })(Inventory = ERP.Inventory || (ERP.Inventory = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Membership;
    (function (Membership) {
        var LoginPanel = (function (_super) {
            __extends(LoginPanel, _super);
            function LoginPanel(container) {
                var _this = this;
                _super.call(this, container);
                $(function () {
                    $('body').vegas({
                        delay: 10000,
                        cover: true,
                        overlay: Q.resolveUrl("~/scripts/vegas/overlays/01.png"),
                        slides: [
                            { src: Q.resolveUrl('~/content/site/slides/slide1.jpg'), transition: 'fade' },
                            { src: Q.resolveUrl('~/content/site/slides/slide2.jpg'), transition: 'fade' },
                            { src: Q.resolveUrl('~/content/site/slides/slide3.jpg'), transition: 'zoomOut' },
                            { src: Q.resolveUrl('~/content/site/slides/slide4.jpg'), transition: 'blur' },
                            { src: Q.resolveUrl('~/content/site/slides/slide5.jpg'), transition: 'swirlLeft' }
                        ]
                    });
                });
                this.form = new Membership.LoginForm(this.idPrefix);
                this.byId('LoginButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/Login'),
                        request: request,
                        onSuccess: function (response) {
                            var q = Q.parseQueryString();
                            var returnUrl = q['returnUrl'] || q['ReturnUrl'];
                            if (returnUrl) {
                                window.location.href = returnUrl;
                            }
                            else {
                                window.location.href = Q.resolveUrl('~/');
                            }
                        }
                    });
                });
            }
            LoginPanel.prototype.getFormKey = function () { return Membership.LoginForm.formKey; };
            LoginPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], LoginPanel);
            return LoginPanel;
        }(Serenity.PropertyPanel));
        Membership.LoginPanel = LoginPanel;
    })(Membership = ERP.Membership || (ERP.Membership = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Membership;
    (function (Membership) {
        var ChangePasswordPanel = (function (_super) {
            __extends(ChangePasswordPanel, _super);
            function ChangePasswordPanel(container) {
                var _this = this;
                _super.call(this, container);
                this.form = new Membership.ChangePasswordForm(this.idPrefix);
                this.form.NewPassword.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.w('ConfirmPassword', Serenity.PasswordEditor).value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                this.form.ConfirmPassword.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ChangePassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ChangePassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
            }
            ChangePasswordPanel.prototype.getFormKey = function () { return Membership.ChangePasswordForm.formKey; };
            ChangePasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ChangePasswordPanel);
            return ChangePasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ChangePasswordPanel = ChangePasswordPanel;
    })(Membership = ERP.Membership || (ERP.Membership = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Membership;
    (function (Membership) {
        var ForgotPasswordPanel = (function (_super) {
            __extends(ForgotPasswordPanel, _super);
            function ForgotPasswordPanel(container) {
                var _this = this;
                _super.call(this, container);
                this.form = new Membership.ForgotPasswordForm(this.idPrefix);
                this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ForgotPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ForgotPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
            }
            ForgotPasswordPanel.prototype.getFormKey = function () { return Membership.ForgotPasswordForm.formKey; };
            ForgotPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ForgotPasswordPanel);
            return ForgotPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ForgotPasswordPanel = ForgotPasswordPanel;
    })(Membership = ERP.Membership || (ERP.Membership = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Membership;
    (function (Membership) {
        var ResetPasswordPanel = (function (_super) {
            __extends(ResetPasswordPanel, _super);
            function ResetPasswordPanel(container) {
                var _this = this;
                _super.call(this, container);
                this.form = new Membership.ResetPasswordForm(this.idPrefix);
                this.form.NewPassword.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value.length < 7) {
                        return Q.format(Q.text('Validation.MinRequiredPasswordLength'), 7);
                    }
                });
                this.form.ConfirmPassword.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.NewPassword.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    var request = _this.getSaveEntity();
                    request.Token = _this.byId('Token').val();
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/ResetPassword'),
                        request: request,
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.ResetPassword.Success'), function () {
                                window.location.href = Q.resolveUrl('~/Account/Login');
                            });
                        }
                    });
                });
            }
            ResetPasswordPanel.prototype.getFormKey = function () { return Membership.ResetPasswordForm.formKey; };
            ResetPasswordPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], ResetPasswordPanel);
            return ResetPasswordPanel;
        }(Serenity.PropertyPanel));
        Membership.ResetPasswordPanel = ResetPasswordPanel;
    })(Membership = ERP.Membership || (ERP.Membership = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Membership;
    (function (Membership) {
        var SignUpPanel = (function (_super) {
            __extends(SignUpPanel, _super);
            function SignUpPanel(container) {
                var _this = this;
                _super.call(this, container);
                this.form = new Membership.SignUpForm(this.idPrefix);
                this.form.ConfirmEmail.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.ConfirmEmail.value !== _this.form.Email.value) {
                        return Q.text('Validation.EmailConfirm');
                    }
                });
                this.form.ConfirmPassword.addValidationRule(this.uniqueName, function (e) {
                    if (_this.form.ConfirmPassword.value !== _this.form.Password.value) {
                        return Q.text('Validation.PasswordConfirm');
                    }
                });
                this.byId('SubmitButton').click(function (e) {
                    e.preventDefault();
                    if (!_this.validateForm()) {
                        return;
                    }
                    Q.serviceCall({
                        url: Q.resolveUrl('~/Account/SignUp'),
                        request: {
                            DisplayName: _this.form.DisplayName.value,
                            Email: _this.form.Email.value,
                            Password: _this.form.Password.value
                        },
                        onSuccess: function (response) {
                            Q.information(Q.text('Forms.Membership.SignUp.Success'), function () {
                                window.location.href = Q.resolveUrl('~/');
                            });
                        }
                    });
                });
            }
            SignUpPanel.prototype.getFormKey = function () { return Membership.SignUpForm.formKey; };
            SignUpPanel = __decorate([
                Serenity.Decorators.registerClass()
            ], SignUpPanel);
            return SignUpPanel;
        }(Serenity.PropertyPanel));
        Membership.SignUpPanel = SignUpPanel;
    })(Membership = ERP.Membership || (ERP.Membership = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Purchase;
    (function (Purchase) {
        var PurchaseDetailDialog = (function (_super) {
            __extends(PurchaseDetailDialog, _super);
            function PurchaseDetailDialog() {
                _super.call(this);
                this.form = new Purchase.PurchaseDetailForm(this.idPrefix);
                // we can set cascade field in constructor
                // we could also use FilterField but in this case, when CategoryID is null
                // lookup editor would show all products in any category
                //this.form.ProductID.cascadeField = Inventory.DepotStockRow.Fields.DepotID;
                this.form.ColorID.cascadeFrom = "ProductID";
                this.form.SizeID.cascadeFrom = "ProductID";
                // but CategoryID value is not yet available here as detail editor will set it 
                // after calling constructor (creating a detail dialog) so we'll use BeforeLoadEntity
                //this.form.Discount.addValidationRule(this.uniqueName, e => {
                //    var price = this.form.UnitPrice.value;
                //    var quantity = this.form.Quantity.value;
                //    var discount = this.form.Discount.value;
                //    if (price != null && quantity != null && discount != null &&
                //        discount > 0 && discount >= price * quantity) {
                //        return "Discount can't be higher than total price!";
                //    }
                //});
            }
            PurchaseDetailDialog.prototype.getFormKey = function () { return Purchase.PurchaseDetailForm.formKey; };
            PurchaseDetailDialog.prototype.getLocalTextPrefix = function () { return Purchase.PurchaseDetailRow.localTextPrefix; };
            PurchaseDetailDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], PurchaseDetailDialog);
            return PurchaseDetailDialog;
        }(ERP.Common.GridEditorDialog));
        Purchase.PurchaseDetailDialog = PurchaseDetailDialog;
    })(Purchase = ERP.Purchase || (ERP.Purchase = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Purchase;
    (function (Purchase) {
        var PurchaseDetailGrid = (function (_super) {
            __extends(PurchaseDetailGrid, _super);
            function PurchaseDetailGrid(container) {
                _super.call(this, container);
            }
            PurchaseDetailGrid.prototype.getColumnsKey = function () { return 'Purchase.PurchaseDetail'; };
            PurchaseDetailGrid.prototype.getDialogType = function () { return Purchase.PurchaseDetailDialog; };
            PurchaseDetailGrid.prototype.getIdProperty = function () { return Purchase.PurchaseDetailRow.idProperty; };
            PurchaseDetailGrid.prototype.getLocalTextPrefix = function () { return Purchase.PurchaseDetailRow.localTextPrefix; };
            PurchaseDetailGrid.prototype.getService = function () { return Purchase.PurchaseDetailService.baseUrl; };
            PurchaseDetailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchaseDetailGrid);
            return PurchaseDetailGrid;
        }(Serenity.EntityGrid));
        Purchase.PurchaseDetailGrid = PurchaseDetailGrid;
    })(Purchase = ERP.Purchase || (ERP.Purchase = {}));
})(ERP || (ERP = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var ERP;
(function (ERP) {
    var Purchase;
    (function (Purchase) {
        var PurchaseDetailsEditor = (function (_super) {
            __extends(PurchaseDetailsEditor, _super);
            function PurchaseDetailsEditor(container) {
                _super.call(this, container);
            }
            PurchaseDetailsEditor.prototype.getColumnsKey = function () { return 'Purchase.PurchaseDetail'; };
            PurchaseDetailsEditor.prototype.getDialogType = function () { return Purchase.PurchaseDetailDialog; };
            PurchaseDetailsEditor.prototype.getLocalTextPrefix = function () { return Purchase.PurchaseDetailRow.localTextPrefix; };
            /**
             * This method is called to initialize an edit dialog created by
             * grid editor when Add button or an edit link is clicked
             * We have an opportunity here to pass CategoryID to edit dialog
             */
            PurchaseDetailsEditor.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                // passing category ID from grid editor to detail dialog
                dialog.depotID = this.depotID;
            };
            PurchaseDetailsEditor.prototype.validateEntity = function (row, id) {
                row.ProductID = Q.toId(row.ProductID);
                row.ColorID = Q.toId(row.ColorID);
                row.SizeID = Q.toId(row.SizeID);
                var sameProduct = Q.tryFirst(this.view.getItems(), function (x) { return (x.ProductID === row.ProductID) && (x.ColorID === row.ColorID) && (x.SizeID === row.SizeID); });
                if (sameProduct && this.id(sameProduct) !== id) {
                    Q.alert('This product is already in purchase details!');
                    return false;
                }
                row.ProductName = ERP.Basic.ProductRow.getLookup().itemById[row.ProductID].ProductName;
                row.ColorName = ERP.Basic.ProductColorRow.getLookup().itemById[row.ColorID].ColorName;
                row.SizeName = ERP.Basic.ProductSizeRow.getLookup().itemById[row.SizeID].SizeName;
                //row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
                return true;
            };
            PurchaseDetailsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchaseDetailsEditor);
            return PurchaseDetailsEditor;
        }(ERP.Common.GridEditorBase));
        Purchase.PurchaseDetailsEditor = PurchaseDetailsEditor;
    })(Purchase = ERP.Purchase || (ERP.Purchase = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Purchase;
    (function (Purchase) {
        var PurchaseListDialog = (function (_super) {
            __extends(PurchaseListDialog, _super);
            function PurchaseListDialog() {
                var _this = this;
                _super.call(this);
                this.form = new Purchase.PurchaseListForm(this.idPrefix);
                this.form.PurchaseId.element.on('keyup', function (e) {
                    // only auto number when a key between 'A' and 'Z' is pressed
                    if (e.which >= 65 && e.which <= 90)
                        _this.getNextNumber();
                });
                //this.form.DepotID.change(e => {
                //    this.form.DetailList.depotID = Q.toId(this.form.DepotID.value);
                //});
            }
            PurchaseListDialog.prototype.getFormKey = function () { return Purchase.PurchaseListForm.formKey; };
            PurchaseListDialog.prototype.getIdProperty = function () { return Purchase.PurchaseListRow.idProperty; };
            PurchaseListDialog.prototype.getLocalTextPrefix = function () { return Purchase.PurchaseListRow.localTextPrefix; };
            PurchaseListDialog.prototype.getNameProperty = function () { return Purchase.PurchaseListRow.nameProperty; };
            PurchaseListDialog.prototype.getService = function () { return Purchase.PurchaseListService.baseUrl; };
            PurchaseListDialog.prototype.afterLoadEntity = function () {
                _super.prototype.afterLoadEntity.call(this);
                // fill next number in new record mode
                if (this.isNew())
                    this.getNextNumber();
                if (!this.isNew()) {
                    this.setSaveButtonState();
                }
                //if (this.isNew()) {
                //    this.applyChangesButton.hide();
                //    this.deleteButton.hide();
                //    this.saveAndCloseButton.hide();
                //}
            };
            PurchaseListDialog.prototype.getNextNumber = function () {
                var _this = this;
                var flag = 'PC' + Q.formatDate(new Date(), "yyyyMMdd");
                var val = Q.trimToNull(this.form.PurchaseId.value);
                // we will only get next number when customer ID is empty or 1 character in length
                if (!val || val.length <= 1) {
                    // if no customer ID yet (new record mode probably) use 'C' as a prefix
                    var prefix = (val || flag).toUpperCase();
                    // call our service, see CustomerEndpoint.cs and CustomerRepository.cs
                    ERP.Purchase.PurchaseListService.GetNextNumber({
                        Prefix: prefix,
                        Length: 14 // we want service to search for and return serials of 5 in length
                    }, function (response) {
                        _this.form.PurchaseId.value = response.Serial;
                        // this is to mark numerical part after prefix
                        _this.form.PurchaseId.element[0].setSelectionRange(prefix.length, response.Serial.length);
                    });
                }
            };
            PurchaseListDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push({
                    title: "审核",
                    cssClass: 'apply-changes-button disabled',
                    onClick: function (e) { return _this.saveClick(); },
                    separator: true
                });
                return buttons;
            };
            PurchaseListDialog.prototype.setSaveButtonState = function () {
                this.toolbar.findButton('apply-changes-button').toggleClass('disabled', this.entity.State === 1);
            };
            PurchaseListDialog.prototype.saveClick = function () {
                var self = this;
                for (var _i = 0, _a = self.entity.DetailList; _i < _a.length; _i++) {
                    var c = _a[_i];
                    var entity = new Object();
                    var entity1 = entity;
                    entity1.DepotID = self.entity.DepotID;
                    entity1.ProductID = c.ProductID;
                    entity1.ColorID = c.ColorID;
                    entity1.SizeID = c.SizeID;
                    var ds = this.getDepotStock(entity1.DepotID, entity1.ProductID, entity1.ColorID, entity1.SizeID);
                    if (ds != null) {
                        entity1.Quantity = ds.Quantity + c.Quantity;
                        Q.serviceRequest('Inventory/DepotStock/Update', {
                            EntityId: ds.Id,
                            Entity: entity1
                        }, function (response) {
                            //delete self.pendingChanges[key];
                            //saveNext();
                            self.entity.State = 1;
                            Q.serviceRequest('Purchase/PurchaseList/Update', {
                                EntityId: self.entityId,
                                Entity: self.entity
                            }, function (response) {
                                //delete self.pendingChanges[key];
                                //saveNext();
                            });
                            self.reloadById();
                        });
                    }
                    else {
                        entity1.Quantity = c.Quantity;
                        Q.serviceRequest('Inventory/DepotStock/Create', {
                            //EntityId: self.entityId,
                            Entity: entity1
                        }, function (response) {
                            //delete self.pendingChanges[key];
                            //saveNext();
                            self.entity.State = 1;
                            Q.serviceRequest('Purchase/PurchaseList/Update', {
                                EntityId: self.entityId,
                                Entity: self.entity
                            }, function (response) {
                                //delete self.pendingChanges[key];
                                //saveNext();
                            });
                            self.reloadById();
                        });
                    }
                }
            };
            PurchaseListDialog.prototype.getDepotStock = function (a, b, c, d) {
                Q.reloadLookup('Inventory.DepotStock');
                var DepotID = a;
                var ProductID = b;
                var ColorID = c;
                var SizeID = d;
                var sameProduct = Q.tryFirst(ERP.Inventory.DepotStockRow.getLookup().items, function (x) { return (x.ProductID === ProductID)
                    && (x.ColorID === ColorID)
                    && (x.SizeID === SizeID)
                    && (x.DepotID === DepotID); });
                if (sameProduct) {
                    return sameProduct;
                }
                return null;
            };
            PurchaseListDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], PurchaseListDialog);
            return PurchaseListDialog;
        }(Serenity.EntityDialog));
        Purchase.PurchaseListDialog = PurchaseListDialog;
    })(Purchase = ERP.Purchase || (ERP.Purchase = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Purchase;
    (function (Purchase) {
        var PurchaseListGrid = (function (_super) {
            __extends(PurchaseListGrid, _super);
            function PurchaseListGrid(container) {
                _super.call(this, container);
            }
            PurchaseListGrid.prototype.getColumnsKey = function () { return 'Purchase.PurchaseList'; };
            PurchaseListGrid.prototype.getDialogType = function () { return Purchase.PurchaseListDialog; };
            PurchaseListGrid.prototype.getIdProperty = function () { return Purchase.PurchaseListRow.idProperty; };
            PurchaseListGrid.prototype.getLocalTextPrefix = function () { return Purchase.PurchaseListRow.localTextPrefix; };
            PurchaseListGrid.prototype.getService = function () { return Purchase.PurchaseListService.baseUrl; };
            PurchaseListGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchaseListGrid);
            return PurchaseListGrid;
        }(Serenity.EntityGrid));
        Purchase.PurchaseListGrid = PurchaseListGrid;
    })(Purchase = ERP.Purchase || (ERP.Purchase = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Purchase;
    (function (Purchase) {
        var PurchaseOrderDialog = (function (_super) {
            __extends(PurchaseOrderDialog, _super);
            function PurchaseOrderDialog() {
                _super.apply(this, arguments);
                this.form = new Purchase.PurchaseOrderForm(this.idPrefix);
            }
            PurchaseOrderDialog.prototype.getFormKey = function () { return Purchase.PurchaseOrderForm.formKey; };
            PurchaseOrderDialog.prototype.getIdProperty = function () { return Purchase.PurchaseOrderRow.idProperty; };
            PurchaseOrderDialog.prototype.getLocalTextPrefix = function () { return Purchase.PurchaseOrderRow.localTextPrefix; };
            PurchaseOrderDialog.prototype.getNameProperty = function () { return Purchase.PurchaseOrderRow.nameProperty; };
            PurchaseOrderDialog.prototype.getService = function () { return Purchase.PurchaseOrderService.baseUrl; };
            PurchaseOrderDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], PurchaseOrderDialog);
            return PurchaseOrderDialog;
        }(Serenity.EntityDialog));
        Purchase.PurchaseOrderDialog = PurchaseOrderDialog;
    })(Purchase = ERP.Purchase || (ERP.Purchase = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Purchase;
    (function (Purchase) {
        var PurchaseOrderGrid = (function (_super) {
            __extends(PurchaseOrderGrid, _super);
            function PurchaseOrderGrid(container) {
                _super.call(this, container);
            }
            PurchaseOrderGrid.prototype.getColumnsKey = function () { return 'Purchase.PurchaseOrder'; };
            PurchaseOrderGrid.prototype.getDialogType = function () { return Purchase.PurchaseOrderDialog; };
            PurchaseOrderGrid.prototype.getIdProperty = function () { return Purchase.PurchaseOrderRow.idProperty; };
            PurchaseOrderGrid.prototype.getLocalTextPrefix = function () { return Purchase.PurchaseOrderRow.localTextPrefix; };
            PurchaseOrderGrid.prototype.getService = function () { return Purchase.PurchaseOrderService.baseUrl; };
            PurchaseOrderGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchaseOrderGrid);
            return PurchaseOrderGrid;
        }(Serenity.EntityGrid));
        Purchase.PurchaseOrderGrid = PurchaseOrderGrid;
    })(Purchase = ERP.Purchase || (ERP.Purchase = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Purchase;
    (function (Purchase) {
        var PurchaseOrderDetailDialog = (function (_super) {
            __extends(PurchaseOrderDetailDialog, _super);
            function PurchaseOrderDetailDialog() {
                _super.apply(this, arguments);
                this.form = new Purchase.PurchaseOrderDetailForm(this.idPrefix);
            }
            PurchaseOrderDetailDialog.prototype.getFormKey = function () { return Purchase.PurchaseOrderDetailForm.formKey; };
            PurchaseOrderDetailDialog.prototype.getIdProperty = function () { return Purchase.PurchaseOrderDetailRow.idProperty; };
            PurchaseOrderDetailDialog.prototype.getLocalTextPrefix = function () { return Purchase.PurchaseOrderDetailRow.localTextPrefix; };
            PurchaseOrderDetailDialog.prototype.getNameProperty = function () { return Purchase.PurchaseOrderDetailRow.nameProperty; };
            PurchaseOrderDetailDialog.prototype.getService = function () { return Purchase.PurchaseOrderDetailService.baseUrl; };
            PurchaseOrderDetailDialog = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.responsive()
            ], PurchaseOrderDetailDialog);
            return PurchaseOrderDetailDialog;
        }(Serenity.EntityDialog));
        Purchase.PurchaseOrderDetailDialog = PurchaseOrderDetailDialog;
    })(Purchase = ERP.Purchase || (ERP.Purchase = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Purchase;
    (function (Purchase) {
        var PurchaseOrderDetailGrid = (function (_super) {
            __extends(PurchaseOrderDetailGrid, _super);
            function PurchaseOrderDetailGrid(container) {
                _super.call(this, container);
            }
            PurchaseOrderDetailGrid.prototype.getColumnsKey = function () { return 'Purchase.PurchaseOrderDetail'; };
            PurchaseOrderDetailGrid.prototype.getDialogType = function () { return Purchase.PurchaseOrderDetailDialog; };
            PurchaseOrderDetailGrid.prototype.getIdProperty = function () { return Purchase.PurchaseOrderDetailRow.idProperty; };
            PurchaseOrderDetailGrid.prototype.getLocalTextPrefix = function () { return Purchase.PurchaseOrderDetailRow.localTextPrefix; };
            PurchaseOrderDetailGrid.prototype.getService = function () { return Purchase.PurchaseOrderDetailService.baseUrl; };
            PurchaseOrderDetailGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], PurchaseOrderDetailGrid);
            return PurchaseOrderDetailGrid;
        }(Serenity.EntityGrid));
        Purchase.PurchaseOrderDetailGrid = PurchaseOrderDetailGrid;
    })(Purchase = ERP.Purchase || (ERP.Purchase = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Purchase;
    (function (Purchase) {
        var SupplierDialog = (function (_super) {
            __extends(SupplierDialog, _super);
            function SupplierDialog() {
                _super.apply(this, arguments);
                this.form = new Purchase.SupplierForm(this.idPrefix);
            }
            SupplierDialog.prototype.getFormKey = function () { return Purchase.SupplierForm.formKey; };
            SupplierDialog.prototype.getIdProperty = function () { return Purchase.SupplierRow.idProperty; };
            SupplierDialog.prototype.getLocalTextPrefix = function () { return Purchase.SupplierRow.localTextPrefix; };
            SupplierDialog.prototype.getNameProperty = function () { return Purchase.SupplierRow.nameProperty; };
            SupplierDialog.prototype.getService = function () { return Purchase.SupplierService.baseUrl; };
            SupplierDialog.prototype.getLanguages = function () {
                return ERP.LanguageList.getValue();
            };
            SupplierDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], SupplierDialog);
            return SupplierDialog;
        }(Serenity.EntityDialog));
        Purchase.SupplierDialog = SupplierDialog;
    })(Purchase = ERP.Purchase || (ERP.Purchase = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Purchase;
    (function (Purchase) {
        var SupplierGrid = (function (_super) {
            __extends(SupplierGrid, _super);
            function SupplierGrid(container) {
                _super.call(this, container);
            }
            SupplierGrid.prototype.getColumnsKey = function () { return "Purchase.Supplier"; };
            SupplierGrid.prototype.getDialogType = function () { return Purchase.SupplierDialog; };
            SupplierGrid.prototype.getIdProperty = function () { return Purchase.SupplierRow.idProperty; };
            SupplierGrid.prototype.getLocalTextPrefix = function () { return Purchase.SupplierRow.localTextPrefix; };
            SupplierGrid.prototype.getService = function () { return Purchase.SupplierService.baseUrl; };
            SupplierGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], SupplierGrid);
            return SupplierGrid;
        }(Serenity.EntityGrid));
        Purchase.SupplierGrid = SupplierGrid;
    })(Purchase = ERP.Purchase || (ERP.Purchase = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Sale;
    (function (Sale) {
        var CustomerDialog = (function (_super) {
            __extends(CustomerDialog, _super);
            function CustomerDialog() {
                var _this = this;
                _super.call(this);
                this.form = new Sale.CustomerForm(this.idPrefix);
                this.ordersGrid = new Sale.CustomerOrdersGrid(this.byId('OrdersGrid'));
                this.ordersGrid.element.flexHeightOnly(1);
                this.byId('NoteList').closest('.field').hide().end().appendTo(this.byId('TabNotes'));
                ERP.DialogUtils.pendingChangesConfirmation(this.element, function () { return _this.getSaveState() != _this.loadedState; });
                this.tabs.bind('tabsactivate', function () { return _this.arrange(); });
            }
            CustomerDialog.prototype.getFormKey = function () { return Sale.CustomerForm.formKey; };
            CustomerDialog.prototype.getIdProperty = function () { return Sale.CustomerRow.idProperty; };
            CustomerDialog.prototype.getLocalTextPrefix = function () { return Sale.CustomerRow.localTextPrefix; };
            CustomerDialog.prototype.getNameProperty = function () { return Sale.CustomerRow.nameProperty; };
            CustomerDialog.prototype.getService = function () { return Sale.CustomerService.baseUrl; };
            CustomerDialog.prototype.getSaveState = function () {
                try {
                    return $.toJSON(this.getSaveEntity());
                }
                catch (e) {
                    return null;
                }
            };
            CustomerDialog.prototype.loadResponse = function (data) {
                _super.prototype.loadResponse.call(this, data);
                this.loadedState = this.getSaveState();
            };
            CustomerDialog.prototype.loadEntity = function (entity) {
                _super.prototype.loadEntity.call(this, entity);
                Serenity.TabsExtensions.setDisabled(this.tabs, 'Orders', this.isNewOrDeleted());
                this.ordersGrid.customerID = entity.CustomerID;
            };
            CustomerDialog.prototype.onSaveSuccess = function (response) {
                _super.prototype.onSaveSuccess.call(this, response);
                Q.reloadLookup('Sale.Customer');
            };
            CustomerDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerDialog);
            return CustomerDialog;
        }(Serenity.EntityDialog));
        Sale.CustomerDialog = CustomerDialog;
    })(Sale = ERP.Sale || (ERP.Sale = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Sale;
    (function (Sale) {
        var CustomerEditor = (function (_super) {
            __extends(CustomerEditor, _super);
            function CustomerEditor(hidden) {
                _super.call(this, hidden);
            }
            CustomerEditor.prototype.getLookupKey = function () {
                return 'Sale.Customer';
            };
            CustomerEditor.prototype.getItemText = function (item, lookup) {
                return _super.prototype.getItemText.call(this, item, lookup) + ' [' + item.CustomerID + ']';
            };
            CustomerEditor = __decorate([
                Serenity.Decorators.registerEditor()
            ], CustomerEditor);
            return CustomerEditor;
        }(Serenity.LookupEditorBase));
        Sale.CustomerEditor = CustomerEditor;
    })(Sale = ERP.Sale || (ERP.Sale = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Sale;
    (function (Sale) {
        var CustomerGrid = (function (_super) {
            __extends(CustomerGrid, _super);
            function CustomerGrid(container) {
                _super.call(this, container);
            }
            CustomerGrid.prototype.getColumnsKey = function () { return "Sale.Customer"; };
            CustomerGrid.prototype.getDialogType = function () { return Sale.CustomerDialog; };
            CustomerGrid.prototype.getIdProperty = function () { return Sale.CustomerRow.idProperty; };
            CustomerGrid.prototype.getLocalTextPrefix = function () { return Sale.CustomerRow.localTextPrefix; };
            CustomerGrid.prototype.getService = function () { return Sale.CustomerService.baseUrl; };
            CustomerGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(ERP.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    service: 'Sale/Customer/ListExcel',
                    separator: true
                }));
                buttons.push(ERP.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            CustomerGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], CustomerGrid);
            return CustomerGrid;
        }(Serenity.EntityGrid));
        Sale.CustomerGrid = CustomerGrid;
    })(Sale = ERP.Sale || (ERP.Sale = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Sale;
    (function (Sale) {
        var OrderDialog = (function (_super) {
            __extends(OrderDialog, _super);
            function OrderDialog() {
                _super.call(this);
                this.form = new Sale.OrderForm(this.idPrefix);
            }
            OrderDialog.prototype.getFormKey = function () { return Sale.OrderForm.formKey; };
            OrderDialog.prototype.getIdProperty = function () { return Sale.OrderRow.idProperty; };
            OrderDialog.prototype.getLocalTextPrefix = function () { return Sale.OrderRow.localTextPrefix; };
            OrderDialog.prototype.getNameProperty = function () { return Sale.OrderRow.nameProperty; };
            OrderDialog.prototype.getService = function () { return Sale.OrderService.baseUrl; };
            OrderDialog.prototype.getToolbarButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getToolbarButtons.call(this);
                buttons.push(ERP.Common.ReportHelper.createToolButton({
                    title: 'Invoice',
                    cssClass: 'export-pdf-button',
                    reportKey: 'Sale.OrderDetail',
                    getParams: function () { return ({ OrderID: _this.get_entityId() }); }
                }));
                return buttons;
            };
            OrderDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderDialog);
            return OrderDialog;
        }(Serenity.EntityDialog));
        Sale.OrderDialog = OrderDialog;
    })(Sale = ERP.Sale || (ERP.Sale = {}));
})(ERP || (ERP = {}));
/// <reference path="../Order/OrderDialog.ts" />
var ERP;
(function (ERP) {
    var Sale;
    (function (Sale) {
        var CustomerOrderDialog = (function (_super) {
            __extends(CustomerOrderDialog, _super);
            function CustomerOrderDialog() {
                _super.call(this);
            }
            CustomerOrderDialog.prototype.updateInterface = function () {
                _super.prototype.updateInterface.call(this);
                Serenity.EditorUtils.setReadOnly(this.form.CustomerID, true);
            };
            CustomerOrderDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerOrderDialog);
            return CustomerOrderDialog;
        }(Sale.OrderDialog));
        Sale.CustomerOrderDialog = CustomerOrderDialog;
    })(Sale = ERP.Sale || (ERP.Sale = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Sale;
    (function (Sale) {
        var OrderGrid = (function (_super) {
            __extends(OrderGrid, _super);
            function OrderGrid(container) {
                _super.call(this, container);
            }
            OrderGrid.prototype.getColumnsKey = function () { return "Sale.Order"; };
            OrderGrid.prototype.getDialogType = function () { return Sale.OrderDialog; };
            OrderGrid.prototype.getIdProperty = function () { return Sale.OrderRow.idProperty; };
            OrderGrid.prototype.getLocalTextPrefix = function () { return Sale.OrderRow.localTextPrefix; };
            OrderGrid.prototype.getService = function () { return Sale.OrderService.baseUrl; };
            OrderGrid.prototype.createQuickFilters = function () {
                _super.prototype.createQuickFilters.call(this);
                var fld = Sale.OrderRow.Fields;
                this.shippingStateFilter = this.findQuickFilter(Serenity.EnumEditor, fld.ShippingState);
            };
            OrderGrid.prototype.getButtons = function () {
                var _this = this;
                var buttons = _super.prototype.getButtons.call(this);
                buttons.push(ERP.Common.ExcelExportHelper.createToolButton({
                    grid: this,
                    service: Sale.OrderService.baseUrl + '/ListExcel',
                    onViewSubmit: function () { return _this.onViewSubmit(); },
                    separator: true
                }));
                buttons.push(ERP.Common.PdfExportHelper.createToolButton({
                    grid: this,
                    onViewSubmit: function () { return _this.onViewSubmit(); }
                }));
                return buttons;
            };
            OrderGrid.prototype.set_shippingState = function (value) {
                this.shippingStateFilter.value = value == null ? '' : value.toString();
            };
            OrderGrid = __decorate([
                Serenity.Decorators.registerClass(),
                Serenity.Decorators.filterable()
            ], OrderGrid);
            return OrderGrid;
        }(Serenity.EntityGrid));
        Sale.OrderGrid = OrderGrid;
    })(Sale = ERP.Sale || (ERP.Sale = {}));
})(ERP || (ERP = {}));
/// <reference path="../Order/OrderGrid.ts" />
var ERP;
(function (ERP) {
    var Sale;
    (function (Sale) {
        var CustomerOrdersGrid = (function (_super) {
            __extends(CustomerOrdersGrid, _super);
            function CustomerOrdersGrid(container) {
                _super.call(this, container);
            }
            CustomerOrdersGrid.prototype.getDialogType = function () { return Sale.CustomerOrderDialog; };
            CustomerOrdersGrid.prototype.getColumns = function () {
                var fld = Sale.OrderRow.Fields;
                return _super.prototype.getColumns.call(this).filter(function (x) { return x.field !== fld.CustomerCompanyName; });
            };
            CustomerOrdersGrid.prototype.initEntityDialog = function (itemType, dialog) {
                _super.prototype.initEntityDialog.call(this, itemType, dialog);
                Serenity.SubDialogHelper.cascade(dialog, this.element.closest('.ui-dialog'));
            };
            CustomerOrdersGrid.prototype.addButtonClick = function () {
                this.editItem({ CustomerID: this.customerID });
            };
            CustomerOrdersGrid.prototype.getInitialTitle = function () {
                return null;
            };
            CustomerOrdersGrid.prototype.getGridCanLoad = function () {
                return _super.prototype.getGridCanLoad.call(this) && !!this.customerID;
            };
            Object.defineProperty(CustomerOrdersGrid.prototype, "customerID", {
                get: function () {
                    return this._customerID;
                },
                set: function (value) {
                    if (this._customerID !== value) {
                        this._customerID = value;
                        this.setEquality('CustomerID', value);
                        this.refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            CustomerOrdersGrid = __decorate([
                Serenity.Decorators.registerClass()
            ], CustomerOrdersGrid);
            return CustomerOrdersGrid;
        }(Sale.OrderGrid));
        Sale.CustomerOrdersGrid = CustomerOrdersGrid;
    })(Sale = ERP.Sale || (ERP.Sale = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Sale;
    (function (Sale) {
        var NoteDialog = (function (_super) {
            __extends(NoteDialog, _super);
            function NoteDialog() {
                _super.call(this);
                this.textEditor = new Serenity.HtmlNoteContentEditor(this.byId('Text'));
            }
            NoteDialog.prototype.getTemplate = function () {
                return ("<form id='~_Form' class='s-Form'>" +
                    "<textarea id='~_Text' class='required'></textarea>" +
                    "</form>");
            };
            NoteDialog.prototype.getDialogOptions = function () {
                var _this = this;
                var opt = _super.prototype.getDialogOptions.call(this);
                opt.buttons = [{
                        text: Q.text('Dialogs.OkButton'),
                        click: function () {
                            if (!_this.validateForm()) {
                                return;
                            }
                            _this.okClick && _this.okClick();
                        }
                    }, {
                        text: Q.text('Dialogs.CancelButton'),
                        click: function () { return _this.dialogClose(); }
                    }
                ];
                return opt;
            };
            Object.defineProperty(NoteDialog.prototype, "text", {
                get: function () {
                    return this.textEditor.value;
                },
                set: function (value) {
                    this.textEditor.value = value;
                },
                enumerable: true,
                configurable: true
            });
            NoteDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], NoteDialog);
            return NoteDialog;
        }(Serenity.TemplatedDialog));
        Sale.NoteDialog = NoteDialog;
    })(Sale = ERP.Sale || (ERP.Sale = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Sale;
    (function (Sale) {
        var NotesEditor = (function (_super) {
            __extends(NotesEditor, _super);
            function NotesEditor(div) {
                var _this = this;
                _super.call(this, div);
                new Serenity.Toolbar(this.byId('Toolbar'), {
                    buttons: [{
                            title: 'Add Note',
                            cssClass: 'add-button',
                            onClick: function (e) {
                                e.preventDefault();
                                _this.addClick();
                            }
                        }]
                });
            }
            NotesEditor.prototype.getTemplate = function () {
                return "<div><div id='~_Toolbar'></div><ul id='~_NoteList'></ul></div>";
            };
            NotesEditor.prototype.updateContent = function () {
                var _this = this;
                var noteList = this.byId('NoteList');
                noteList.children().remove();
                if (this.items) {
                    var index = 0;
                    for (var t1 = 0; t1 < this.items.length; t1++) {
                        var item = this.items[t1];
                        var li = $('<li/>');
                        $('<div/>').addClass('note-text').html(Q.coalesce(item.Text, '')).appendTo(li);
                        $('<a/>').attr('href', '#').addClass('note-date')
                            .text(item.InsertUserDisplayName + ' - ' +
                            Q.formatDate(Q.parseISODateTime(item.InsertDate), 'dd/MM/yyyy HH:mm'))
                            .data('index', index).appendTo(li).click(function (e) { return _this.editClick(e); });
                        $('<a/>').attr('href', '#').addClass('note-delete')
                            .attr('title', 'delete note').data('index', index)
                            .appendTo(li).click(function (e) { return _this.deleteClick(e); });
                        li.appendTo(noteList);
                        index++;
                    }
                }
            };
            NotesEditor.prototype.addClick = function () {
                var _this = this;
                var dlg = new Sale.NoteDialog();
                dlg.dialogTitle = 'Add Note';
                dlg.okClick = function () {
                    var text = Q.trimToNull(dlg.text);
                    if (text == null) {
                        return;
                    }
                    _this.items = _this.items || [];
                    Q.insert(_this.items, 0, {
                        Text: text,
                        InsertUserDisplayName: ERP.Authorization.userDefinition.DisplayName,
                        InsertDate: Q.formatISODateTimeUTC(new Date())
                    });
                    _this.updateContent();
                    dlg.dialogClose();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                };
                dlg.dialogOpen();
            };
            NotesEditor.prototype.editClick = function (e) {
                var _this = this;
                e.preventDefault();
                var index = $(e.target).data('index');
                var old = this.items[index];
                var dlg = new Sale.NoteDialog();
                dlg.dialogTitle = 'Edit Note';
                dlg.text = old.Text;
                dlg.okClick = function () {
                    var text = Q.trimToNull(dlg.text);
                    if (!text) {
                        return;
                    }
                    _this.items[index].Text = text;
                    _this.updateContent();
                    dlg.dialogClose();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                };
                dlg.dialogOpen();
            };
            NotesEditor.prototype.deleteClick = function (e) {
                var _this = this;
                e.preventDefault();
                var index = $(e.target).data('index');
                Q.confirm('Delete this note?', function () {
                    _this.items.splice(index, 1);
                    _this.updateContent();
                    _this.set_isDirty(true);
                    _this.onChange && _this.onChange();
                });
            };
            Object.defineProperty(NotesEditor.prototype, "value", {
                get: function () {
                    return this.items;
                },
                set: function (value) {
                    this.items = value || [];
                    this.set_isDirty(false);
                    this.updateContent();
                },
                enumerable: true,
                configurable: true
            });
            NotesEditor.prototype.getEditValue = function (prop, target) {
                target[prop.name] = this.value;
            };
            NotesEditor.prototype.setEditValue = function (source, prop) {
                this.value = source[prop.name] || [];
            };
            NotesEditor.prototype.get_isDirty = function () {
                return this.isDirty;
            };
            NotesEditor.prototype.set_isDirty = function (value) {
                this.isDirty = value;
            };
            NotesEditor = __decorate([
                Serenity.Decorators.registerEditor([Serenity.IGetEditValue, Serenity.ISetEditValue]),
                Serenity.Decorators.element("<div/>")
            ], NotesEditor);
            return NotesEditor;
        }(Serenity.TemplatedWidget));
        Sale.NotesEditor = NotesEditor;
    })(Sale = ERP.Sale || (ERP.Sale = {}));
})(ERP || (ERP = {}));
var ERP;
(function (ERP) {
    var Sale;
    (function (Sale) {
        var FreightFormatter = (function () {
            function FreightFormatter() {
            }
            FreightFormatter.prototype.format = function (ctx) {
                return "<span class='freight-symbol'>" + Q.htmlEncode(ctx.value) + '</span>';
            };
            FreightFormatter = __decorate([
                Serenity.Decorators.registerFormatter()
            ], FreightFormatter);
            return FreightFormatter;
        }());
        Sale.FreightFormatter = FreightFormatter;
    })(Sale = ERP.Sale || (ERP.Sale = {}));
})(ERP || (ERP = {}));
/// <reference path="../../Common/Helpers/BulkServiceAction.ts" />
var ERP;
(function (ERP) {
    var Sale;
    (function (Sale) {
        var OrderBulkAction = (function (_super) {
            __extends(OrderBulkAction, _super);
            function OrderBulkAction() {
                _super.apply(this, arguments);
            }
            /**
             * This controls how many service requests will be used in parallel.
             * Determine this number based on how many requests your server
             * might be able to handle, and amount of wait on external resources.
             */
            OrderBulkAction.prototype.getParallelRequests = function () {
                return 10;
            };
            /**
             * These number of records IDs will be sent to your service in one
             * service call. If your service is designed to handle one record only,
             * set it to 1. But note that, if you have 5000 records, this will
             * result in 5000 service calls / requests.
             */
            OrderBulkAction.prototype.getBatchSize = function () {
                return 5;
            };
            /**
             * This is where you should call your service.
             * Batch parameter contains the selected order IDs
             * that should be processed in this service call.
             */
            OrderBulkAction.prototype.executeForBatch = function (batch) {
                var _this = this;
                ERP.Basic.BasicService.OrderBulkAction({
                    OrderIDs: batch.map(function (x) { return Q.parseInteger(x); })
                }, function (response) { return _this.set_successCount(_this.get_successCount() + batch.length); }, {
                    blockUI: false,
                    onError: function (response) { return _this.set_errorCount(_this.get_errorCount() + batch.length); },
                    onCleanup: function () { return _this.serviceCallCleanup(); }
                });
            };
            return OrderBulkAction;
        }(ERP.Common.BulkServiceAction));
        Sale.OrderBulkAction = OrderBulkAction;
    })(Sale = ERP.Sale || (ERP.Sale = {}));
})(ERP || (ERP = {}));
/// <reference path="../../Common/Helpers/GridEditorDialog.ts" />
var ERP;
(function (ERP) {
    var Sale;
    (function (Sale) {
        var OrderDetailDialog = (function (_super) {
            __extends(OrderDetailDialog, _super);
            function OrderDetailDialog() {
                var _this = this;
                _super.call(this);
                this.form = new Sale.OrderDetailForm(this.idPrefix);
                this.form.ProductID.changeSelect2(function (e) {
                    var productID = Q.toId(_this.form.ProductID.value);
                    if (productID != null) {
                        _this.form.UnitPrice.value = ERP.Basic.ProductRow.getLookup().itemById[productID].UnitPrice;
                    }
                });
                this.form.Discount.addValidationRule(this.uniqueName, function (e) {
                    var price = _this.form.UnitPrice.value;
                    var quantity = _this.form.Quantity.value;
                    var discount = _this.form.Discount.value;
                    if (price != null && quantity != null && discount != null &&
                        discount > 0 && discount >= price * quantity) {
                        return "Discount can't be higher than total price!";
                    }
                });
            }
            OrderDetailDialog.prototype.getFormKey = function () { return Sale.OrderDetailForm.formKey; };
            OrderDetailDialog.prototype.getLocalTextPrefix = function () { return Sale.OrderDetailRow.localTextPrefix; };
            OrderDetailDialog = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderDetailDialog);
            return OrderDetailDialog;
        }(ERP.Common.GridEditorDialog));
        Sale.OrderDetailDialog = OrderDetailDialog;
    })(Sale = ERP.Sale || (ERP.Sale = {}));
})(ERP || (ERP = {}));
/// <reference path="../../Common/Helpers/GridEditorBase.ts" />
var ERP;
(function (ERP) {
    var Sale;
    (function (Sale) {
        var OrderDetailsEditor = (function (_super) {
            __extends(OrderDetailsEditor, _super);
            function OrderDetailsEditor(container) {
                _super.call(this, container);
            }
            OrderDetailsEditor.prototype.getColumnsKey = function () { return "Sale.OrderDetail"; };
            OrderDetailsEditor.prototype.getDialogType = function () { return Sale.OrderDetailDialog; };
            OrderDetailsEditor.prototype.getLocalTextPrefix = function () { return Sale.OrderDetailRow.localTextPrefix; };
            OrderDetailsEditor.prototype.validateEntity = function (row, id) {
                row.ProductID = Q.toId(row.ProductID);
                var sameProduct = Q.tryFirst(this.view.getItems(), function (x) { return x.ProductID === row.ProductID; });
                if (sameProduct && this.id(sameProduct) !== id) {
                    Q.alert('This product is already in order details!');
                    return false;
                }
                row.ProductName = ERP.Basic.ProductRow.getLookup().itemById[row.ProductID].ProductName;
                row.LineTotal = (row.Quantity || 0) * (row.UnitPrice || 0) - (row.Discount || 0);
                return true;
            };
            OrderDetailsEditor = __decorate([
                Serenity.Decorators.registerClass()
            ], OrderDetailsEditor);
            return OrderDetailsEditor;
        }(ERP.Common.GridEditorBase));
        Sale.OrderDetailsEditor = OrderDetailsEditor;
    })(Sale = ERP.Sale || (ERP.Sale = {}));
})(ERP || (ERP = {}));
//# sourceMappingURL=ERP.Web.js.map