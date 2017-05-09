import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Action } from '@ngrx/store';
import { ProfileService } from '../services/profile.service';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';

import * as fromRoot from '../reducers';
import * as login from '../actions/login.action';
import * as profile from '../actions/profile.action';
import * as ui from '../actions/ui.action';

import { createProfile } from '../reducers/profile.reducer';

@Injectable()
export class ProfileEffects {

	@Effect()
	linkedin$: Observable<Action> = this.actions
		.ofType(profile.ActionTypes.LINKEDIN)
		.map((action: profile.ProfileLinkedinAction) => createProfile(action.payload))
		.switchMap(payload => {
			return this.profileService.linkedinSignIn(payload)
				.mergeMap((data) => {
					localStorage.setItem('id_token', data.token);

					return Observable.from([
						new login.LoginSuccessAction(data.user),
						new profile.ProfileLinkedinSuccessAction(data.profile),
					]);
				})
				.catch(() => Observable.of(new profile.ProfileLinkedinFailAction(false)));
		});

	@Effect({ dispatch: false })
	logout$ = this.actions
		.ofType(login.ActionTypes.LOGOUT)
		.do(() => localStorage.removeItem('id_token'))
		.do(() => this.router.navigate(['login']));

	@Effect()
	updateProfile$: Observable<Action> = this.actions
		.ofType(profile.ActionTypes.UPDATE)
		.withLatestFrom(this.store, (action, state) => {
			return {
				userId:    state.login.user.id,
				profileId: state.profile.profile.id,
				data:      action.payload
			};
		})
		.switchMap((payload) => {
			const { userId, profileId, data } = payload;

			return this.profileService.updateProfile(userId, profileId, data)
				.mergeMap((response) => {
					return Observable.from([
						new profile.ProfileUpdateSuccessAction(response),
						new ui.FormEditMode(''),
					]);
				});
		});

	@Effect()
	updatePosition$: Observable<Action> = this.actions
		.ofType(profile.ActionTypes.POSITION_UPDATE)
		.withLatestFrom(this.store, (action, state) => {
			return {
				userId:     state.login.user.id,
				profileId:  state.profile.profile.id,
				positionId: action.payload.id,
				data:       action.payload.position,
			};
		})
		.switchMap((payload) => {
			const { userId, profileId, positionId, data } = payload;

			return this.profileService.updatePosition(userId, profileId, positionId, data)
				.mergeMap((response) => {
					return Observable.from([
						new profile.PositionUpdateSuccessAction(response),
						new ui.FormEditMode(''),
					]);
				});
		});

	@Effect()
	createPosition$: Observable<Action> = this.actions
		.ofType(profile.ActionTypes.POSITION_CREATE)
		.withLatestFrom(this.store, (action, state) => {
			return {
				userId:    state.login.user.id,
				profileId: state.profile.profile.id,
				data:      action.payload.position
			};
		})
		.switchMap((payload) => {
			const { userId, profileId, data } = payload;

			return this.profileService.createPosition(userId, profileId, data)
				.mergeMap((response) => {
					return Observable.from([
						new profile.PositionCreateSuccessAction(response),
						new ui.FormEditMode(''),
					]);
				});
		});

	@Effect()
	removePosition$: Observable<Action> = this.actions
		.ofType(profile.ActionTypes.POSITION_REMOVE)
		.withLatestFrom(this.store, (action, state) => {
			return {
				userId:     state.login.user.id,
				profileId:  state.profile.profile.id,
				positionId: action.payload.id,
				data:       action.payload.position,
			};
		})
		.switchMap((payload) => {
			const { userId, profileId, positionId, data } = payload;

			return this.profileService.removePosition(userId, profileId, positionId, data)
				.mergeMap((response) => {
					return Observable.from([
						new profile.PositionRemoveSuccessAction(response),
					]);
				});
		});

	@Effect()
	createSkill$: Observable<Action> = this.actions
		.ofType(profile.ActionTypes.SKILLS_CREATE)
		.withLatestFrom(this.store, (action, state) => {
			return {
				userId:    state.login.user.id,
				profileId: state.profile.profile.id,
				data:      action.payload.skill
			};
		})
		.switchMap((payload) => {
			const { userId, profileId, data } = payload;

			return this.profileService.createSkill(userId, profileId, data)
				.mergeMap((response) => {
					return Observable.from([
						new profile.SkillCreateSuccessAction(response),
						new ui.FormEditMode(''),
					]);
				});
		});

	constructor(
		private actions: Actions,
		private profileService: ProfileService,
		private router: Router,
		private store: Store<fromRoot.State>,
	) {}
}
