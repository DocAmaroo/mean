<<<<<<< HEAD
import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Subject, BehaviorSubject, Observable} from 'rxjs';
=======
import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Subject, BehaviorSubject, Observable} from 'rxjs';
import {UsersService} from './users.service';
>>>>>>> origin/Thominou


const httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Methods': 'GET,POST',
    'Access-Control-Allow-Headers': 'Content-type',
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  private url = 'http://localhost:8888/';

  constructor(private http: HttpClient,
<<<<<<< HEAD
              private router: Router) {
=======
              private router: Router,
              private usersService: UsersService) {
>>>>>>> origin/Thominou
  }

  getCart(id): Observable<any> {
    return this.http.get(this.url + 'carts/' + id);
  }

<<<<<<< HEAD
  addToCart(id, productID): any {
    return this.http.post(this.url + 'carts/' + id, JSON.stringify(productID), httpOptions);
  }
=======
  addToCart(id, productID): Observable<any> {
    return this.http.post(this.url + 'carts/' + id, JSON.stringify(productID), httpOptions);
  }

  showCart(): any {
    return this.usersService.user$.subscribe(response => {
      if (response != null) {
        this.router.navigate(['/carts/', response._id]);
      }
    });
  }
>>>>>>> origin/Thominou
}
