import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {CartsService} from '../services/carts.service';
import {UsersService} from '../services/users.service';
import {ProductsService} from '../services/products.service';
import {UserModel} from '../model/user.model';
import {CartModel} from '../model/cart.model';
import {ItemModel} from '../model/item.model';
import {ProductModel} from '../model/product.model';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})

export class CartsComponent implements OnInit {

  public user: Observable<UserModel>;
  cart: CartModel = {items: []};
  totalPrice: number;
  isEmpty: boolean;

  constructor(private cartsService: CartsService,
              private usersService: UsersService,
              private productsService: ProductsService) {
    this.user = this.usersService.getUser();
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
    });
  }

  addToCart(productID): any {
    this.usersService.user$.subscribe((response: any) => {
      const promise = new Promise((resolve, reject) => {
        resolve(this.cartsService.addToCart(response._id, {product_id: productID}));
      });

      promise.then((data: any) => {
        data.subscribe((res: any) => {
          console.log(data);
        });
      });
    });
  }
}
