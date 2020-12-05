import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {CartsService} from '../services/carts.service';
import {UsersService} from '../services/users.service';
import {ProductsService} from '../services/products.service';
import {UserModel} from '../model/user.model';
import {CartModel} from '../model/cart.model';
import {OutOfBandDiagnosticRecorder} from "@angular/compiler-cli/src/ngtsc/typecheck/src/oob";

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})

export class CartsComponent implements OnInit {

  cart: CartModel = {items: [], totalPrice: 0};
  cart2: Observable<CartModel>;
  isEmpty: boolean;
  public user: Observable<UserModel>;

  constructor(private cartsService: CartsService,
              private usersService: UsersService,
              private productsService: ProductsService) {
    this.user = this.usersService.getUser();
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
    });
  }

  addToCart(productID): any {
    this.user.subscribe((response: any) => {
      const promise = new Promise((resolve, reject) => {
        resolve(this.cartsService.addToCart(response._id, {product_id: productID}));
      });

      promise.then( (data: any) => {
        data.subscribe( (res: any) => {
          console.log(data);
        });
      });
    });
  }
}
