import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Menu } from './app.model';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor(private http: HttpClient) {}

  returnMockedMenu(menuType: string): Observable<Menu> {
    // -- MOCKED --
    let menuDetails: Menu;

    return new Observable((observer) => {
      this.http
        .get('../../../assets/mock-'+menuType+'-menu.json')
        .subscribe((data) => {
          menuDetails = JSON.parse(JSON.stringify(data));
          observer.next(menuDetails);
          observer.complete();
        });
    });
  }
}
