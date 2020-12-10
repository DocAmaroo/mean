import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../services/products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  public categories: any;

  constructor(private productsService: ProductsService) {
  }

  ngOnInit(): void {
    this.productsService.getCategories().subscribe((response: any) => {
      this.categories = response;
    });
  }
}
