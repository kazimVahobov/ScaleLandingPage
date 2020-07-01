import {Component, Input} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ConstantsEnum} from '../../core/constants/constants.enum';

@Component({
  selector: 'app-lang-switch',
  templateUrl: './lang-switch.component.html',
  styleUrls: ['./lang-switch.component.scss']
})
export class LangSwitchComponent {

  @Input() isWhite: boolean;
  ruLang = ConstantsEnum.LANG_RU;
  engLang = ConstantsEnum.LANG_EN;

  constructor(private translate: TranslateService) {
  }

  isSelectedLang(lang: string): boolean {
    return this.translate.getDefaultLang() === lang;
  }

  setLang(lang: string) {
    this.translate.setDefaultLang(lang);
    localStorage.setItem(ConstantsEnum.LANG_KEY, lang);
  }

}
