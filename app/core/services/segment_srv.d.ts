// app/core/services/segment_srv.ts is not exposed to plugins
import { TemplateSrv } from '../../features/templating/template_srv';

export declare class UiSegmentSrv {
  /** @ngInject */
  constructor($sce: any, templateSrv: TemplateSrv);
  getSegmentForValue(value: string, fallbackText: string): MetricSegment;
  newSelectMeasurement(): MetricSegment;
  newFake(text: string, type: string, cssClass: string): MetricSegment;
  newSegment(options: MetricSegment): MetricSegment;
  newKey(key: string): MetricSegment;
  newKeyValue(value: string): MetricSegment;
  newCondition(condition: string): MetricSegment;
  newOperator(op: string): MetricSegment;
  newOperators(ops: string[]): MetricSegment[];
  transformToSegments(
    addTemplateVars: boolean,
    variableTypeFilter?: string
  ): (results: { text: string, expandable?: boolean }[]) => MetricSegment[];
  newSelectMetric(): MetricSegment;
  newPlusButton(): MetricSegment;
}

export declare class MetricSegment {
  value: string;
  html?: string;
  type?: string;
  expandable?: boolean;
  text?: string;
  cssClass?: string;
  fake?: boolean;
  custom?: boolean;
  selectMode?: boolean;

  constructor(options: string | MetricSegment);
}
