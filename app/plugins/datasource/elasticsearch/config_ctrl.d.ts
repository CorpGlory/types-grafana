/// 
export declare class ElasticConfigCtrl {
    static templateUrl: string;
    current: any;
    /** @ngInject */
    constructor($scope: any);
    indexPatternTypes: Array<{
        name: string;
        value: any;
    } | {
        name: string;
        value: string;
        example: string;
    }>;
    esVersions: Array<{
        name: string;
        value: number;
    }>;
    indexPatternTypeChanged(): void;
}
