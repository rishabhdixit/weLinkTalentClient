/**
 * Created by rishabhdixit on 05/06/2017.
 */
import { Component, Input } from '@angular/core';
import { Job } from '../../models/job.model';

@Component({
	selector: 'app-thank-you-view',
	template: `
	<div class="row">
		<div class="col-md-4"></div>
		<div class="col-md-4 text-center">
			<div class="card cardStyle">
				<div class="card-block">
					<h1 class="card-title">{{ job.remaining_slots || job.application_slots}}</h1>
					<p class="card-text fontStyle">Application Slots Left</p>
				</div>
			</div>
		</div>
		<div class="col-md-4"></div>
	</div>
`,
	styles: [`
		.cardStyle{
			text-align: center;
			width: 212px;
			height: 150px;
			background: #4D308E;
			margin-left: 350px;
		}
		h1{
			color: white;
			font-size: 80px;
			margin-top: -20px;
			font-weight: bolder;
		}
		.fontStyle{
			color: white;
			font-size: larger;
			font-weight: 800;
			margin-top: -20px;
		}
		h2{
			text-align: center;
			color: blue;
		}
		h5{
			color: blue;
		}
`]
})
export class ThankYouViewComponent {
	@Input() job: Job;

	constructor() {
	}
}
