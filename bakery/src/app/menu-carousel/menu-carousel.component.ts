import { Component, Input, OnChanges, OnInit } from '@angular/core';
// import { Observable } from 'rxjs';
import { Menu, MenuItem } from '../app.model';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-carousel',
  templateUrl: './menu-carousel.component.html',
  styleUrls: ['./menu-carousel.component.scss'],
})
export class MenuCarouselComponent implements OnChanges {
  @Input() menus: Menu[] | null = [];

  constructor(private menuService: MenuService) {}

  ngOnChanges(): void {
    console.log(this.menus);
  }
}
