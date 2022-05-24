import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MenuItem } from '../app.model';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-carousel',
  templateUrl: './menu-carousel.component.html',
  styleUrls: ['./menu-carousel.component.scss'],
})
export class MenuCarouselComponent implements OnInit {
  private _breakfastMenuItems: MenuItem[] | undefined;
  private _lunchMenuItems: MenuItem[] | undefined;
  private _dinnerMenuItems: MenuItem[] | undefined;
  private _dessertMenuItems: MenuItem[] | undefined;
  private _drinkMenuItems: MenuItem[] | undefined;

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this._breakfastMenuItems = this.initializeMenu('breakfast');
    this._lunchMenuItems = this.initializeMenu('lunch');
    this._dinnerMenuItems = this.initializeMenu('dinner');
    this._dessertMenuItems = this.initializeMenu('dessert');
    this._drinkMenuItems = this.initializeMenu('drinks');
  }

  initializeMenu(menuType: string): MenuItem[] {
    const breakfastMenuRequest = this.menuService.returnMockedMenu(menuType);
    let menuItems: MenuItem[] = []
    breakfastMenuRequest.subscribe((menu: MenuItem[]) => {
      menuItems = menu;
    });
    return menuItems;
  }

  get breakfastMenuItems(): MenuItem[] | undefined {
    return this._breakfastMenuItems;
  }

  get lunchMenuItems(): MenuItem[] | undefined {
    return this._lunchMenuItems;
  }

  get dinnerMenuItems(): MenuItem[] | undefined {
    return this._dinnerMenuItems;
  }

  get dessertMenuItems(): MenuItem[] | undefined {
    return this._dessertMenuItems;
  }

  get drinkMenuItems(): MenuItem[] | undefined {
    return this._drinkMenuItems;
  }
}
