import * as jobCreation from '../../actions/Admin/admin-job-create.action';
import { PageMetaData } from '../../models/page-metadata.model';
import { Job } from '../../models/job.model';

export interface State {
	loaded: boolean;
	loading: boolean;
	entities: { [id: string]: Job };
	ids: string[];
	selectedJobId: string;
	pageMetaData: PageMetaData;
	jobCreated: Job;
}

const initialState: State = {
	loaded: false,
	loading: false,
	ids: [],
	entities: {},
	selectedJobId: null,
	pageMetaData: { size: 0, pageNumber: 0, totalPages: 0, totalSize: 0 },
	jobCreated: null,
};

export function reducer(state = initialState, action: jobCreation.Actions): State {
	switch (action.type) {
		case jobCreation.ActionTypes.ADMIN_JOB_CREATION: {
			return Object.assign({}, state, {
				loading: true,
				selectedJobId: null,
			});
		}
		case jobCreation.ActionTypes.ADMIN_JOB_CREATION_SUCCESS: {
			return Object.assign({}, state, {
				jobCreated: action.payload,
			});
		}
		default: {
			return state;
		}
	}
}

export const getJobCreated = (state: State) => state.jobCreated;
