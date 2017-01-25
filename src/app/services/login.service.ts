import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

	constructor() {
	}

	signIn(login: any): any {
		return { login: login.login, user: { displayname: login.login.username } };
	}

}
