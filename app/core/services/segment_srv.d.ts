// app/core/services/segment_srv.ts is not exposed to plugins

export declare class UiSegmentSrv {
  /** @ngInject */
  constructor($sce: any, templateSrv: any);
  getSegmentForValue(value: string, fallbackText: string): MetricSegment;
  newSelectMeasurement(): MetricSegment;
  newFake(text: string, type: string, cssClass: string): MetricSegment;
  newSegment(options: any): MetricSegment;
  newKey(key: string): MetricSegment;
  newKeyValue(value: string): MetricSegment;
  newCondition(condition: string): MetricSegment;
  newOperator(op: string): MetricSegment;
  newOperators(ops: string[]): MetricSegment[];
  transformToSegments(
    addTemplateVars: boolean,
    variableTypeFilter?: string
  ): (results: any[]) => MetricSegment[];
  newSelectMetric(): MetricSegment;
  newPlusButton(): MetricSegment;
}

export declare class MetricSegment {
  value: string;
  html: any;
  type: any;
  expandable: boolean;
  text: string;
  cssClass: string;
  fake: boolean;
  custom: boolean;
  selectMode: any;

  constructor(options: any);
}
