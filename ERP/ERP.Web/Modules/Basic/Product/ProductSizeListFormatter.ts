namespace ERP.Basic {

    @Serenity.Decorators.registerFormatter()
    export class ProductSizeListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            var idList = ctx.value as string[];
            if (!idList || !idList.length)
                return "";

            var byId = ProductSizeRow.getLookup().itemById;
            let z: ProductSizeRow;
            return idList.map(x => ((z = byId[x]) ? z.SizeName : x)).join(", ");
        }
    }
}