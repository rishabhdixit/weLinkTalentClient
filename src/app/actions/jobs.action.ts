import { type } from '../util';
import { Action } from '@ngrx/store';

export const ActionTypes = {
	LOAD:                                     type('[JOBS] Jobs load'),
	LOAD_SUCCESS:                             type('[JOBS] Jobs load success'),
	LOAD_FAIL:                                type('[JOBS] Jobs load fail'),
	SEARCH:                                   type('[JOBS] Search'),
	SELECT:                                   type('[JOBS] Select'),
	LOAD_DETAIL:                              type('[JOBS] Jobs load detail'),
	GET_STATUS:                               type('[JOBS] Get Job Status'),
	GET_STATUS_SUCCESS:                       type('[JOBS] Get Job Status Success'),
	GET_STATUS_FAIL:                          type('[JOBS] Get Job Status Fail'),
	JOB_CREATION:                             type('[JOBS] Job Creation'),
	JOB_CREATION_SUCCESS:                     type('[JOBS] Job Creation Success'),
	JOB_CREATION_FAIL:                        type('[JOBS] Job Creation Fail'),
	JOB_EDITING:                              type('[JOBS] Job Editing'),
	JOB_EDITING_SUCCESS:                      type('[JOBS] Job Editing Success'),
	JOB_EDITING_FAIL:                         type('[JOBS] Job Editing Fail'),
	JOB_ARCHIVE:                              type('[JOBS] Job Archive'),
	JOB_ARCHIVE_SUCCESS:                      type('[JOBS] Job Archive Success'),
	JOB_ARCHIVE_FAIL:                         type('[JOBS] Job Archive Fail'),
	LOAD_CREATED_JOBS:                        type('[JOBS] Created Jobs load'),
	LOAD_CREATED_JOBS_SUCCESS:                type('[JOBS] Created Jobs load success'),
	LOAD_CREATED_JOBS_FAIL:                   type('[JOBS] Created Jobs load fail'),
	LOAD_JOB_FROM_APPLICATION:                type('[JOBS] Job Load From Application'),
	LOAD_JOB_FROM_APPLICATION_SUCCESS:        type('[JOBS] Job Load From Application Success'),
	LOAD_JOB_FROM_APPLICATION_FAIL:           type('[JOBS] Job Load From Application Fail'),
	ADD_BOOKMARK:                             type('[USERS] Add bookmark'),
	ADD_BOOKMARK_SUCCESS:                     type('[USERS] Add bookmark success'),
	ADD_BOOKMARK_FAIL:                        type('[USERS] Add bookmark failure'),
	REMOVE_BOOKMARK:                          type('[USERS] Remove bookmark '),
	REMOVE_BOOKMARK_SUCCESS:                  type('[USERS] Remove bookmark success'),
	REMOVE_BOOKMARK_FAIL:                     type('[USERS] Remove bookmark failure'),
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

export class GetJobStatusAction implements Action {
	type = ActionTypes.GET_STATUS;

	constructor(public payload: any) {
	}
}
export class GetJobStatusSuccessAction implements Action {
	type = ActionTypes.GET_STATUS_SUCCESS;

	constructor(public payload: any) {
	}
}
export class GetJobStatusFailAction implements Action {
	type = ActionTypes.GET_STATUS_FAIL;

	constructor(public payload: any) {
	}
}

export class JobCreationAction implements Action {
	type = ActionTypes.JOB_CREATION;

	constructor(public payload: any) {}
}
export class JobCreationSuccessAction implements Action {
	type = ActionTypes.JOB_CREATION_SUCCESS;

	constructor(public payload: any) {}
}
export class JobCreationFailAction implements Action {
	type = ActionTypes.JOB_CREATION_FAIL;

	constructor(public payload: any) {}
}

export class CreateJobsLoadAction implements Action {
	type = ActionTypes.LOAD_CREATED_JOBS;

	constructor(public payload: any) {}
}
export class CreateJobsLoadSuccessAction implements Action {
	type = ActionTypes.LOAD_CREATED_JOBS_SUCCESS;

	constructor(public payload: any) {}
}
export class CreateJobsLoadFailAction implements Action {
	type = ActionTypes.LOAD_CREATED_JOBS_FAIL;

	constructor(public payload: any) {}
}

export class JobEditingAction implements Action {
	type = ActionTypes.JOB_EDITING;

	constructor(public payload: any) {}
}
export class JobEditingSuccessAction implements Action {
	type = ActionTypes.JOB_EDITING_SUCCESS;

	constructor(public payload: any) {}
}
export class JobEditingFailAction implements Action {
	type = ActionTypes.JOB_EDITING_FAIL;

	constructor(public payload: any) {}
}

export class JobArchiveAction implements Action {
	type = ActionTypes.JOB_ARCHIVE;

	constructor(public payload: any) {}
}
export class JobArchiveSuccessAction implements Action {
	type = ActionTypes.JOB_ARCHIVE_SUCCESS;

	constructor(public payload: any) {}
}
export class JobArchiveFailAction implements Action {
	type = ActionTypes.JOB_ARCHIVE_FAIL;

	constructor(public payload: any) {}
}

export class LoadJobFromApplication implements Action {
	type = ActionTypes.LOAD_JOB_FROM_APPLICATION;

	constructor(public payload: any) {}
}
export class LoadJobFromApplicationSucess implements Action {
	type = ActionTypes.LOAD_JOB_FROM_APPLICATION_SUCCESS;

	constructor(public payload: any) {}
}
export class LoadJobFromApplicationFail implements Action {
	type = ActionTypes.LOAD_JOB_FROM_APPLICATION_FAIL;

	constructor(public payload: any) {}
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
	| RemoveBookmarkFailAction
	| GetJobStatusAction
	| GetJobStatusSuccessAction
	| GetJobStatusFailAction
	| JobCreationAction
	| JobCreationSuccessAction
	| JobCreationFailAction
	| CreateJobsLoadAction
	| CreateJobsLoadSuccessAction
	| CreateJobsLoadFailAction
	| JobEditingAction
	| JobEditingSuccessAction
	| JobEditingFailAction
	| JobArchiveAction
	| JobArchiveSuccessAction
	| JobArchiveFailAction
	| LoadJobFromApplication
	| LoadJobFromApplicationSucess
	| LoadJobFromApplicationFail;
