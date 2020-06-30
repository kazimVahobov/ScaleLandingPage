import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LogoSocialComponent} from './logo-social/logo-social.component';
import {NavigationComponent} from './navigation/navigation.component';
import {LangSwitchComponent} from './lang-switch/lang-switch.component';
import {FeedbackComponent} from './feedback/feedback.component';


@NgModule({
  declarations: [LogoSocialComponent, NavigationComponent, LangSwitchComponent, FeedbackComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule {
}
