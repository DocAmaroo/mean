import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductsService } from '../services/products.service';

@Component({
	selector: 'app-products',
	templateUrl: './products.component.html',
	styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
	
	public products: any;
	public categorie: String;

	constructor(
		private _productsService: ProductsService,
		private route: ActivatedRoute
	) { }

	ngOnInit(): void {
		this.categorie = this.route.snapshot.paramMap.get('categorie');
		if (this.categorie != undefined) {
			this._productsService.getProductsByCategories(this.categorie).subscribe( (response: any) => {
				this.products = response;
			});
		} else {
			this._productsService.getProducts().subscribe( (response: any) => {
				this.products = response;
			});
		}
	}
}