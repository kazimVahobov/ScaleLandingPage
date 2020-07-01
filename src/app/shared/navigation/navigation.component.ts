import {Component, OnInit} from '@angular/core';
import {MenuService} from '../../core/services/menu.service';
import {NavItemModel} from '../../core/ui-models/nav-item.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  menuItems: NavItemModel[] = [];

  constructor(private menuService: MenuService) {
    this.menuItems = this.menuService.menuItems;
  }

  ngOnInit(): void {
  }

}
