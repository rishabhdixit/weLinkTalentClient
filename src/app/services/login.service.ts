import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { LogIn } from '../models/login.model';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class LoginService {
	apiUrl: string;

	constructor(private http: Http, @Inject('api') api: string) {
		this.apiUrl = api;
	}

	signIn(login: LogIn): Observable<any> {
		return this.http.post(this.apiUrl + '/authenticate', {
			email:    login.username,
			password: login.password
		})
		.map((res: Response) => res.json());
	}

	isLoggedIn() {
		return tokenNotExpired();
	}
}
