import { Component, Input, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
import { Menu, MenuItem } from '../app.model';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-carousel',
  templateUrl: './menu-carousel.component.html',
  styleUrls: ['./menu-carousel.component.scss'],
})
export class MenuCarouselComponent implements OnInit {
  @Input() menus: Menu[] | undefined = [];

  // private _breakfastMenuItems: MenuItem[] | undefined;
  // private _lunchMenuItems: MenuItem[] | undefined;
  // private _dinnerMenuItems: MenuItem[] | undefined;
  // private _dessertMenuItems: MenuItem[] | undefined;
  // private _drinkMenuItems: MenuItem[] | undefined;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    // this.initializeMenu('breakfast', (menuItems) => this._breakfastMenuItems = menuItems);
    // this.initializeMenu('lunch', (menuItems) => this._lunchMenuItems = menuItems);
    // this.initializeMenu('dinner', (menuItems) => this._dinnerMenuItems = menuItems);
    // this.initializeMenu('dessert', (menuItems) => this._dessertMenuItems = menuItems);
    // this.initializeMenu('drinks', (menuItems) => this._drinkMenuItems = menuItems);
  }

  // initializeMenu(menuType: string, setStateCallback: (menuItems: MenuItem[]) => void){
  //   const breakfastMenuRequest = this.menuService.returnMockedMenu(menuType);
  //   breakfastMenuRequest.subscribe({
  //     next(menu: MenuItem[]) {
  //       setStateCallback(menu);
  //     },
  //     error(msg: string) {
  //       console.log('Error Getting Location: ', msg);
  //     }
  //   });
  // }

  // get breakfastMenuItems(): MenuItem[] | undefined {
  //   return this._breakfastMenuItems;
  // }

  // get lunchMenuItems(): MenuItem[] | undefined {
  //   return this._lunchMenuItems;
  // }

  // get dinnerMenuItems(): MenuItem[] | undefined {
  //   return this._dinnerMenuItems;
  // }

  // get dessertMenuItems(): MenuItem[] | undefined {
  //   return this._dessertMenuItems;
  // }

  // get drinkMenuItems(): MenuItem[] | undefined {
  //   return this._drinkMenuItems;
  // }
}
