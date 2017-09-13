import { Input, Component } from '@angular/core';
import { Job } from '../../models/job.model';

@Component({
	selector: 'app-application-for-header',
	template: `
		<div class="md-md-12 text-center">
			<h3>Application For</h3>
			<h4 class="purple-color">{{job?.title}} - {{job?.company?.name}}</h4>
		</div>
	`,
	styles: [`
	`]
})
export class ApplicationForHeaderComponent {
	@Input() job: Job;

	constructor() { }
}
