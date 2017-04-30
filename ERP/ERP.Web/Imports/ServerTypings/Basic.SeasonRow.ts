namespace ERP.Basic {
    export interface SeasonRow {
        SeasonId?: number;
        SeasonName?: string;
        Description?: string;
    }

    export namespace SeasonRow {
        export const idProperty = 'SeasonId';
        export const nameProperty = 'SeasonName';
        export const localTextPrefix = 'Basic.Season';

        export namespace Fields {
            export declare const SeasonId: string;
            export declare const SeasonName: string;
            export declare const Description: string;
        }

        ['SeasonId', 'SeasonName', 'Description'].forEach(x => (<any>Fields)[x] = x);
    }
}

