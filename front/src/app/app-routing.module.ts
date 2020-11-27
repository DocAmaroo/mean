import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  {path: '', component: ProductsComponent}, //home serait mieux
  {path: 'products', component: ProductsComponent},
  {path: 'products/:categorie', component: ProductsComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'login', component: CategoriesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
