import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { AuthHttp } from 'angular2-jwt';
import { User } from '../models/user.model';

@Injectable()
export class UserService {

	constructor(
		private http: Http,
		private authHttp: AuthHttp,
		@Inject('api') private api: string) {}

	getUserById(id: string): Observable<User> {
		return this.authHttp.get(`${this.api}/api/users/${id}`)
			.map((res: Response) => res.json());
	}
}
