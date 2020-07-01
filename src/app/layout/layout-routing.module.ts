import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RoutesEnum} from '../core/constants/routes.enum';
import {LayoutComponent} from './layout.component';


const routes: Routes = [
  {
    path: RoutesEnum.EMPTY_ROUTE, component: LayoutComponent, children: [
      {
        path: RoutesEnum.EMPTY_ROUTE,
        loadChildren: () => import('./main-page/main-page.module').then(m => m.MainPageModule)
      },
      {
        path: RoutesEnum.PROJECT_DETAIL_PAGE,
        loadChildren: () => import('./detail-page/detail-page.module').then(m => m.DetailPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule {
}
