
namespace ERP.Sale
{
    using Entities;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using Serenity.Web;
    using System.ComponentModel;

    [EnumKey("Sale.OrderShippingState")]
    public enum OrderShippingState
    {
        [Description("Not Shipped")]
        NotShipped = 0,
        [Description("Shipped")]
        Shipped = 1
    }
}