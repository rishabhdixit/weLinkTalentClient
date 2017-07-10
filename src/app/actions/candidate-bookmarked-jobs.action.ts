import { type } from '../util';
import { Action } from '@ngrx/store';

export const ActionTypes = {
	LOAD:             type('[BOOKMARKS] Bookmark Jobs Load'),
	LOAD_SUCCESS:     type('[BOOKMARKS] Bookmark Jobs Load Success'),
	LOAD_FAIL:        type('[BOOKMARKS] Bookmark Jobs Load Fail'),
};

export class BookmarkJobsLoadAction implements Action {
	type = ActionTypes.LOAD;

	constructor(public payload: any) {
	}
}
export class BookmarkJobsLoadSuccessAction implements Action {
	type = ActionTypes.LOAD_SUCCESS;

	constructor(public payload: any) {
	}
}
export class BookmarkJobsLoadFailAction implements Action {
	type = ActionTypes.LOAD_FAIL;

	constructor(public payload: any) {
	}
}

export type Actions = BookmarkJobsLoadAction
	| BookmarkJobsLoadSuccessAction
	| BookmarkJobsLoadFailAction;
