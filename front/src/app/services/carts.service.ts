import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Subject, BehaviorSubject, Observable} from 'rxjs';
import {UsersService} from './users.service';
import {ProductsService} from './products.service';
import {CartModel} from '../model/cart.model';


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

  private cart: Subject<CartModel> = new BehaviorSubject<CartModel>(undefined);
  public cart$ = this.cart.asObservable();

  private url = 'http://localhost:8888/';

  constructor(private http: HttpClient,
              private router: Router,
              private productsService: ProductsService,
              private usersService: UsersService) {
  }

  getCart(): Observable<CartModel> {
    return this.cart;
  }

  getUserCart(id): Observable<CartModel> {
    return this.http.get<CartModel>(this.url + 'carts/' + id);
  }

  setCart(cart: CartModel): any {
    this.cart.next(cart);
  }

  addToCart(userID, productID): any {
    return this.http.put(this.url + 'carts/' + userID, JSON.stringify({product_id: productID}), httpOptions);
  }

  removeToCart(id, productID): any{
    return this.http.post(this.url + 'carts/' + id, JSON.stringify(productID), httpOptions);
  }

  showCart(): any {
    return this.usersService.user$.subscribe(response => {
      if (response != null) {
        this.router.navigate(['/carts/', response._id]);
      }
    });
  }
}
