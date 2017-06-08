import { type } from '../util';
import { Action } from '@ngrx/store';

export const ActionTypes = {
	LOAD: 					type('[JOBS] Jobs load'),
	LOAD_SUCCESS: 			type('[JOBS] Jobs load success'),
	LOAD_FAIL: 				type('[JOBS] Jobs load fail'),
	SEARCH:        			type('[JOBS] Search'),
	SELECT:        			type('[JOBS] Select'),
	LOAD_DETAIL: 					type('[JOBS] Jobs load detail'),
	ADD_BOOKMARK: 	  				type('[USERS] Add bookmark'),
	ADD_BOOKMARK_SUCCESS: 		type('[USERS] Add bookmark success'),
	ADD_BOOKMARK_FAIL: 				type('[USERS] Add bookmark failure'),
	REMOVE_BOOKMARK: 					type('[USERS] Remove bookmark '),
	REMOVE_BOOKMARK_SUCCESS: 	type('[USERS] Remove bookmark success'),
	REMOVE_BOOKMARK_FAIL: 		type('[USERS] Remove bookmark failure'),
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
export class JobsLoadDetailAction implements Action {
	type = ActionTypes.LOAD_DETAIL;

	constructor(public payload: any) {
	}
}

export class AddBookmarkAction implements Action {
	type = ActionTypes.ADD_BOOKMARK;

	constructor(public payload: any) {
	}
}

export class AddBookmarkSuccessAction implements Action {
	type = ActionTypes.ADD_BOOKMARK_SUCCESS;

	constructor(public payload: any) {
	}
}

export class AddBookmarkFailAction implements Action {
	type = ActionTypes.ADD_BOOKMARK_FAIL;

	constructor(public payload: any) {
	}
}

export class RemoveBookmarkAction implements Action {
	type = ActionTypes.REMOVE_BOOKMARK;

	constructor(public payload: any) {
	}
}

export class RemoveBookmarkSuccessAction implements Action {
	type = ActionTypes.REMOVE_BOOKMARK_SUCCESS;

	constructor(public payload: any) {
	}
}
export class RemoveBookmarkFailAction implements Action {
	type = ActionTypes.REMOVE_BOOKMARK_FAIL;

	constructor(public payload: any) {
	}
}

export type Actions = JobsLoadAction
	| JobsLoadSuccessAction
	| JobsLoadFailAction
	| JobsSearchAction
	| JobsSelectAction
	| JobsLoadDetailAction
	| AddBookmarkAction
	| AddBookmarkSuccessAction
	| AddBookmarkFailAction
	| RemoveBookmarkAction
	| RemoveBookmarkSuccessAction
	| RemoveBookmarkFailAction;
