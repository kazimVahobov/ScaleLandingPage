import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ConstantsEnum} from './core/constants/constants.enum';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {

  constructor(translate: TranslateService) {
    const lang = localStorage.getItem(ConstantsEnum.LANG_KEY) ? localStorage.getItem(ConstantsEnum.LANG_KEY) : ConstantsEnum.LANG_EN;
    translate.setDefaultLang(lang);
  }
}
