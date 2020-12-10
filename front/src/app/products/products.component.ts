import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
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
  public cart$: Observable<CartModel>;
  public products: Array<ProductModel> = [];

  public isFilter: boolean;

  form = new FormGroup({
    name: new FormControl(''),
    categorie: new FormControl(''),
    price: new FormControl(''),
    marque: new FormControl('')
  });

  public category: string;

  constructor(private productsService: ProductsService,
              private usersService: UsersService,
              private cartsService: CartsService,
              private route: ActivatedRoute) {
    this.user$ = this.usersService.getUser();
    this.cart$ = this.cartsService.getCart();
  }

  ngOnInit(): void {
    this.category = this.route.snapshot.paramMap.get('categorie');
    if (this.category !== null) {
      this.productsService.getProductsByCategories(this.category).subscribe((response: any) => {
        this.products = response;
      });
    } else {
      this.productsService.getProducts('').subscribe((response: any) => {
        this.products = response;
      });
    }
  }

  addToCart(productID): any {
    this.user$.subscribe((user: UserModel) => {
      this.cartsService.addToCart(user._id, productID).subscribe((response: any) => {
        if (response.ok) {
          this.cartsService.getUserCart(user._id).subscribe((cart: CartModel) => {
            this.cartsService.setCart(cart);
          });
        }
      });
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

  onSubmit(): any {
    let res = '';
    const entries = Object.entries(this.form.value);
    let cpt = 0;
    let asFoundOne = 0;

    for (const entry of entries) {
      if (entry[1] !== '') {
        asFoundOne = 1;
        if (cpt !== 0) {
          res += '&';
        }
        res += entry[0] + '=' + entry[1];
        cpt++;
      }
    }
    if (asFoundOne) {
      this.toggleFilterBtn();
      this.productsService.getProducts('?' + res).subscribe((products: Array<ProductModel>) => {
        this.products = products;
      });
    }
  }

  resetFilter(): any {
    this.productsService.getProducts('').subscribe((products: Array<ProductModel>) => {
      this.toggleFilterBtn();
      this.products = products;
    });
  }

  toggleFilterBtn(): void {
    this.isFilter = !this.isFilter;
  }
}
