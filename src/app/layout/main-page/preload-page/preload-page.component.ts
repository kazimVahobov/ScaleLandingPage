import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-preload-page',
  templateUrl: './preload-page.component.html',
  styleUrls: ['./preload-page.component.scss'],
  animations: [
    trigger('changeLogoSize', [
      state('initial', style({
        transform: 'scale(1)'
      })),
      state('final', style({
        transform: 'scale(4)'
      })),
      transition('initial=>final', animate('1000ms'))
    ]),
    trigger('hideOnTopLogo', [
      state('initial', style({
        top: '50%'
      })),
      state('final', style({
        top: '-25%'
      })),
      transition('initial=>final', animate('1500ms'))
    ]),
    trigger('showFromBottomTitle', [
      state('initial', style({
        bottom: '-75%'
      })),
      state('final', style({
        bottom: '15%',
      })),
      transition('initial=>final', animate('1500ms'))
    ]),
    trigger('changePositionOfTitle', [
      state('initial', style({
        position: 'fixed'
      })),
      state('final', style({
        position: 'relative'
      })),
      transition('initial=>final', animate('50ms'))
    ]),
  ]
})
export class PreloadPageComponent {

  increaseLogoState = 'initial';
  hideOnTopLogoState = 'initial';
  showFromBottomTitleState = 'initial';
  changePositionOfTitleState = 'initial';

  increaseLogo() {
    setTimeout(() => {
      this.increaseLogoState = 'final';
      this.hideOnTop();
    }, 1000);
  }

  hideOnTop() {
    setTimeout(() => {
      this.hideOnTopLogoState = 'final';
      this.showFromBottomTitleState = 'final';
      this.changeTitlePositionTitle();
    }, 2500);
  }


  changeTitlePositionTitle() {
    setTimeout(() => {
      this.changePositionOfTitleState = 'final';
    }, 1500);
  }

  ngOnInit(): void {
    this.increaseLogo();
  }

}
