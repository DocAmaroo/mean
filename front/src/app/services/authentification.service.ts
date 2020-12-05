import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    "Acces-Control-Allow-Methods": "GET,POST",
    "Acces-Control-Allow-Headers": "Content-type",
    "Content-type": "application/json",
    "Acces-Control-Allow-Origin": "*"
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  private user:Subject<string> = new BehaviorSubject<string>(undefined);
  private baseUrl: string = "http://localhost:8888/";

  constructor(private http: HttpClient) { }

  getUser(){ return this.user; }
  connect(data: string){ this.user.next(data); }
  disconnect(){ this.user.next(null); }
  verificationConnexion(id): Observable<any> {
    return this.http.get(this.baseUrl+'login');
  }
  register(id): Observable<any> {
    return this.http.post(this.baseUrl+'login', JSON.stringify(id), httpOptions);
  }
}
