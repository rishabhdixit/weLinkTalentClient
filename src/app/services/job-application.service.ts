import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import { AuthHttp } from 'angular2-jwt';
import { JobApplication } from '../models/job-application.model';
import { JobsApplied } from '../models/jobs-applied.model';

@Injectable()
export class JobApplicationService {

	constructor(
		private http: Http,
		private authHttp: AuthHttp,
		@Inject('api') private api: string
	) {}

	saveApplication(data: any): Observable<JobApplication> {
		let headers = new Headers();
		// headers.append('Content-Type', 'multipart/form-data');
		headers.append('Accept', 'application/json');
		const options = new RequestOptions({ headers: headers });
		return this.http.post(`${this.api}/api/applications`, data, options)
			.map((res: Response) => res.json());
	}

	saveReference(data: any): Observable<JobApplication> {
		const applicationId = data.applicationId;
		const body = { references_info: data.references_info };
		return this.http.put(`${this.api}/api/applications/${applicationId}`, body)
			.map((res: Response) => { return res.json(); });
	}

	loadJobApplication(id: string): Observable<JobApplication> {
		return this.http.get(`${this.api}/api/applications/${id}`)
			.map((res: Response) => res.json());
	}

	saveRefereeFeedback(id: string, data: any): Observable<any> {
		let headers = new Headers();
		headers.append('Accept', 'application/json');
		const options = new RequestOptions({ headers: headers });

		return this.http.post(`${this.api}/api/applications/${id}/feedback`, data, options)
			.map((res: Response) => res.json());
	}

	loadAllJobsApplications(): Observable<any> {
		return this.http.get(`${this.api}/api/applications`)
			.map((res: Response) => res.json());
	}

	applyJob(
		userId: string,
		applicationId: string,
		body: any
	): Observable<JobsApplied> {
		return this.authHttp.post(`${this.api}/api/users/${userId}/applications/${applicationId}`, body)
			.map((res: Response) => { return res.json(); });
	}

	sendRequestFeedbackToRecruiter(
		userId: string,
		applicationId: string,
		body: any
	): Observable<JobsApplied> {
		return this.authHttp.post(`${this.api}/api/users/${userId}/applications/${applicationId}`, body)
			.map((res: Response) => { return res.json(); });
	}

	approveRefereeFeedback(
		applicationId: string,
		feedbackId: string,
		approvedByCandidate: boolean
	): Observable<any> {
		return this.authHttp.
			put(`${this.api}/api/applications/${applicationId}/feedback/${feedbackId}`, {approved_by_candidate: approvedByCandidate})
			.map((res: Response) => { return res.json(); });
	}
}
