import { Injectable, Inject } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Job } from '../models/job.model';

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

	getBookmarkJobs(user: string): Observable<any> {
		return this.http.get(`${this.api}/api/users/${user}/bookmarks`)
			.map((res: Response) => res.json());
	}

	createJob(data: any): Observable<any> {
		return this.authHttp.post(`${this.api}/api/jobs/`, data)
			.map((res: Response) => res.json());
	}

	getCreatedJobs(
		user: string
	): Observable<any> {
		return this.authHttp.get(`${this.api}/api/users/${user}/jobs`)
		.map((res: Response) => res.json());
	}

	editJob(jobId: string, data: any): Observable<any> {
		return this.authHttp.put(`${this.api}/api/jobs/${jobId}`, data)
			.map((res: Response) => res.json());
	}

	archiveJob(job: Job): Observable<any> {
		return this.authHttp.delete(`${this.api}/api/jobs/${job._id}`, {})
			.map((res: Response) => res.json());
	}
}
