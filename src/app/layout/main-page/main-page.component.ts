import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  @ViewChild('aboutPage') myDiv: ElementRef;

  constructor() {
  }

  onPreloadPageScroll() {
    this.myDiv.nativeElement.scrollIntoView();
  }
}
