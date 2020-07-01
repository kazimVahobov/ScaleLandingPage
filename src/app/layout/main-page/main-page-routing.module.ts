import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RoutesEnum} from '../../core/constants/routes.enum';
import {MainPageComponent} from './main-page.component';
import {PreloadPageComponent} from './preload-page/preload-page.component';

const routes: Routes = [
  {
    path: RoutesEnum.EMPTY_ROUTE, component: MainPageComponent, children: [
      {path: RoutesEnum.EMPTY_ROUTE, component: PreloadPageComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule {
}
