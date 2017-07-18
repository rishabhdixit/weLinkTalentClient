import { type } from '../../util';
import { Action } from '@ngrx/store';

export const ActionTypes = {
	ADMIN_JOB_CREATION:               type('[ADMIN] Admin Job Creation'),
	ADMIN_JOB_CREATION_SUCCESS:       type('[ADMIN] Admin Job Creation Success'),
	ADMIN_JOB_CREATION_FAIL:          type('[ADMIN] Admin Job Creation Fail')
};

export class AdminJobCreation implements Action {
	type = ActionTypes.ADMIN_JOB_CREATION;

	constructor(public payload: any) {}
}

export class AdminJobCreationSuccess implements Action {
	type = ActionTypes.ADMIN_JOB_CREATION_SUCCESS;

	constructor(public payload: any) {}
}

export class AdminJobCreationFail implements Action {
	type = ActionTypes.ADMIN_JOB_CREATION_FAIL;

	constructor(public payload: any) {}
}

export type Actions = AdminJobCreation
		| AdminJobCreationSuccess
		| AdminJobCreationFail;
