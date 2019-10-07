import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class ShipService {

  constructor(private http: HttpClient) { }

  getAllShips(search): Observable<any> {
    const url = search !== 'null'
      ? `${environment.baseUrl}starships/?search=${search}`
      : `${environment.baseUrl}starships/`;
    return this.http.get(url);
  }

  getShipById(url): Observable<any> {
    return this.http.get(url);
  }

  changePage(url): Observable<any> {
    return this.http.get(url);
  }
}
