import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Subject, BehaviorSubject, Observable} from 'rxjs';
import {UserModel} from '../model/user.model';

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
  private username: Subject<string> = new BehaviorSubject<string>(undefined);
  private url = 'http://localhost:8888/';

  constructor(private http: HttpClient,
              private router: Router) {
  }

  getUser(): any {
    return this.user;
  }

  getUsername(): any {
    return this.username;
  }

  setUser(user: UserModel): any {
    this.user.next(user);
    this.user.subscribe( response => {
      if (response != null) {
        this.username.next(response.firstname);
      }
    });
    this.router.navigate(['/categories']);
  }

  signin(id): Observable<UserModel> {
    return this.http.post<UserModel>(this.url + 'users/signin', JSON.stringify(id), httpOptions);
  }

  signup(id): Observable<UserModel> {
    return this.http.post<UserModel>(this.url + 'users/signup', JSON.stringify(id), httpOptions);
  }

  disconnect(): void {
    this.user.next(null);
    this.username.next(null);
  }
}