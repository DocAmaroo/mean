import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Subject, BehaviorSubject, Observable} from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Methods': 'GET,POST',
    'Access-Control-Allow-Headers': 'Content-type',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  private url = 'http://localhost:8888/';

  constructor(private http: HttpClient,
              private router: Router) {
  }

  getCart(id): Observable<any> {
    return this.http.get(this.url + 'carts/' + id);
  }

  addToCart(id, productID): any {
    return this.http.post(this.url + 'carts/' + id, JSON.stringify(productID), httpOptions);
  }
}
