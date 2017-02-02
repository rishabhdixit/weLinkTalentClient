import { type } from '../util';
import { Action } from '@ngrx/store';

export const ActionTypes = {
	LOAD: 					type('[JOBS] Jobs load'),
	LOAD_SUCCESS: 	type('[JOBS] Jobs load success'),
	LOAD_FAIL: 		type('[JOBS] Jobs load fail'),
	SEARCH:        type('[JOBS] Search'),
	SELECT:        type('[JOBS] Select'),
};

export class JobsLoadAction implements Action {
	type = ActionTypes.LOAD;

	constructor(public payload: any) {
	}
}

export class JobsLoadSuccessAction implements Action {
	type = ActionTypes.LOAD_SUCCESS;

	constructor(public payload: any) {
	}
}

export class JobsLoadFailAction implements Action {
	type = ActionTypes.LOAD_FAIL;

	constructor(public payload: any) {
	}
}

export class JobsSearchAction implements Action {
	type = ActionTypes.SEARCH;

	constructor(public payload: any) {
	}
}

export class JobsSelectAction implements Action {
	type = ActionTypes.SELECT;

	constructor(public payload: any) {
	}
}

export type Actions = JobsLoadAction
	| JobsLoadSuccessAction
	| JobsLoadFailAction
	| JobsSearchAction
	| JobsSelectAction;
