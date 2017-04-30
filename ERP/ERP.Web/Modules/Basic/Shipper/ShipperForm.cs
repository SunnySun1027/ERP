
namespace ERP.Basic.Forms
{
    using Serenity;
    using Serenity.ComponentModel;
    using Serenity.Data;
    using System;
    using System.Collections.Generic;
    using System.IO;

    [FormScript("Basic.Shipper")]
    [BasedOnRow(typeof(Entities.ShipperRow))]
    public class ShipperForm
    {
        public String CompanyName { get; set; }
        [Basic.PhoneEditor]
        public String Phone { get; set; }
    }
}