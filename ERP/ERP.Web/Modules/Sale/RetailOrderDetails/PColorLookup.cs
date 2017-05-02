
namespace ERP.Sale.Scripts
{
    using Basic.Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;

    [LookupScript("Sale.PColor")]
    public class PColorLookup : RowLookupScript<ProductProductColorRow>
    {
        public PColorLookup()
        {
            IdField = "ColorID";
            TextField = "ColorName";
        }

        protected override void PrepareQuery(SqlQuery query)
        {
            var fld = ProductProductColorRow.Fields;
            query.Distinct(true)
                .Select(fld.ColorID)
                .Select(fld.ColorName)
                .Select(fld.ProductID)
                .Where(
                    new Criteria(fld.ColorName) != "" &
                    new Criteria(fld.ColorName).IsNotNull());
        }

        protected override void ApplyOrder(SqlQuery query)
        {
        }
    }
}