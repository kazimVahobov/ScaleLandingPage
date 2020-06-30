import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DetailPageRoutingModule} from './detail-page-routing.module';
import {DetailPageComponent} from './detail-page.component';
import {AboutProjectPageComponent} from './about-project-page/about-project-page.component';
import {ProjectGalleryPageComponent} from './project-gallery-page/project-gallery-page.component';
import {ProjectQualityPageComponent} from './project-quality-page/project-quality-page.component';


@NgModule({
  declarations: [DetailPageComponent, AboutProjectPageComponent, ProjectGalleryPageComponent, ProjectQualityPageComponent],
  imports: [
    CommonModule,
    DetailPageRoutingModule
  ]
})
export class DetailPageModule {
}
