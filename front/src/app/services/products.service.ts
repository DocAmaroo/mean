import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';
import {ProductModel} from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url = 'http://localhost:8888/';

  constructor(private http: HttpClient,
              private router: Router) {
  }

  getProduct(id: string): Observable<ProductModel> {
    return this.http.get<ProductModel>(this.url + 'products/product/' + id);
  }

  getProducts(filter: string): any {
    return this.http.get(this.url + 'products' + filter);
  }

  getCategories(): any {
    return this.http.get(this.url + 'categories');
  }

  getMarques(): any {
    return this.http.get(this.url + 'marques');
  }

  getProductsByCategories(categorie: string): Observable<any> {
    return this.http.get(this.url + 'products/' + categorie);
  }

  redirectToProducts(): void {
    this.router.navigate(['/products']);
  }
}
