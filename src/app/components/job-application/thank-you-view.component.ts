/**
 * Created by rishabhdixit on 05/06/2017.
 */
import { Component, Input } from '@angular/core';
import { Job } from '../../models/job.model';

@Component({
	selector: 'app-thank-you-view',
	template: `
	<div class="col-md-12">
		<!--<div class="col-md-5" style="margin-left: 35px;">-->
			<div class="card cardStyle">
				<div class="card-block">
					<h1 class="card-title">{{ job.remaining_slots || job.application_slots}}</h1>
					<p class="card-text fontStyle">Application Slots Left</p>
				</div>
			</div>
		<!--</div>-->
		<!--<div class="col-md-2" *ngIf="job.remaining_slots > 0">
			<img alt="We Link Talent" src="./assets/images/right_arrow.png"
			class="img-responsive arrow"/>
		</div>
		<div class="col-md-5 rightPart" *ngIf="job.remaining_slots > 0">
			<div class="card cardStyle">
				<div class="card-block">
					<h1 class="card-title ">{{ (job.remaining_slots - 1) || (job.application_slots -1) }}</h1>
					<p class="card-text fontStyle">Application Slots Left</p>
				</div>
			</div>
		</div>-->
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
		.rightPart{
			margin-left: 0;
			float: right;
			padding-right: 0;
			margin-top: -156px;
			margin-right: -20px;
		}
		h2{
			text-align: center;
			color: blue;
		}
		.pHeader{
			font-size: larger;
			color: gray;
			text-align: center;
		}
		.arrow{
			width: 149%;
			float: right;
			margin-right: -394px;
			margin-top: -153px;
		}
		.div-style{
			float: right;
			margin-right: 5px;
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
