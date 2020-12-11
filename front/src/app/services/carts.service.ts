import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Subject, BehaviorSubject, Observable} from 'rxjs';
import {UsersService} from './users.service';
import {ProductsService} from './products.service';
import {CartModel} from '../model/cart.model';
import {UserModel} from "../model/user.model";


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
  public user$: Observable<UserModel>;

  private url = 'http://localhost:8888/';

  constructor(private http: HttpClient,
              private router: Router,
              private productsService: ProductsService,
              private usersService: UsersService) {
    this.user$ = this.usersService.getUser();
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

  addToCart(userid, productID): any {
    return this.http.put(this.url + 'carts/' + userid, JSON.stringify({product_id: productID}), httpOptions);
  }

  removeToCart(userid, productID): any {
    return this.http.post(this.url + 'carts/' + userid, JSON.stringify(productID), httpOptions);
  }

  showCart(): any {
    return this.usersService.user$.subscribe(response => {
      if (response != null) {
        this.router.navigate(['/carts/', response._id]);
      }
    });
  }

  emptiedCart(userid): any {
    return this.http.get(this.url + 'carts/remove/' + userid);
  }
}
