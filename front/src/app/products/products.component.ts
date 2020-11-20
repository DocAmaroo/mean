import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  private products: any;
  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getProduits().subscribe(products => {
      this.products = products;
      console.log(products);
    });
  }

}
