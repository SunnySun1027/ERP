namespace ERP.Basic {

    @Serenity.Decorators.registerFormatter()
    export class ProductColorListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            var idList = ctx.value as string[];
            if (!idList || !idList.length)
                return "";

            var byId = ProductColorRow.getLookup().itemById;
            let z: ProductColorRow;
            return idList.map(x => ((z = byId[x]) ? z.ColorName : x)).join(", ");
        }
    }
}