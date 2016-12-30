import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { DashboardComponent } from './components/dashboard/dashboard';
import {ItemMapper} from './components/dashboard/item-mapper';

let dashboardItems: Array<[string, string]> =
  [[ItemMapper.mapOptionToIcon(ItemMapper.DashboardIcons.EDIT), "Edit Content"],
   [ItemMapper.mapOptionToIcon(ItemMapper.DashboardIcons.EVALUATE), "Evaluate tests"],
   [ItemMapper.mapOptionToIcon(ItemMapper.DashboardIcons.BROWSE), "Browse Content"]
  ];

ReactDOM.render(
  <DashboardComponent title="Master Lemon Code" items={dashboardItems}/>,
  document.getElementById('root')
);
