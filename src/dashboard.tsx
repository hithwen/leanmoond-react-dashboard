import * as React from 'react';
import { DashboardItemComponent } from './dashboard_item';

export const DashboardComponent = (props: {
  title: string,
  items : Array<[string, string]>}) => {
  return (
    <div className="dashboard">
      <div className="col-md-12 dashboardtitle">
          <h3 className="text-center">{props.title}</h3>
      </div>
      <div className="col-md-4 dashboardtitle">
          <DashboardItemComponent icon={props.items[0][0]} text={props.items[0][1]}/>
      </div>
      <div className="col-md-4 dashboardtitle">
          <DashboardItemComponent icon={props.items[1][0]} text={props.items[1][1]}/>
      </div>
      <div className="col-md-4 dashboardtitle">
          <DashboardItemComponent icon={props.items[2][0]} text={props.items[2][1]}/>
      </div>
    </div>
  );
}
