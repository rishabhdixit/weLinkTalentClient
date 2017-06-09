import {Component, Input, SimpleChange} from '@angular/core';
import { Job } from '../models/job.model';
import {Profile} from '../models/profile.model';

@Component({
	selector: `app-selected-job-skills`,
	template: `
		<!--<div class="col-md-12">-->
			<!--&lt;!&ndash;<div *ngFor="let skill of job.skills">&ndash;&gt;-->
				<!--&lt;!&ndash;<label>{{ skill }}</label>&ndash;&gt;-->
			<!--&lt;!&ndash;</div>&ndash;&gt;-->
			<!--&lt;!&ndash;<app-stars></app-stars>&ndash;&gt;-->
		<!--</div>-->
	`,
	styles: [``],
})

export class SelectedJobSkillsComponent {
	@Input() job: Job;

	constructor() {}

}
