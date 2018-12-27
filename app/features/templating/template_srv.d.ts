import { QueryVariable } from './query_variable'

export declare class TemplateSrv {
    builtIns: any;
    grafanaVariables: any;
    index: {
        [key:string]: QueryVariable;
    };
    regex: RegExp;
    variables: QueryVariable[];
    /** @ngInject **/
    constructor();
    distributeVariable(value: any, variable: any): any;
    fillVariableValuesForUrl(params: any, scopedVars: any): void;
    formatValue(value: any, format: any, variable: any): any;
    getAdhocFilters(datasourceName: any): any[];
    getAllValue(variable: any): any[];
    getVariableName(expression: any): any;
    highlightVariablesAsHtml(str: any): any;
    init(variables: any): void;
    isAllValue(value: any): boolean;
    luceneFormat(value: any): string;
    replace(target: any, scopedVars?: any, format?: any): any;
    replaceWithText(target: any, scopedVars: any): any;
    setGrafanaVariable(name: any, value: any): void;
    updateTemplateData(): any;
    variableExists(expression: any): any;
    variableInitialized(variable: any): void;
}
