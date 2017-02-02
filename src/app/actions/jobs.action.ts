import { type } from '../util';
import { Action } from '@ngrx/store';

export const ActionTypes = {
	JOBS_LOAD: 					type('[JOBS] Jobs load'),
	JOBS_LOAD_SUCCESS: 	type('[JOBS] Jobs load success'),
	JOBS_LOAD_FAIL: 		type('[JOBS] Jobs load fail'),
	JOBS_SEARCH:        type('[JOBS] Search'),
	JOBS_SELECT:        type('[JOBS] Select'),
};

export class JobsLoadAction implements Action {
	type = ActionTypes.JOBS_LOAD;

	constructor(public payload: any) {
	}
}

export class JobsLoadSuccessAction implements Action {
	type = ActionTypes.JOBS_LOAD_SUCCESS;

	constructor(public payload: any) {
	}
}

export class JobsLoadFailAction implements Action {
	type = ActionTypes.JOBS_LOAD_FAIL;

	constructor(public payload: any) {
	}
}

export class JobsSearchAction implements Action {
	type = ActionTypes.JOBS_SEARCH;

	constructor(public payload: any) {
	}
}

export class JobsSelectAction implements Action {
	type = ActionTypes.JOBS_SELECT;

	constructor(public payload: any) {
	}
}

export type Actions = JobsLoadAction
	| JobsLoadSuccessAction
	| JobsLoadFailAction
	| JobsSearchAction
	| JobsSelectAction;
