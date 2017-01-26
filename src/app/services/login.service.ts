import {Injectable, Inject} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import {LogIn} from '../models/login.model';


@Injectable()
export class LoginService {
	api_url: string;

	constructor(private http: Http, @Inject('api') api: string) {
		this.api_url = api;
	}

	signIn(login: LogIn): Observable<any> {
		return this.http.post(this.api_url + '/authenticate',
			{
				email: login.username,
				password: login.password
			})
			.map((res: Response) => res.json());
	}

}
