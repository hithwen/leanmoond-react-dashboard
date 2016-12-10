import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { DashboardComponent } from './dashboard';
let dashboardItems: Array<[string, string]> = [["pencil-square-o", "Edit Content"],
                                               ["star-half-o", "Evaluate tests"],
                                               ["eye", "Browse Content"]];
ReactDOM.render(
  <DashboardComponent title="Master Lemon Code" items={dashboardItems}/>,
  document.getElementById('root')
);
