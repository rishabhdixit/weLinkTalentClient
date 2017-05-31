import * as lodash from 'lodash';

import * as application from '../actions/job-application.action';
import { Application, Reference } from '../models/job-application.model';
import { Job } from 'app/models/job.model';

export interface State {
	job: Job;
	application: Application;
	condition: boolean;
	reference: Reference[];
}

const initialState: State = {
	job: {} as Job,
	application: {} as Application,
	condition: false,
	reference: null,

};

export function reducer(state = initialState, action: application.Actions): State {
	switch (action.type) {
		case application.ActionType.APPLICATION_CONCEPT_LOAD:
			return Object.assign({}, state, {
				job : action.payload
			});
		case application.ActionType.APPLICATION_CONCEPT_ACCEPT:
		case application.ActionType.APPLICATON_FORM_LOAD:
		console.log(action.payload);
			return Object.assign({}, state, {
				condition: action.payload
			});
		default:
			return state;
	}
}
