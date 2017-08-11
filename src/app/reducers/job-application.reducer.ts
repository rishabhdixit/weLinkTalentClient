import { createSelector } from 'reselect';
import * as application from '../actions/job-application.action';
import { JobApplication } from '../models/job-application.model';
import { Job } from 'app/models/job.model';
import { Reference } from '../models/reference.model';
import { User } from 'app/models/user.model';
import {PageMetaData} from '../models/page-metadata.model';

export interface State {
	user: User;
	job: Job;
	application: JobApplication;
	condition: boolean;
	reference: Reference[];
	entities: JobApplication;
	ids: string[];
	pageMetaData: PageMetaData;
}

const initialState: State = {
	user: {} as User,
	job: {} as Job,
	application: {} as JobApplication,
	condition: false,
	reference: null,
	entities: null,
	ids: [],
	pageMetaData: { size: 0, pageNumber: 0, totalPages: 0, totalSize: 0 },
};

export function reducer(state = initialState, action: application.Actions): State {
	switch (action.type) {
		case application.ActionType.APPLICATION_CONCEPT_LOAD:
			return Object.assign({}, state, {
				job: action.payload.job,
				user: action.payload.user
			});
		case application.ActionType.APPLICATION_CONCEPT_ACCEPT:
		case application.ActionType.APPLICATION_FORM_LOAD:
			return Object.assign({}, state, {
				condition: action.payload
			});
		case application.ActionType.APPLICATION_FORM_SUBMIT_SUCCESS:
			return Object.assign({}, state, {
				application: action.payload
			});

		case application.ActionType.APPLICATION_REFERENCE_FORM_SUBMIT:
			return Object.assign({}, state, {
				reference: action.payload.references_info
			});

		case application.ActionType.APPLICATION_REFERENCE_FORM_SUBMIT_SUCCESS:
			return Object.assign({}, state, {
				application: action.payload
			});

		case application.ActionType.APPLICATION_REFERENCE_FORM_SUBMIT_FAIL:
			return Object.assign({}, state, {
				reference: null
			});

		case application.ActionType.ADMIN_ALL_JOBS_APPLICATIONS_LOAD_SUCCESS: {
			const applications = action.payload;
			const applicationIds = applications.applicationsList.map(job => job._id);

			const newApplications = applications.applicationsList.reduce(
				(entities: { [id: string]: JobApplication }, jobApplication: JobApplication) => {
				return Object.assign(entities, {
					[jobApplication.id]: jobApplication
				});
			}, {});

			return {
				user: null,
				job: null,
				application: null,
				condition: false,
				reference: null,
				ids: [...applicationIds],
				entities: Object.assign({}, {}, newApplications),
				pageMetaData: applications.pageMetaData
			};
		}

		case application.ActionType.ADMIN_UPDATE_JOB_APPLICATION_DETAILS_SUCCESS: {
			const jobApplication = action.payload;
			const selectedJobApplication = state.entities[jobApplication.id];
			let updateSelectedJobApplication: JobApplication = {} as JobApplication;
			Object.assign(updateSelectedJobApplication, selectedJobApplication, {
				'contacted': jobApplication.contacted,
				'recruiter_reviewed': jobApplication.recruiter_reviewed,
				'recruiter_comment': jobApplication.recruiter_comment
			});
		}

		// To be remove
		// case application.ActionType.ADMIN_UPDATE_JOBS_APPLICATION_CONTACTED_SUCCESS: {
		// 	const jobApplication = action.payload;
		// 	const selectedJobApplication = state.entities[jobApplication.id];
		// 	let updateSelectedJobApplication: JobApplication = {} as JobApplication;
		// 	Object.assign(updateSelectedJobApplication, selectedJobApplication, {
		// 		'contacted': jobApplication.contacted,
		// 	});
		// 	return Object.assign({}, state, {
		// 		[jobApplication.id]: updateSelectedJobApplication
		// 	});
		// }
		//
		// // To be remove
		// case application.ActionType.ADMIN_UPDATE_JOBS_APPLICATION_REVIEWED_SUCCESS: {
		// 	const jobApplication = action.payload;
		// 	const selectedJobApplication = state.entities[jobApplication.ids];
		// 	let updateSelectedJobApplication: JobApplication = {} as JobApplication;
		// 	Object.assign(updateSelectedJobApplication, selectedJobApplication, {
		// 		'reviewed': jobApplication.recruiter_reviewed,
		// 	});
		// 	return Object.assign({}, state, {
		// 		'reviewed': jobApplication.recruiter_reviewed,
		// 	});
		// }

		default:
			return state;
	}
}


export const getApplicationJob = (state: State) => state.job;
export const getApplicationForm = (state: State) => state.application;
export const getApplicationFormReference = (state: State) => state.reference;
export const getCondition = (state: State) => state.condition;
export const getLoginUser = (state: State) => state.user;
export const getEntities = (state: State) => state.entities;
export const getIds = (state: State) => state.ids;
export const getTotalJobsApplications = (state: State) => state.pageMetaData.totalSize;
export const getApplicationId = (state: State) => state.application.id;


//noinspection TypeScriptValidateTypes
export const IsValidApplicationForm = createSelector(getApplicationJob, getCondition, getLoginUser,
	(job, condition, user) => {
	return (job != null && condition && user != null);
});

//noinspection TypeScriptValidateTypes
export const IsValidApplicationFormReference = createSelector(getApplicationJob, getApplicationForm,
	getCondition, getLoginUser, (job, application, condition, user) => {
		return (job != null && application && condition && user != null);
	});

//noinspection TypeScriptValidateTypes
export const IsValidApplicationThankYouPage = createSelector(getApplicationJob, getApplicationForm,
	getApplicationFormReference, getCondition, getLoginUser, (job, application, reference, condition, user) => {
		return (job != null && application && reference && condition && user != null);
	});

export const getAllJobsApplications = createSelector(getEntities, getIds, (entities, ids) => {
	return ids.map(id => entities[id]);
});

// export const getJobApplicationById = createSelector(getApplicationId, getEntities, (application, entities) => {
// 	return application.
// })
