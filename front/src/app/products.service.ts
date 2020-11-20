import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private url: string = 'http://localhost:8888/';

  constructor(private http: HttpClient) { }

  getProduits(): Observable<any> { return this.http.get(this.url+'products'); }
  getCategories(): Observable<any> { return this.http.get(this.url+'categories'); }
  getProduitsParCategorie(cat): Observable<any> { return this.http.get(this.url+'products/'+cat) }
}
