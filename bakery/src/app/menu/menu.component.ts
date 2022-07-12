import { Component, OnChanges, OnInit } from '@angular/core';
import { MenuItem, Menu, MenuTypes } from '../app.model';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  private _menus: Menu[] = [];

  constructor(private menuService: MenuService) {}

   ngOnInit(){
    for (const menuType of Object.values(MenuTypes)) {
      this.initializeMenu(menuType);
    }
  }

  async initializeMenu(menuType: string) {
    await this.menuService.returnMockedMenu(menuType).subscribe((response: Menu) => {
      this._menus.push(response);
    });
  }

  get allMenus(): Menu[] {
    return this._menus !== undefined ? this._menus : [];
  }

  get showCarouselFormat() {
    return window.innerWidth < 992;
  }
}
