import * as React from 'react';
import {DashboardIcons, ItemMapper} from './item-mapper';

export interface DashboardItem {
  icon: DashboardIcons,
  name: string, // Text to be displayed
  reference: string, // link
}

export const DashboardItemComponent = (props: {item: DashboardItem}) => {
  return (
    <div className="dashboard-item">
      <p className="dashboard-item-icon">
        <i className={ItemMapper.mapOptionToIcon(props.item.icon)} aria-hidden="true"></i>
      </p>
      <p className="dashboard-item-title">
        {props.item.name}
      </p>
    </div>
  );
}
