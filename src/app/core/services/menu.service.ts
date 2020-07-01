import {Injectable} from '@angular/core';
import {NavItemModel} from '../ui-models/nav-item.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  menuItems: NavItemModel[] = [
    {
      label: 'NAV_ITEM.ABOUT_COMPANY',
      route: '#'
    },
    {
      label: 'NAV_ITEM.SERVICES',
      route: '#'
    },
    {
      label: 'NAV_ITEM.WORKFLOW',
      route: '#'
    },
    {
      label: 'NAV_ITEM.PROJECTS',
      route: '#'
    },
    {
      label: 'NAV_ITEM.TEAM',
      route: '#'
    },
    {
      label: 'NAV_ITEM.CONTACTS',
      route: '#'
    },
  ];

  constructor() {
  }
}
