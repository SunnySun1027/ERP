
namespace ERP.Purchase.Scripts
{
    using Basic.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript("Purchase.PSize")]
    public class PSizeLookup : RowLookupScript<ProductProductSizeRow>
    {
        public PSizeLookup()
        {
            IdField = "SizeID";
            TextField = "SizeName";
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = ProductProductSizeRow.Fields;
            query.Distinct(true)
                .Select(fld.SizeID)
                .Select(fld.SizeName)
                .Select(fld.ProductID)
                .Where(
                    new Criteria(fld.SizeName) != "" &
                    new Criteria(fld.SizeName).IsNotNull());
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}