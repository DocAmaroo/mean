import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  private url = 'http://localhost:8888/';

  constructor(private http: HttpClient) { }

  getCart(id) {
    return this.http.get(this.url + 'carts/' + id);
  }

  addToCart(product) {

  }
}
