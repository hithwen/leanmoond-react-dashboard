import * as React from 'react';
import { DashboardItemComponent, DashboardItem } from './dashboard-item';

/**
* title: Dasboard Title
* items: [icon-css, icon name]
*/
export const _DashboardComponent = (props: {title: string,
  items : Array<DashboardItem>}) => {
  return (
    <div className="dashboard">
      <div className="dashboard-title">
          <h3>{props.title}</h3>
      </div>
      <div className="dashboard-items">
      {props.items.map(
        function(item: DashboardItem) {
          return <DashboardItemComponent item={item}/>
      })}
      </div>
    </div>
  );
}
