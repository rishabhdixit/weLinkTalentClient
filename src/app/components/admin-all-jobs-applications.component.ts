import { Component, Input } from '@angular/core';
import { JobApplication } from '../models/job-application.model';
import { Store } from '@ngrx/store';
import * as fromRoot from '../reducers';
import { User } from '../models/user.model';
import { Job } from '../models/job.model';

@Component({
	selector: `app-admin-all-jobs-applications`,
	template: `
		<div class="container">
			<div class="row">
				<div class="col-md-12" style="margin-bottom: 1rem;">
				<div class="form-group">
					<div class="input-group search">
						<span class="input-group-addon"><i class="fa fa-search"></i></span>
						<input type="text" class="form-control"/>
					</div>
				</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<table class="table table-bordered table-hover">
						<thead>
						<tr>
							<th>
								Candidate Name
							</th>
							<th>
								Company
							</th>
							<th>
								Job Title
							</th>
							<th>
								Availability
							</th>
							<th>
								Status
							</th>
							<th>
								Contacted
							</th>
							<th>
								Reviewed
							</th>
							<th>
								Comment
							</th>
						</tr>
						</thead>
						<tbody *ngFor="let apply of jobApplication">
						<tr>
							<td>
								{{ user.name }}
							</td>
							<td>
								{{ job.company.name }}
							</td>
							<td>
								{{ job.title }}
							</td>
							<td>
								{{ apply.availability }}
							</td>
							<td>
								{{ apply.status }}
							</td>
							<td>
								<input type="checkbox" class="input-checkbox" value="{{ apply.contacted }}"/>
							</td>
							<td>
								<input type="checkbox" class="input-checkbox" value="{{ apply.review }}"/>
							</td>
							<td>
								{{ apply.comment }}
							</td>
						</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	`,
	styles: [`
		.input-checkbox {
			border-radius: 0.25em;
			width: 1.7em;
			height: 1.7em;
		}
		.search {
			float: right;
			width: 40%;
		}
		th {
			text-align: center;
		}
	`],
})

export class AdminAllJobsApplicationsComponent {
	@Input() jobApplication: JobApplication;
	@Input() user: User;
	@Input() job: Job;

	constructor(private store: Store<fromRoot.State>) {	}


}
