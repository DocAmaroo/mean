import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {CartsService} from '../services/carts.service';
import {UsersService} from '../services/users.service';
import {ProductsService} from '../services/products.service';
import {UserModel} from '../model/user.model';
import {CartModel} from '../model/cart.model';
import {ItemModel} from '../model/item.model';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})

export class CartsComponent implements OnInit {

  public user: Observable<UserModel>;
  public cart: CartModel = {items: []};
  public totalPrice = 0;
  public isEmpty: boolean;

  constructor(private cartsService: CartsService,
              private usersService: UsersService,
              private productsService: ProductsService) {
    this.user = this.usersService.getUser();
  }


  ngOnInit(): void {
    this.user.subscribe((user: UserModel) => {
      this.cartsService.getUserCart(user._id).subscribe((cart: CartModel) => {
        this.cartsService.setCart(cart);
        this.initCart(cart);
      });
    });
  }

  initCart(cart): any {
    cart.items.forEach((item: ItemModel) => {
      this.productsService.getProduct(item.product).subscribe((product: ItemModel) => {
        const obj = {...product, qty: item.qty, product: item.product};
        this.cart.items.push(obj);
        this.totalPrice += product.price * item.qty;
        this.cartsService.setCart(this.cart);
      });
    });
  }

  addToCart(productID): any {
    this.user.subscribe((user: UserModel) => {
      this.cartsService.addToCart(user._id, productID).subscribe((res: any) => {
        if (res.ok) {
          const i = this.cart.items.findIndex(obj => obj.product === productID);
          if (i < 0) {
            this.productsService.getProduct(productID).subscribe((product: ItemModel) => {
              const obj = {...product, qty: 1, product: productID};
              this.cart.items.push(obj);
              this.totalPrice += product.price;
            });
          } else {
            this.cart.items[i].qty++;
            this.totalPrice += this.cart.items[i].price;
          }
        }
        this.cartsService.setCart(this.cart);
      });
    });
  }

  removeToCart(productID): any {
    this.user.subscribe((user: UserModel) => {
      this.cartsService.removeToCart(user._id, {product_id: productID}).subscribe((res: any) => {
        if (res.ok) {
          const i = this.cart.items.findIndex(obj => obj.product === productID);
          if (i >= 0) {
            this.totalPrice -= this.cart.items[i].price;
            if (this.cart.items[i].qty === 1) {
              this.cart.items.splice(i, 1);
            } else {
              this.cart.items[i].qty--;
            }
          }
        }
        this.cartsService.setCart(this.cart);
      });
    });
  }

  emptiedCart(): any {
    this.user.subscribe((user: UserModel) => {
      this.cartsService.emptiedCart(user._id).subscribe((response: any) => {
        if (response.ok) {
          this.cart.items = [];
          this.totalPrice = 0;
        }
      });
    });
  }
}
