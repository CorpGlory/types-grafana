/// 
export declare class OpenTsConfigCtrl {
    static templateUrl: string;
    current: any;
    /** @ngInject */
    constructor($scope: any);
    tsdbVersions: Array<{
        name: string;
        value: number;
    }>;
    tsdbResolutions: Array<{
        name: string;
        value: number;
    }>;
}
