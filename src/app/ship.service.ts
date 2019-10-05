import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class ShipService {

  constructor(private http: HttpClient) { }

  getAllShips(): Observable<any> {
    return this.http.get(`${environment.baseUrl}starships/`);
  }

  changePage(url): Observable<any> {
    return this.http.get(url);
  }
}
