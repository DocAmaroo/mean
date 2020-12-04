import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductsService} from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: any;
  public category: string;

  constructor(private productsService: ProductsService,
              private route: ActivatedRoute) {
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
}
