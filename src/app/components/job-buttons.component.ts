import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../models/job.model';
import { NavigationEnd } from '@angular/router';

@Component({
	selector: 'app-job-buttons',
	template: `
	<div class="row col-md-12">
		<div class="col-md-2"></div>
		<div class="col-md-5">
			<a href="/jobs/"><button type="button" class="btn btn-basic btn-lg">Back</button></a>
		</div>
		<div class="col-md-5">
			<a href="/application-concept"><button type="button" class="btn btn-primary btn-lg">Apply</button></a>
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
