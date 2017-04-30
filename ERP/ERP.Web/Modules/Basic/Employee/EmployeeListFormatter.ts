namespace ERP.Basic {

    @Serenity.Decorators.registerFormatter()
    export class EmployeeListFormatter implements Slick.Formatter {
        format(ctx: Slick.FormatterContext) {
            var idList = ctx.value as string[];
            if (!idList || !idList.length)
                return "";

            var byId = ERP.Basic.EmployeeRow.getLookup().itemById;
            let z: ERP.Basic.EmployeeRow;
            return idList.map(x => ((z = byId[x]) ? z.FullName : x)).join(", ");
        }
    }
}