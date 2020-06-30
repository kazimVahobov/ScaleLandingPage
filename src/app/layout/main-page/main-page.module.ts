import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainPageRoutingModule} from './main-page-routing.module';
import {MainPageComponent} from './main-page.component';
import {PreloadPageComponent} from './preload-page/preload-page.component';
import {AboutPageComponent} from './about-page/about-page.component';
import {ServicesPageComponent} from './services-page/services-page.component';
import {WorkflowPageComponent} from './workflow-page/workflow-page.component';
import {ProjectsPageComponent} from './projects-page/projects-page.component';
import {TeamPageComponent} from './team-page/team-page.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    MainPageComponent,
    PreloadPageComponent,
    AboutPageComponent,
    ServicesPageComponent,
    WorkflowPageComponent,
    ProjectsPageComponent,
    TeamPageComponent],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    SharedModule
  ]
})
export class MainPageModule {
}
