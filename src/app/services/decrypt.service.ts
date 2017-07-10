import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { AuthHttp } from 'angular2-jwt';


@Injectable()
export class DecryptService {
	constructor(private http: Http,
			@Inject('api') private api: string,
			private authHttp: AuthHttp) {
	}

	decryptFeedbackToken(token: String): Observable<any> {
		return this.authHttp.post(`${this.api}/api/referee-feedback`, { token })
			.map((res: Response) => res.json());
	}
}
