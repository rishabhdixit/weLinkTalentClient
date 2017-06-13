import {Component, Input, SimpleChange} from '@angular/core';
import { Job } from '../models/job.model';
import {Profile} from '../models/profile.model';

@Component({
	selector: `app-selected-job-skills`,
	template: `
		<div class="col-md-12">
			<!--<div *ngFor="let skill of job.skills">-->
				<!--<label>{{ skill }}</label>-->
			<!--</div>-->
			<!--<app-stars></app-stars>-->
		</div>
	`,
	styles: [``],
})

export class SelectedJobSkillsComponent {
	@Input() job: Job;

	constructor() {}

}
