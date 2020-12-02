import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url = 'http://localhost:8888/';

  constructor(private http: HttpClient) { }

  getProduct(id): Observable<any> {
    return this.http.get(this.url + 'products/' + id);
  }

  getProducts(): Observable<any> {
    return this.http.get(this.url + 'products');
  }

  getCategories(): Observable<any> {
    return this.http.get(this.url + 'categories');
  }

  getProductsByCategories(categorie): Observable<any> {
    return this.http.get(this.url + 'products/' + categorie);
  }
}
