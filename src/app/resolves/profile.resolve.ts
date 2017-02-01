import 'rxjs/add/operator/take';
import 'rxjs/add/operator/filter';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';

import { Profile } from '../models/profile.model';
import { ProfileService } from '../services/profile.service';
import * as profile from '../actions/profile.action';
import * as fromRoot from '../reducers';
import * as fromLogin from '../reducers';

@Injectable()
export class ProfileResolve implements Resolve<boolean> {

	constructor(
		private store: Store<fromRoot.State>,
		private profileService: ProfileService
	) {}

	hasProfileInStore(): Observable<boolean> {
		return this.store.select(fromRoot.getProfileLoaded)
			.map((loaded) => loaded)
			.take(1);
	}

	hasProfileInApi(): Observable<boolean> {
		return this.store.select(fromRoot.getUserId)
			.switchMap((id: string) => {
				return this.profileService.getProfile(id)
					.map((profileEntity) => new profile.ProfileLoadSuccessAction(profileEntity))
					.do((action: profile.ProfileLoadSuccessAction) => this.store.dispatch(action))
					.map((profile) => !!profile)
					.catch(() => {
						return of(false);
					});
			});
	}

	hasProfile(): Observable<boolean> {
		return this.hasProfileInStore()
			.switchMap(inStore => {
				if (inStore) {
					return of(inStore);
				}

				return this.hasProfileInApi();
			});
	}

	resolve(route: ActivatedRouteSnapshot) {
		return this.hasProfile().take(1);
	}
}
