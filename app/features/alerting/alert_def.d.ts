///
import { QueryPartDef, QueryPart } from 'app/core/components/query_part/query_part';
declare var _default: {
  alertQueryDef: QueryPartDef;
  getStateDisplayModel: (
    state: any
  ) => {
    text: string;
    iconClass: string;
    stateClass: string;
  };
  conditionTypes: Array<{
    text: string;
    value: string;
  }>;
  evalFunctions: Array<{
    text: string;
    value: string;
  }>;
  evalOperators: Array<{
    text: string;
    value: string;
  }>;
  noDataModes: Array<{
    text: string;
    value: string;
  }>;
  executionErrorModes: Array<{
    text: string;
    value: string;
  }>;
  reducerTypes: Array<{
    text: string;
    value: string;
  }>;
  createReducerPart: (model: any) => QueryPart;
  joinEvalMatches: (matches: any, seperator: string) => any;
  alertStateSortScore: {
    alerting: number;
    no_data: number;
    pending: number;
    ok: number;
    paused: number;
  };
};
export default _default;
