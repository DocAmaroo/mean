import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { CategoriesComponent } from './categories/categories.component';
import { MenuComponent } from './menu/menu.component';
import { UsersComponent } from './users/users.component';
import { CartsComponent } from './carts/carts.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CategoriesComponent,
    MenuComponent,
    UsersComponent,
    CartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
