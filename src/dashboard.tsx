import * as React from 'react';
import { DashboardItemComponent } from './dashboard_item';

export const DashboardComponent = () => {
  return (
    <div className="dashboard">
      <div className="col-md-12 dashboardtitle">
          <h3 className="text-center">Master Lemon Code</h3>
      </div>
      <div className="col-md-4 dashboardtitle">
          <DashboardItemComponent icon="pencil-square-o" text="Edit Content"/>
      </div>
      <div className="col-md-4 dashboardtitle">
          <DashboardItemComponent icon="star-half-o" text="Evaluate tests"/>
      </div>
      <div className="col-md-4 dashboardtitle">
          <DashboardItemComponent icon="eye" text = "Browse content"/>
      </div>
    </div>
  );
}
