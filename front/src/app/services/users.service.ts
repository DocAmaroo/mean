import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

const httpOptions = {
	headers: new HttpHeaders({
		"Access-Control-Allow-Methods":"GET,POST",
		"Access-Control-Allow-Headers":"Content-type",
		"Access-Control-Allow-Origin":"*",
		"Content-Type":"application/json"
	})
}
@Injectable({
	providedIn: 'root'
})
export class UsersService {

	private user: Subject<String> = new BehaviorSubject<String>(undefined);
	private url: String = 'http://localhost:8888/';
	
	constructor(private http: HttpClient) { }

	getUser() {
		return this.user;
	}

	setUser(data: String) {
		this.user.next(data);
	}

	connect(id) {
		return this.http.post(this.url + 'users/signin', JSON.stringify(id), httpOptions);
	}

	register(id): Observable<any> {
		return this.http.post(this.url + 'users/signup', JSON.stringify(id), httpOptions);
	}
}
