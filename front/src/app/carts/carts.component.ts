import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {CartsService} from '../services/carts.service';
import {UsersService} from '../services/users.service';
import {ProductsService} from '../services/products.service';
import {UserModel} from '../model/user.model';
import {CartModel} from '../model/cart.model';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})

export class CartsComponent implements OnInit {

  cart: CartModel = {items: [], totalPrice: 0};
  isEmpty: boolean;
  private user: Observable<UserModel>;

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
            resolve(this.productsService.getProduct(item.productId));
          }).then((res: any) => {
            res.subscribe((prodInfo: any) => {
              this.cart.items.push(prodInfo);
            });
          });

          promises.push(promise);
          i++;
        }

        Promise.all(promises).then(() => {
          console.log(this.cart.items);
        });
      }
    });
  }
}
