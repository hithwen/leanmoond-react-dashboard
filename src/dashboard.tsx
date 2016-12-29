import * as React from 'react';
import { DashboardItemComponent } from './dashboard-item';

export const DashboardComponent = (props: {
  title: string,
  items : Array<[string, string]>}) => {

  return (
    <div className="dashboard">
      <div className="dashboard-title">
          <h3>{props.title}</h3>
      </div>
      <div className="dashboard-items">
      {props.items.map(
        function(item) {
          return <DashboardItemComponent icon={item[0]} text={item[1]} columnsize={4}/>
      })}
      </div>
    </div>
  );
}
