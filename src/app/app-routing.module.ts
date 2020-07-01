import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RoutesEnum} from './core/constants/routes.enum';


const routes: Routes = [
  {path: RoutesEnum.EMPTY_ROUTE, loadChildren: () => import('./layout/layout.module').then(m => m.LayoutModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
