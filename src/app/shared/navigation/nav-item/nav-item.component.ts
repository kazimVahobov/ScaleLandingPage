import {Component, Input, OnInit} from '@angular/core';
import {NavItemModel} from '../../../core/ui-models/nav-item.model';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {

  @Input() item: NavItemModel;
  @Input() isWhite: boolean;
  @Input() isActive: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

}
