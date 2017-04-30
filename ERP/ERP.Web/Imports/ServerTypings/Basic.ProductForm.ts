namespace ERP.Basic {
    export class ProductForm extends Serenity.PrefixedContext {
        static formKey = 'Basic.Product';

    }

    export interface ProductForm {
        ProductName: Serenity.StringEditor;
        ProductImage: Serenity.ImageUploadEditor;
        GalleryImages: Serenity.MultipleImageUploadEditor;
        Discontinued: Serenity.BooleanEditor;
        SupplierID: Serenity.LookupEditor;
        CategoryID: Serenity.LookupEditor;
        QuantityPerUnit: Serenity.StringEditor;
        UnitPrice: Serenity.DecimalEditor;
        UnitsInStock: Serenity.IntegerEditor;
        UnitsOnOrder: Serenity.IntegerEditor;
        ReorderLevel: Serenity.IntegerEditor;
        ProductColor: Serenity.LookupEditor;
        ProductSize: Serenity.LookupEditor;
    }

    [['ProductName', () => Serenity.StringEditor], ['ProductImage', () => Serenity.ImageUploadEditor], ['GalleryImages', () => Serenity.MultipleImageUploadEditor], ['Discontinued', () => Serenity.BooleanEditor], ['SupplierID', () => Serenity.LookupEditor], ['CategoryID', () => Serenity.LookupEditor], ['QuantityPerUnit', () => Serenity.StringEditor], ['UnitPrice', () => Serenity.DecimalEditor], ['UnitsInStock', () => Serenity.IntegerEditor], ['UnitsOnOrder', () => Serenity.IntegerEditor], ['ReorderLevel', () => Serenity.IntegerEditor], ['ProductColor', () => Serenity.LookupEditor], ['ProductSize', () => Serenity.LookupEditor]].forEach(x => Object.defineProperty(ProductForm.prototype, <string>x[0], { get: function () { return this.w(x[0], (x[1] as any)()); }, enumerable: true, configurable: true }));
}

