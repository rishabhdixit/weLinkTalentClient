import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable()
export class LoggedInGuard implements CanActivate {

	constructor(private router: Router,
							private loginService: LoginService) {
	}

	canActivate() {
		if (!this.loginService.isLoggedIn()) {
			this.router.navigate(['login']);
		}
		return true;
	}
}

