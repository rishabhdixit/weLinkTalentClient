import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../models/job.model';

@Component({
	selector: 'app-job-buttons',
	template: `
	<div class="row">
		<div class="col-md-9">
			<button type="button" class="btn btn-warning">Save Jobs</button>
		</div>
		<div class="col-md-1">
			<button type="button" class="btn btn-primary">Apply</button>
		</div>
		<div class="col-md-2"> &nbsp; </div>
	</div>
	`,
	styles: []
})
export class JobButtonsComponent {
	@Input() job: Job;
	constructor() {
	}
}
