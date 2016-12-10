import * as React from 'react';
import { DashboardItemComponent } from './dashboard_item';

export const DashboardComponent = (props: {
  title: string,
  items : Array<[string, string]>}) => {
  var dashboadItems = [];
  for (var i=0; i < props.items.length; i++) {
      dashboadItems.push(<DashboardItemComponent
        icon={props.items[i][0]}
        text={props.items[i][1]}
        columnsize={12/props.items.length} />);
  }

  return (
    <div className="dashboard">
      <div className="col-md-12 dashboardtitle">
          <h3 className="text-center">{props.title}</h3>
      </div>
      {dashboadItems}
    </div>
  );
}
