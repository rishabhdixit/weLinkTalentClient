import { Component, Input } from '@angular/core';
import { Job } from 'app/models/job.model';
import { JobApplication } from '../models/job-application.model';

@Component({
	selector: 'app-referee-feedback-application-view',
	template: `
		<form #jobApplicationForm="ngForm">
			<div class="row">
				<div class="col-md-12">
					<h2>Your jobApplication Details:</h2>
					<p class="pStyle">This section contains what you have filled previously</p>
					<div class="form-group">
						<label for="reasonForLeaving" class="labelStyle">Reason for leaving the current company:</label>
						<textarea class="form-control" id="reasonForLeaving" name="reasonForLeaving" rows="5" 
											[(ngModel)]="jobApplication.form_data.reasonForLeaving" required readonly></textarea>
					</div>
					<div class="col-md-12 div-padding">
						<p class="skillStyle">Your Personal Scoring:</p>
						<p style="margin-bottom: 10px;color: gray;">(5 star= Excellent; 1 star= poor)</p>
						<div class="form-group" *ngFor="let skill of jobApplication.form_data.skills">
							<div class="row">
								<div class="col-md-6">
									<h5>{{ skill.name }}</h5>
								</div>
								<div class="col-md-6">
									<ng-container *ngFor="let count of [0,1,2,3,4]">
										<i [ngClass]="getClass(count, skill.rate)"></i>
									</ng-container>
								</div>
							</div>
						</div>
					</div>
					<div class="form-group">
						<label for="strengths" class="labelStyle">Your Strengths:</label>
						<textarea class="form-control" rows="5" id="strengths" name="strengths" 
											[(ngModel)]="jobApplication.form_data.strength" required readonly></textarea>
					</div>
					<div class="form-group">
						<label for="points" class="labelStyle">Your Points of Development/Improvement:</label>
						<textarea class="form-control" rows="5" id="points" name="points" 
											[(ngModel)]="jobApplication.form_data.improvements" required readonly>{{ jobApplication}}</textarea>
					</div>
					<div class="form-group">
						<label for="achievements" class="labelStyle">Your Main Achievements:</label>
						<textarea class="form-control" rows="5" id="achievements" name="achievements" 
											[(ngModel)]="jobApplication.form_data.achievements" required readonly></textarea>
					</div>
					<div class="form-group">
						<label for="management" class="labelStyle">Your Management Style:</label>
						<textarea class="form-control" rows="5" id="management" name="managements" 
											[(ngModel)]="jobApplication.form_data.management" required readonly></textarea>
					</div>
				</div>
			</div>
		</form>
	`,
	styles: [`
		h2 {
			text-align: center;
			color: #4D308E;
		}
		.div-padding {
			padding-left: 0;
			padding-right: 0;
		}
		.labelStyle {
			color: #4D308E;
			font-weight: 700;
		}
		.skillStyle {
			color: #4D308E;
			font-weight: 700;
			margin-bottom: 0;
		}
		i:hover{
			cursor:pointer;
		}
		.pStyle {
			font-size: smaller;
			text-align: center;
			color: dimgray;
		}
		.color-yellow {
			color: yellow;
		}
	`],
})

export class RefereeFeedbackApplicationViewComponent {
	@Input() jobApplication: JobApplication;
	@Input() job: Job;

	constructor() {}

	getClass(count, rate) {
		if (count < rate) {
			return 'fa fa-star fa-2x color-yellow';
		} else {
			return 'fa fa-star fa-2x';
		}
	}
}
