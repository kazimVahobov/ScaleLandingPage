import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LogoSocialComponent} from './logo-social/logo-social.component';
import {NavigationComponent} from './navigation/navigation.component';
import {LangSwitchComponent} from './lang-switch/lang-switch.component';
import {FeedbackComponent} from './feedback/feedback.component';
import {TranslateModule} from '@ngx-translate/core';
import { NavItemComponent } from './navigation/nav-item/nav-item.component';


@NgModule({
  declarations: [
    LogoSocialComponent,
    NavigationComponent,
    LangSwitchComponent,
    FeedbackComponent,
    NavItemComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [
    TranslateModule,
    LogoSocialComponent,
    NavigationComponent,
    LangSwitchComponent,
    FeedbackComponent
  ],
  entryComponents: [
    NavigationComponent,
    LogoSocialComponent
  ]
})
export class SharedModule {
}
