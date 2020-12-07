import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {ProductsService} from '../services/products.service';
import {UsersService} from '../services/users.service';
import {CartsService} from '../services/carts.service';
import {UserModel} from '../model/user.model';
import {ProductModel} from '../model/product.model';
import {CartModel} from '../model/cart.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public user$: Observable<UserModel>;
  public products: Array<ProductModel>;
  public category: string;

  constructor(private productsService: ProductsService,
              private usersService: UsersService,
              private cartsService: CartsService,
              private route: ActivatedRoute) {
    this.user$ = this.usersService.getUser();
  }

  ngOnInit(): void {
    this.category = this.route.snapshot.paramMap.get('categorie');
    if (this.category !== null) {
      this.productsService.getProductsByCategories(this.category).subscribe((response: any) => {
        this.products = response;
      });
    } else {
      this.productsService.getProducts().subscribe((response: any) => {
        this.products = response;
      });
    }
  }

  addToCart(productID): any {
    this.user$.subscribe((user: UserModel) => {
      this.cartsService.addToCart(user._id, productID);
    });
  }

  compByIncPrice(productA: ProductModel, productB: ProductModel): number {
    if (productA.price < productB.price) {
      return -1;
    }
    if (productA.price === productB.price) {
      return 0;
    }
    return 1;
  }

  compByDecPrice(productA: ProductModel, productB: ProductModel): number {
    if (productA.price > productB.price) {
      return -1;
    }
    if (productA.price === productB.price) {
      return 0;
    }
    return 1;
  }

  compByIncAlpha(productA: ProductModel, productB: ProductModel): number {
    return productA.name.localeCompare(productB.name);
  }

  compByDecAlpha(productA: ProductModel, productB: ProductModel): number {
    return -productA.name.localeCompare(productB.name);
  }

  sortByIncPrice(): Array<ProductModel> {
    return this.products.sort(this.compByIncPrice);
  }

  sortByDecPrice(): Array<ProductModel> {
    return this.products.sort(this.compByDecPrice);
  }

  sortByIncAlpha(): Array<ProductModel> {
    return this.products.sort(this.compByIncAlpha);
  }

  sortByDecAlpha(): Array<ProductModel> {
    return this.products.sort(this.compByDecAlpha);
  }
}
