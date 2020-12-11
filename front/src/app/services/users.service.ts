import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Subject, BehaviorSubject, Observable} from 'rxjs';
import {UserModel} from '../model/user.model';
import {CartModel} from '../model/cart.model';

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
export class UsersService {

  private user: Subject<UserModel> = new BehaviorSubject<UserModel>(undefined);
  public user$ = this.user.asObservable();

  private url = 'http://localhost:8888/';

  constructor(private http: HttpClient,
              private router: Router) {
  }

  getUser(): Observable<UserModel> {
    return this.user$;
  }

  setUser(user: UserModel): any {
    this.user.next(user);
    this.router.navigate(['/products']);
  }


  signin(id): Observable<UserModel> {
    return this.http.post<UserModel>(this.url + 'users/signin', JSON.stringify(id), httpOptions);
  }

  signup(id): Observable<UserModel> {
    return this.http.post<UserModel>(this.url + 'users/signup', JSON.stringify(id), httpOptions);
  }

  disconnect(): void {
    this.user.next(null);
  }
}
