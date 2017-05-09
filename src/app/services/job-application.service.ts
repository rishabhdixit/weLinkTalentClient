import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { AuthHttp } from 'angular2-jwt';
import { Application, Reference } from '../models/job-application.model';

@Injectable()
export class JobApplicationService {

	constructor(
		private http: Http,
		private authHttp: AuthHttp,
		@Inject('api') private api: string
	) {}

}
