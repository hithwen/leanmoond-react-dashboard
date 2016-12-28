/**
* Util to map dashboard items to its icon representation
*/
export module ItemMapper {
  export enum DashboardIcons {
    'EDIT',
    'EVALUATE',
    'BROWSE'
  };

  export function mapOptionToIcon (icon: DashboardIcons) {
    return dashboardMapOptionToIcon[DashboardIcons[icon]];
  };

  var dashboardMapOptionToIcon: { [id: string]: string; } = {
     EDIT: 'fa fa-pencil-square-o fa-5x',
     EVALUATE: 'fa fa-star-half-o fa-5x',
     BROWSE: 'fa fa-eye fa-5x'
  };
}
