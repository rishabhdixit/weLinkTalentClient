import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class JobService {
	apiUrl: string;

	constructor(private http: Http, @Inject('api') api: string) {
		this.apiUrl = api;
	}

	search(query: String): Observable<any> {
		return this.http.get(`${ this.apiUrl }/api/jobs?${ query }`)
			.map((res: Response) => res.json());
	}
}
