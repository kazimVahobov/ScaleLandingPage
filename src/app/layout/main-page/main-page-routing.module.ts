import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RoutesEnum} from '../../core/constants/routes.enum';
import {MainPageComponent} from './main-page.component';


const routes: Routes = [
  {path: RoutesEnum.EMPTY_ROUTE, component: MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainPageRoutingModule {
}
