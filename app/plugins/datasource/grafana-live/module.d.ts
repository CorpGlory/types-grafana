/// 
import { GrafanaStreamDS } from './datasource';
import { QueryCtrl } from '../../sdk';
declare class GrafanaQueryCtrl extends QueryCtrl {
    static templateUrl: string;
}
export { GrafanaStreamDS as Datasource, GrafanaQueryCtrl as QueryCtrl };
