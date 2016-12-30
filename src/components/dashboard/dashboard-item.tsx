import * as React from 'react';

export const DashboardItemComponent = (props: {
  icon : string, text: string, columnsize: number}) => {
  return (
    <div className="dashboard-item">
      <p className="dashboard-item-icon">
        <i className={props.icon} aria-hidden="true"></i>
      </p>
      <p className="dashboard-item-title">
        {props.text}
      </p>
    </div>
  );
}
