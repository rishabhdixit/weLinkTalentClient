import { type } from '../util';
import { Action } from '@ngrx/store';
import { JobsApplied } from '../models/jobs-applied.model';

export const ActionTypes = {
	LOAD:                                                   type('[JOBS_APPLIED] Candidate Jobs Applied Load'),
	LOAD_SUCCESS:                                           type('[JOBS_APPLIED] Candidate Jobs Applied Load Success'),
	LOAD_FAIL:                                              type('[JOBS_APPLIED] Candidate Jobs Applied Load Fail'),
	SELECT:                                                 type('[JOBS_APPLIED] Candidate Jobs Applied Select'),
	LOAD_DETAIL:                                            type('[JOBS_APPLIED] Candidate Jobs Applied Load Detail'),
	APPLICATION_APPLY:                                      type('[JOBS_APPLIED] Application Apply'),
	APPLICATION_APPLY_SUCCESS:                              type('[JOBS_APPLIED] Application Apply Success'),
	APPLICATION_APPLY_FAIL:                                 type('[JOBS_APPLIED] Application Apply Fail'),
	APPLICATION_APPROVE_FEEDBACK:                           type('[JOBS_APPLIED] Application Approve Feedback'),
	APPLICATION_APPROVE_FEEDBACK_SUCCESS:                   type('[JOBS_APPLIED] Application Approve Feedback Success'),
	APPLICATION_APPROVE_FEEDBACK_FAIL:                      type('[JOBS_APPLIED] Application Approve Feedback Fail'),
	APPLICATION_REQUEST_FEEDBACK_RECRUITER:                 type('[JOBS_APPLIED] Application Request Feedback To Recruiter'),
	APPLICATION_REQUEST_FEEDBACK_RECRUITER_SUCCESS:         type('[JOBS_APPLIED] Application Request Feedback To Recruiter Success'),
	APPLICATION_REQUEST_FEEDBACK_RECRUITER_FAIL:            type('[JOBS_APPLIED] Application Request Feedback To Recruiter Fail'),
	APPLICATION_REQUEST_FEEDBACK_REFEREE:                   type('[JOBS_APPLIED] Application Request Feedback To Referee'),
	APPLICATION_REQUEST_FEEDBACK_REFEREE_SUCCESS:           type('[JOBS_APPLIED] Application Request Feedback To Referee Success'),
	APPLICATION_REQUEST_FEEDBACK_REFEREE_FAIL:              type('[JOBS_APPLIED] Application Request Feedback To Referee Fail')
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

export class ApplicationApproveFeedbackAction implements Action {
	type = ActionTypes.APPLICATION_APPROVE_FEEDBACK;

	constructor(public payload: any) {}
}
export class ApplicationApproveFeedbackSuccessAction implements Action {
	type = ActionTypes.APPLICATION_APPROVE_FEEDBACK_SUCCESS;

	constructor(public payload: any) {}
}
export class ApplicationApproveFeedbackFailAction implements Action {
	type = ActionTypes.APPLICATION_APPROVE_FEEDBACK_FAIL;

	constructor(public payload: any) {}
}

export class ApplicationRequestFeedbackRecruiterAction implements Action {
	type = ActionTypes.APPLICATION_REQUEST_FEEDBACK_RECRUITER;

	constructor(public payload: any) {}
}
export class ApplicationRequestFeedbackRecruiterSuccessAction implements Action {
	type = ActionTypes.APPLICATION_REQUEST_FEEDBACK_RECRUITER_SUCCESS;

	constructor(public payload: any) {}
}
export class ApplicationRequestFeedbackRecruiterFailAction implements Action {
	type = ActionTypes.APPLICATION_REQUEST_FEEDBACK_RECRUITER_FAIL;

	constructor(public payload: any) {}
}

export class ApplicationRequestFeedbackRefereeAction implements Action {
	type = ActionTypes.APPLICATION_REQUEST_FEEDBACK_REFEREE;

	constructor(public payload: any) {}
}
export class ApplicationRequestFeedbackRefereeSuccessAction implements Action {
	type = ActionTypes.APPLICATION_REQUEST_FEEDBACK_REFEREE_SUCCESS;

	constructor(public payload: any) {}
}
export class ApplicationRequestFeedbackRefereeFailAction implements Action {
	type = ActionTypes.APPLICATION_REQUEST_FEEDBACK_REFEREE_FAIL;

	constructor(public payload: any) {}
}

export type Actions = JobsAppliedLoadAction
	| JobsAppliedLoadSuccessAction
	| JobsAppliedLoadFailAction
	| JobsAppliedSelectAction
	| JobsAppliedLoadDetailAction
	| ApplicationApplyAction
	| ApplicationApplySuccessAction
	| ApplicationApplyFailAction
	| ApplicationApproveFeedbackAction
	| ApplicationApproveFeedbackSuccessAction
	| ApplicationApproveFeedbackFailAction
	| ApplicationRequestFeedbackRecruiterAction
	| ApplicationRequestFeedbackRecruiterSuccessAction
	| ApplicationRequestFeedbackRecruiterFailAction
	| ApplicationRequestFeedbackRefereeAction
	| ApplicationRequestFeedbackRefereeSuccessAction
	| ApplicationRequestFeedbackRefereeFailAction;
