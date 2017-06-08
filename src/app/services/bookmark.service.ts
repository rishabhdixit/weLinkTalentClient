/**
 * Created by rishabhdixit on 08/06/2017.
 */
import { Injectable, Inject } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class BookmarkService {

	constructor(private http: Http, @Inject('api')private api: string) {
	}

	addBookmark(data: any): Observable<any> {
		return this.http.post(`${this.api}/api/users/${data.userId}/bookmarks`, data.body)
			.map((res: Response) => res.json());
	}

	removeBookmark(data: any): Observable<any> {
		return this.http.delete(`${this.api}/api/users/${data.userId}/bookmarks/${data.postId}`)
			.map((res: Response) => res.json());
	}

}
