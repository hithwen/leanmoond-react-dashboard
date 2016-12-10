import * as React from 'react';

export const DashboardItemComponent = (props: {
  icon : string, text: string, columnsize: number}) => {
  return (
    <div className={"col-md-" + props.columnsize +" dasboard-item"}>
      <p className="text-center">
        <i className={"fa fa-" + props.icon + " fa-5x"} aria-hidden="true"></i>
      </p>
      <p className="text-center">
        {props.text}
      </p>
    </div>
  );
}
