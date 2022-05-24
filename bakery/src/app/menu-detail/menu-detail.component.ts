import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../app.model';

@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.scss'],
})
export class MenuDetailComponent implements OnInit {
  @Input() menuItems: MenuItem[] | undefined = [];
  @Input() title: string | undefined;
  @Input() time: string | undefined;

  constructor() {}

  ngOnInit(): void {}

  get menu(): MenuItem[] | undefined {
    return this.menuItems;
  }

  get menuTitle(): string | undefined {
    return this.title;
  }

  get menuTime(): string | undefined {
    return this.time;
  }
}
