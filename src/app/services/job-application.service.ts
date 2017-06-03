import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { AuthHttp } from 'angular2-jwt';
import { Application } from '../models/job-application.model';

@Injectable()
export class JobApplicationService {

	constructor(
		private http: Http,
		private authHttp: AuthHttp,
		@Inject('api') private api: string
	) {}

	saveApplication(data: any): Observable<Application> {
		return this.http.post(`${this.api}/api/applications`, data)
			.map((res: Response) => res.json());
	}

	saveReference(data: any): Observable<Application> {
		return this.http.put(`${this.api}/api/applications/${data.applicationId}`, data.references_info)
			.map((res: Response) => {
			console.log(res.json()); return	res.json();
			})
			.catch((err) => {
			console.log(err);
			return Observable.of({});
		});
	}
}
