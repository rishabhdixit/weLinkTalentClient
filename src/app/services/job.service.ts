import { Injectable, Inject } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class JobService {

	constructor(
		private http: Http,
		private authHttp: AuthHttp,
		@Inject('api')private api: string) {}

	search(query: String): Observable<any> {
		return this.http.get(`${this.api}/api/jobs?${query}`)
			.map((res: Response) => res.json());
	}

	get(id: string): Observable<any> {
		return this.http.get(`${this.api}/api/jobs/${id}`)
			.map((res: Response) => res.json());
	}

	getStatus(
		user: string,
		jobId: string
	): Observable<any> {
		return this.http.get(`${this.api}/api/users/${user}/applications?jobId=${jobId}`)
			.map((res: Response) => res.json());
	}
}
