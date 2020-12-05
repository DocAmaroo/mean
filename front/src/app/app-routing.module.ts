import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', component: ProductsComponent}, //home serait mieux
  {path: 'products', component: ProductsComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'connexion', component: ConnexionComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
