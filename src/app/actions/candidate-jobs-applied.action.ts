import { type } from '../util';
import { Action } from '@ngrx/store';
import { CandidateJobsApplied } from '../models/candidate-jobs-applied.model';

export const ActionTypes = {
	LOAD:               type('[CANDIDATE_JOBS_APPLIED] Candidate Jobs Applied Load'),
	LOAD_SUCCESS:       type('[CANDIDATE_JOBS_APPLIED] Candidate Jobs Applied Load Success'),
	LOAD_FAIL:          type('[CANDIDATE_JOBS_APPLIED] Candidate Jobs Applied Load Fail'),
	SELECT:             type('[CANDIDATE_JOBS_APPLIED] Candidate Jobs Applied Select'),
	LOAD_DETAIL:        type('[CANDIDATE_JOBS_APPLIED] Candidate Jobs Applied Load Detail'),
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

export class CandidateJobsAppliedSelectAction implements Action {
	type = ActionTypes.SELECT;

	constructor(public payload: any) {
	}
}
export class CandidateJobsAppliedLoadDetailAction implements Action {
	type = ActionTypes.LOAD_DETAIL;

	constructor(public payload: CandidateJobsApplied) {
	}
}

export type Actions = CandidateJobsAppliedLoadAction
	| CandidateJobsAppliedLoadSuccessAction
	| CandidateJobsAppliedLoadFailAction
	| CandidateJobsAppliedSelectAction
	| CandidateJobsAppliedLoadDetailAction;
