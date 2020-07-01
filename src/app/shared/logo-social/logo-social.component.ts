import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-logo-social',
  templateUrl: './logo-social.component.html',
  styleUrls: ['./logo-social.component.scss']
})
export class LogoSocialComponent implements OnInit {

  @Input() isWhite: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

}
