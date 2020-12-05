import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
<<<<<<< HEAD
=======
import {map} from 'rxjs/operators';
>>>>>>> origin/Thominou
import {CartsService} from '../services/carts.service';
import {UsersService} from '../services/users.service';
import {ProductsService} from '../services/products.service';
import {UserModel} from '../model/user.model';
import {CartModel} from '../model/cart.model';
<<<<<<< HEAD
import {OutOfBandDiagnosticRecorder} from "@angular/compiler-cli/src/ngtsc/typecheck/src/oob";
=======
import {ItemModel} from '../model/item.model';
import {ProductModel} from '../model/product.model';
>>>>>>> origin/Thominou

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})

export class CartsComponent implements OnInit {

<<<<<<< HEAD
  cart: CartModel = {items: [], totalPrice: 0};
  cart2: Observable<CartModel>;
  isEmpty: boolean;
  public user: Observable<UserModel>;
=======
  public user: Observable<UserModel>;
  cart: CartModel = {items: []};
  totalPrice: number;
  isEmpty: boolean;
>>>>>>> origin/Thominou

  constructor(private cartsService: CartsService,
              private usersService: UsersService,
              private productsService: ProductsService) {
    this.user = this.usersService.getUser();
<<<<<<< HEAD
    this.isEmpty = true;
  }

  ngOnInit(): void {
    this.user.subscribe((response: any) => {
      if (response === undefined) {
        return;
      }
      if (response.cart.items.length === 0) {
        this.isEmpty = true;
      } else {
        this.isEmpty = false;
        this.cart.items = [];
        const promises = [];
        let i = 0;
        for (const item of response.cart.items) {
          const promise = new Promise((resolve, reject) => {
            const data = this.productsService.getProduct(item.productId);
            data.qty = response.cart.items[i].qty;
            resolve(data);
          });
          promises.push(promise);
          i++;
        }

        Promise.all(promises).then((values: any) => {
          for (const value of values) {
            value.subscribe((data: any) => {
              data.qty = value.qty;
              this.cart.items.push(data);
            });
          }
        });
      }
=======
  }

  ngOnInit(): void {
    this.usersService.user$.pipe(
      map((user: UserModel) => {
        if (user === undefined) {
          return {items: []};
        }
        return user.cart;
      })
    ).subscribe((cart: CartModel) => {
      const promises = [];
      for (const item of cart.items) {
        const promise = new Promise<ItemModel>((resolve, reject) => {
          console.log(item);
          this.productsService.getProduct(item.product).subscribe((product: ProductModel) => {
            resolve({...product, qty: (item as ItemModel).qty, product: item.product});
          });
        });
        promises.push(promise);
      }

      Promise.all(promises).then((values: any) => {
        this.cart.items = values;
      });
>>>>>>> origin/Thominou
    });
  }

  addToCart(productID): any {
<<<<<<< HEAD
    this.user.subscribe((response: any) => {
=======
    this.usersService.user$.subscribe((response: any) => {
>>>>>>> origin/Thominou
      const promise = new Promise((resolve, reject) => {
        resolve(this.cartsService.addToCart(response._id, {product_id: productID}));
      });

<<<<<<< HEAD
      promise.then( (data: any) => {
        data.subscribe( (res: any) => {
=======
      promise.then((data: any) => {
        data.subscribe((res: any) => {
>>>>>>> origin/Thominou
          console.log(data);
        });
      });
    });
  }
}
