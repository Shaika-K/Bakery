import { Component, OnChanges, OnInit } from '@angular/core';
import { Observable, zip } from 'rxjs';
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

  ngOnInit() {
    const self = this;
    for (const menuType of Object.values(MenuTypes)) {
      this.menuService.returnMockedMenu(menuType).subscribe({
        next(response: Menu) {
          self._menus.push(response);
        },
        error(msg) {},
      });
    }
  }

  get allMenus(): Menu[] {
    return this._menus;
  }

  get showCarouselFormat():boolean {
    return window.innerWidth < 992;
  }
}
