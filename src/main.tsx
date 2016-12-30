import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {DashboardItem, DashboardIcons, DashboardComponent} from './components/dashboard/index';

let dashboardItems: Array<DashboardItem> = [
  {icon: DashboardIcons.EDIT, name:"Edit Content", reference:""},
  {icon: DashboardIcons.EVALUATE, name:"Evaluate tests", reference:""},
  {icon: DashboardIcons.BROWSE, name:"Browse Content", reference:""}];

console.log(dashboardItems);

ReactDOM.render(
  <DashboardComponent title="Master Lemon Code" items={dashboardItems}/>,
  document.getElementById('root')
);
