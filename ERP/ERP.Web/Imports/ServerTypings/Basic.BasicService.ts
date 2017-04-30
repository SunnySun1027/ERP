namespace ERP.Basic {
    export namespace BasicService {
        export const baseUrl = 'Basic/Basic';

        export declare function OrdersByShipper(request: OrdersByShipperRequest, onSuccess?: (response: OrdersByShipperResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;
        export declare function OrderBulkAction(request: OrderBulkActionRequest, onSuccess?: (response: Serenity.ServiceResponse) => void, opt?: Q.ServiceOptions<any>): JQueryXHR;

        export namespace Methods {
            export declare const OrdersByShipper: string;
            export declare const OrderBulkAction: string;
        }

        ['OrdersByShipper', 'OrderBulkAction'].forEach(x => {
            (<any>BasicService)[x] = function (r, s, o) { return Q.serviceRequest(baseUrl + '/' + x, r, s, o); };
            (<any>Methods)[x] = baseUrl + '/' + x;
        });
    }
}

