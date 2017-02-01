import { Injectable, Inject } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs';
import { AuthHttp } from 'angular2-jwt';
import { Profile } from '../models/profile.model';

@Injectable()
export class ProfileService {

	constructor(
		private authHttp: AuthHttp,
		@Inject('api') private api: string) {}

	getProfile(id: string): Observable<Profile> {
		return this.authHttp.get(`${this.api}/api/users/${id}/profiles`)
			.map(res => res.json());
	}
}
