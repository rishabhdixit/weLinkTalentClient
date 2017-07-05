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
						<div class="form-group" *ngFor="let skill of jobApplication.skills; let i=index">
							<!--<input type="text" readonly class="input-style" value="{{ skill.name }}" />-->
							<!--<ul class="list-unstyled ulStyle">-->
								<!--<app-stars [currRating]="skill.rate"></app-stars>-->
							<!--</ul>-->
							<app-stars [skill]="skill.name" [currRating]="skill.rate - 1"></app-stars>
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
					<!--<div *ngIf="!forReference" class="button-class">-->
						<!--<button type="submit" class="btn btn-primary btn-lg" (click)="onApplyClick()">Apply?</button>-->
						<!--<p class="bottom-style">Your information will be saved automatically</p>-->
					<!--</div>-->
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
		.ulStyle {
			float: right;
			margin-bottom: 0;
		}
		i:hover{
			cursor:pointer;
		}
		.job-detail {
			margin-bottom: 5px;
			text-align: center;
			font-size: x-large;
			color: dimgray;
		}
		.input-style {
			font-size: x-large;
			font-weight: bolder;
			width: 300px;
			border: none;
		}
		.pStyle {
			font-size: smaller;
			text-align: center;
			color: dimgray;
		}
		input.currency {
			text-align: right;
			padding-right: 15px;
		}
	`],
})

export class RefereeFeedbackApplicationViewComponent {
	@Input() jobApplication: JobApplication;
	@Input() job: Job;
	constructor() { }

}
