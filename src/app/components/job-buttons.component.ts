import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../models/job.model';

@Component({
	selector: 'app-job-buttons',
	template: `
	<div class="row col-md-12">
		<div class="col-md-2"></div>
		<div class="col-md-5">
			<a href="/jobs/"><button type="button" class="btn btn-basic btn-lg">Back</button></a>
		</div>
		<div class="col-md-5">
			<button type="button" class="btn btn-primary btn-lg">Apply</button>
		</div>
	</div>
	`,
	styles: []
})
export class JobButtonsComponent {
	@Input() job: Job;
	constructor() {
	}
}
