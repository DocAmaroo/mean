import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url: String = 'http://localhost:8888/';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<any> {
    return this.http.get(this.url + 'products');
  }

  getCategories(): Observable<any> {
    return this.http.get(this.url + 'categories');
  }

  getProductsByCategories(categorie): Observable<any> {
    return this.http.get(this.url + 'products/'+categorie);
  }

}
