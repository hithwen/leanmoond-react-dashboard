import * as React from 'react';

export const DashboardItemComponent = (props: {icon : string, text: string}) => {
  return (
    <div className="dasboard-item">
      <p className="text-center">
        <i className={"fa fa-" + props.icon + " fa-6"} aria-hidden="true"></i>
      </p>
      <p className="text-center">
        {props.text}
      </p>
    </div>
  );
}
