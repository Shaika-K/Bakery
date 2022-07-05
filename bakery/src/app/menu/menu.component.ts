import { Component, OnInit } from '@angular/core';
import { MenuItem, Menu, MenuTypes } from '../app.model';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  private _breakfastMenu: Menu | undefined;
  private _lunchMenu: Menu | undefined;
  private _dinnerMenu: Menu | undefined;
  private _dessertMenu: Menu | undefined;
  private _drinkMenu: Menu | undefined;
  private _menus: Menu[] | undefined;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this._menus = [];
    for (const menuType of Object.values(MenuTypes)) {
      this.initializeMenu(menuType, (menu) => (this._menus?.push(menu)));
    }
    this.initializeMenu('breakfast', (menu) => (this._breakfastMenu = menu));
    this.initializeMenu('lunch', (menu) => (this._lunchMenu = menu));
    this.initializeMenu('dinner', (menu) => (this._dinnerMenu = menu));
    this.initializeMenu('dessert', (menu) => (this._dessertMenu = menu));
    this.initializeMenu('drinks', (menu) => (this._drinkMenu = menu));
  }

  initializeMenu(menuType: string, setStateCallback: (menu: Menu) => void) {
    const breakfastMenuRequest = this.menuService.returnMockedMenu(menuType);
    breakfastMenuRequest.subscribe({
      next(m: Menu) {
        setStateCallback(m);
      },
      error(msg: string) {
        console.log('Error Getting Location: ', msg);
      },
    });
  }

  get allMenus():Menu[] | undefined {
    return this._menus;
  }

  get showCarouselFormat() {
    return window.innerWidth < 992;
  }

  get breakfastMenuItems(): Menu | undefined {
    return this._breakfastMenu;
  }

  get lunchMenuItems(): Menu | undefined {
    return this._lunchMenu;
  }

  get dinnerMenuItems(): Menu | undefined {
    return this._dinnerMenu;
  }

  get dessertMenuItems(): Menu | undefined {
    return this._dessertMenu;
  }

  get drinkMenuItems(): Menu | undefined {
    return this._drinkMenu;
  }
}
