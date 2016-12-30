import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {DashboardItem, DashboardComponent} from './components/dashboard/index';
import {DashboardIcons} from './components/dashboard/item-mapper';

let dashboardItems: DashboardItem[] = [
  {icon: DashboardIcons.EDIT, name:"Edit Content", reference:""},
  {icon: DashboardIcons.EVALUATE, name:"Evaluate tests", reference:""},
  {icon: DashboardIcons.BROWSE, name:"Browse Content", reference:""}];

ReactDOM.render(
  <DashboardComponent title="Master Lemon Code" items={dashboardItems}/>,
  document.getElementById('root')
);
