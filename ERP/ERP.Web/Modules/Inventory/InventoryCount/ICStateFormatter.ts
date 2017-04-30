namespace ERP.Inventory {

    @Serenity.Decorators.registerFormatter()
    export class ICStateFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            var text = Q.htmlEncode(ctx.value);

            return "<span class='" + (ctx.value === 1 ?
                'employee-symbol female' : 'employee-symbol male') +
                "'></span>";
        }
    }
}