import { type } from '../util';
import { Action } from '@ngrx/store';
import { JobsApplied } from '../models/jobs-applied.model';

export const ActionTypes = {
LOAD:                                           type('[JOBS_APPLIED] Candidate Jobs Applied Load'),
	LOAD_SUCCESS:                                 type('[JOBS_APPLIED] Candidate Jobs Applied Load Success'),
	LOAD_FAIL:                                    type('[JOBS_APPLIED] Candidate Jobs Applied Load Fail'),
	SELECT:                                       type('[JOBS_APPLIED] Candidate Jobs Applied Select'),
	LOAD_DETAIL:                                  type('[JOBS_APPLIED] Candidate Jobs Applied Load Detail'),
	APPLICATION_APPLY:                            type('[APPLICATION] Application Apply'),
	APPLICATION_APPLY_SUCCESS:                    type('[APPLICATION] Application Apply Success'),
	APPLICATION_APPLY_FAIL:                       type('[APPLICATION] Application Apply Fail')
};

export class JobsAppliedLoadAction implements Action {
	type = ActionTypes.LOAD;

	constructor(public payload: any) {}
}

export class JobsAppliedLoadSuccessAction implements Action {
	type = ActionTypes.LOAD_SUCCESS;

	constructor(public payload: any) {}
}

export class JobsAppliedLoadFailAction implements Action {
	type = ActionTypes.LOAD_FAIL;

	constructor(public payload: any) {
	}
}

export class JobsAppliedSelectAction implements Action {
	type = ActionTypes.SELECT;

	constructor(public payload: any) {
	}
}
export class JobsAppliedLoadDetailAction implements Action {
	type = ActionTypes.LOAD_DETAIL;

	constructor(public payload: JobsApplied) {
	}
}

export class ApplicationApplyAction implements Action {
	type = ActionTypes.APPLICATION_APPLY;

	constructor(public payload: any) {}
}
export class ApplicationApplySuccessAction implements Action {
	type = ActionTypes.APPLICATION_APPLY_SUCCESS;

	constructor(public payload: any) {}
}
export class ApplicationApplyFailAction implements Action {
	type = ActionTypes.APPLICATION_APPLY_FAIL;

	constructor(public payload: any) {}
}

export type Actions = JobsAppliedLoadAction
	| JobsAppliedLoadSuccessAction
	| JobsAppliedLoadFailAction
	| JobsAppliedSelectAction
	| JobsAppliedLoadDetailAction
	| ApplicationApplyAction
	| ApplicationApplySuccessAction
	| ApplicationApplyFailAction;
