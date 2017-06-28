import { createSelector } from 'reselect';
import * as application from '../actions/job-application.action';
import { JobApplication } from '../models/job-application.model';
import { Job } from 'app/models/job.model';
import { Reference } from '../models/reference.model';
import { User } from 'app/models/user.model';

export interface State {
	user: User;
	job: Job;
	application: JobApplication;
	condition: boolean;
	reference: Reference[];
}

const initialState: State = {
	user: {} as User,
	job: {} as Job,
	application: {} as JobApplication,
	condition: false,
	reference: null,

};

export function reducer(state = initialState, action: application.Actions): State {
	switch (action.type) {
		case application.ActionType.APPLICATION_CONCEPT_LOAD:
			return Object.assign({}, state, {
				job: action.payload.job,
				user: action.payload.user
			});
		case application.ActionType.APPLICATION_CONCEPT_ACCEPT:
		case application.ActionType.APPLICATION_FORM_LOAD:
			return Object.assign({}, state, {
				condition: action.payload
			});
		case application.ActionType.APPLICATION_FORM_SUBMIT_SUCCESS:
			return Object.assign({}, state, {
				application: action.payload
			});

		case application.ActionType.APPLICATION_REFERENCE_FORM_SUBMIT:
			return Object.assign({}, state, {
				reference: action.payload.references_info
			});

		case application.ActionType.APPLICATION_REFERENCE_FORM_SUBMIT_SUCCESS:
			return Object.assign({}, state, {
				application: action.payload
			});

		case application.ActionType.APPLICATION_REFERENCE_FORM_SUBMIT_FAIL:
			return Object.assign({}, state, {
				reference: null
			});

		default:
			return state;
	}
}


export const getApplicationJob = (state: State) => state.job;
export const getApplicationForm = (state: State) => state.application;
export const getApplicationFormReference = (state: State) => state.reference;
export const getCondition = (state: State) => state.condition;
export const getLoginUser = (state: State) => state.user;


//noinspection TypeScriptValidateTypes
export const IsValidApplicationForm = createSelector(getApplicationJob, getCondition, getLoginUser,
	(job, condition, user) => {
	return (job != null && condition && user != null);
});

//noinspection TypeScriptValidateTypes
export const IsValidApplicationFormReference = createSelector(getApplicationJob, getApplicationForm,
	getCondition, getLoginUser, (job, application, condition, user) => {
		return (job != null && application && condition && user != null);
	});

//noinspection TypeScriptValidateTypes
export const IsValidApplicationThankYouPage = createSelector(getApplicationJob, getApplicationForm,
	getApplicationFormReference, getCondition, getLoginUser, (job, application, reference, condition, user) => {
		return (job != null && application && reference && condition && user != null);
	});
