import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { JobService } from '../../services/job.service';

import * as jobCreationAction from '../../actions/Admin/admin-job-create.action';

@Injectable()
export class AdminJobCreateEffects {

	@Effect()
	adminJobCreation = this.actions
		.ofType(jobCreationAction.ActionTypes.ADMIN_JOB_CREATION)
		.map((action: jobCreationAction.AdminJobCreation) => action.payload)
		.switchMap((data) => this.jobService.createJob(data)
			.map((res) => new jobCreationAction.AdminJobCreationSuccess(data))
			.catch(() => Observable.of(new jobCreationAction.AdminJobCreationFail('')))
		);

	constructor(private actions: Actions,
		private jobService: JobService) {
	}
}
