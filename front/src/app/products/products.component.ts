import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  public products: any;

  constructor(private _productsService: ProductsService) { }

  ngOnInit(): void {
    this._productsService.getProducts().subscribe( (response: any) => {
      this.products = response;
    });
  }
}