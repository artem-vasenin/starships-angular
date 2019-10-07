import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class ShipService {

  constructor(private http: HttpClient) { }

  /** Получение полного списка кораблей или выборки по названию */
  getAllShips(search): Observable<any> {
    const url = search !== 'null'
      ? `${environment.baseUrl}starships/?search=${search}`
      : `${environment.baseUrl}starships/`;
    return this.http.get(url);
  }

  /** Получение детальной информации по кораблю */
  getShipById(url): Observable<any> {
    return this.http.get(url);
  }

  /** Изменение страницы пагинации */
  changePage(url): Observable<any> {
    return this.http.get(url);
  }
}
