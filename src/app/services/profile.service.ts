import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { AuthHttp } from 'angular2-jwt';
import { Profile, Position, Skill } from '../models/profile.model';

@Injectable()
export class ProfileService {

	constructor(
		private http: Http,
		private authHttp: AuthHttp,
		@Inject('api') private api: string) {}

	linkedinSignIn(profile: Profile): Observable<any> {
		return this.http.post(`${this.api}/authenticate/linkedin`, profile)
			.map((res: Response) => res.json());
	}

	getProfile(id: string): Observable<Profile> {
		return this.authHttp.get(`${this.api}/api/users/${id}/profiles`)
			.map(res => res.json());
	}

	updateProfile(
		userId: string,
		profileId: string,
		data: any
	): Observable<Position> {
		return this.authHttp.put(
			`${this.api}/api/users/${userId}/profiles/${profileId}`,
			data,
		).map(res => res.json());
	}

	updatePosition(
		userId: string,
		profileId: string,
		positionId: string,
		data: any
	): Observable<Position> {
		return this.authHttp.put(
			`${this.api}/api/users/${userId}/profiles/${profileId}/positions/${positionId}`,
			data
		).map(res => res.json());
	}

	createPosition(
		userId: string,
		profileId: string,
		data: any
	): Observable<Position> {
		return this.authHttp.post(
			`${this.api}/api/users/${userId}/profiles/${profileId}/positions`,
			data
		).map(res => res.json());
	}

	createSkill(
		userId: string,
		profileId: string,
		data: any
	): Observable<Skill> {
		return this.authHttp.post(
			`${this.api}/api/users/${userId}/profiles/${profileId}/skills`,
			data
		).map(res => res.json());
	}
}
