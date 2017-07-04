import { type } from '../util';
import { Action } from '@ngrx/store';

export const ActionTypes = {
	LOAD: 				type('[CANDIDATE_JOBS_APPLIED] Candidate Jobs Applied Load'),
	LOAD_SUCCESS: 		type('[CANDIDATE_JOBS_APPLIED] Candidate Jobs Applied Load Success'),
	LOAD_FAIL: 			type('[CANDIDATE_JOBS_APPLIED] Candidate Jobs Applied Load Fail'),
};

export class CandidateJobsAppliedLoadAction implements Action {
	type = ActionTypes.LOAD;

	constructor(public payload: any) {}
}

export class CandidateJobsAppliedLoadSuccessAction implements Action {
	type = ActionTypes.LOAD_SUCCESS;

	constructor(public payload: any) {}
}

export class CandidateJobsAppliedLoadFailAction implements Action {
	type = ActionTypes.LOAD_FAIL;

	constructor(public payload: any) {
	}
}

export type Actions = CandidateJobsAppliedLoadAction
	| CandidateJobsAppliedLoadSuccessAction
	| CandidateJobsAppliedLoadFailAction;
