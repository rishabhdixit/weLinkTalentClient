import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class JobService {

	constructor(private http: Http, @Inject('api')private api: string) {
	}

	search(query: String): Observable<any> {
		return this.http.get(this.api + '/api/jobs?' + query)
			.map((res: Response) => res.json());
	}

	/**
	 * TODO : create an API
	 */
	get(id: string): Observable<any> {
		return Observable.of({});
	}
}
