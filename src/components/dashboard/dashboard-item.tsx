import * as React from 'react';
import {DashboardIcons, ItemMapper} from './item-mapper';

export interface DashboardItem {
  icon: DashboardIcons,
  name: string, // Text to be displayed
  reference: string, // link
}

export const DashboardItemComponent = (props: {item: DashboardItem}) => {
  return (
      <div className="dashboard-item-content">
        <p className="dashboard-item-icon">
          <a href={props.item.reference}>
            <i className={ItemMapper.mapOptionToIcon(props.item.icon)} aria-hidden="true"></i>
          </a>
        </p>
        <p className="dashboard-item-title">
          <a href={props.item.reference}>{props.item.name}</a>
        </p>
      </div>
  );
}
