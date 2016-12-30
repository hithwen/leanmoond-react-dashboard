import { DashboardItem } from './dashboard-item';
import { _DashboardComponent } from './dashboard';
import { ItemMapper } from './item-mapper';

export enum DashboardIcons {
  'EDIT',
  'EVALUATE',
  'BROWSE'
};

export interface DashboardItem {};
export const DashboardComponent = _DashboardComponent;
