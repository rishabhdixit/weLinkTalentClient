import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import { Observable } from 'rxjs';
import { Login } from '../models/login.model';
import { User } from '../models/user.model';
import { Profile } from '../models/profile.model';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class LoginService {
	constructor(
		private http: Http,
		private authHttp: AuthHttp,
		@Inject('api') private api: string,
	) {}

	signIn(login: Login): Observable<any> {
		return this.http.post(`${this.api}/authenticate`, {
			email:    login.username,
			password: login.password
		})
		.map((res: Response) => res.json());
	}

	linkedinSignIn(profile: Profile): Observable<any> {
		return this.http.post(`${this.api}/authenticate/linkedin`, profile)
			.map((res: Response) => res.json());
	}

	retrieveUser(): Observable<any> {
		return this.authHttp.get(`${this.api}/api/users/`)
			.map((res: Response) => res.json());
	}

	isLoggedIn() {
		return tokenNotExpired();
	}
}
