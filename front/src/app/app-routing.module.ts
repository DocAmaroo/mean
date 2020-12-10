import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { UsersComponent } from './users/users.component';
import { CartsComponent } from './carts/carts.component';

const routes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products/:categorie', component: ProductsComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'users/signin', component: UsersComponent},
  {path: 'users/signup', component: UsersComponent},
  {path: 'carts/:id', component: CartsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
