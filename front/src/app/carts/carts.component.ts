import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {CartsService} from '../services/carts.service';
import {UsersService} from '../services/users.service';
import {ProductsService} from '../services/products.service';
import {UserModel} from '../model/user.model';

@Component({
  selector: 'app-carts',
  templateUrl: './carts.component.html',
  styleUrls: ['./carts.component.css']
})
export class CartsComponent implements OnInit {

  cart: any;
  isEmpty: boolean;
  private user: Observable<UserModel>;

  constructor(private cartsService: CartsService,
              private usersService: UsersService,
              private productsService: ProductsService) {
    this.user = this.usersService.getUser();
    this.isEmpty = false;
  }

  ngOnInit(): void {
    this.user.subscribe((response: any) => {
      if (response === undefined) { return; }
      if (response.cart.items.length === 0) { this.isEmpty = true; }
      else {
        for (let product of response.cart.items) {
          let info = this.productsService.getProduct(product.productId);
          console.log(info);
        }
      }
    });
  }
}
