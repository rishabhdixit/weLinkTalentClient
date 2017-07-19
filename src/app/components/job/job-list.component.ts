import { Component } from '@angular/core';

import { Job } from '../../models/job.model';
import { Store } from '@ngrx/store';

import * as jobAction from '../../actions/jobs.action';
import * as fromRoot from '../../reducers';

@Component({
	selector: `app-job-list`,
	template: `
		<div class="panel panel-default">
			<div class="panel-heading">
				<div class="row">
					<div class="col-md-12">
						<h4><span>Created Jobs</span></h4>
					</div>
				</div>
			</div>
			<div class="panel-body">
			
			</div>
		</div>
	`,
	styles: [``]
})

export class JobListComponent {

	constructor(private store: Store<fromRoot.State>) {}

}
