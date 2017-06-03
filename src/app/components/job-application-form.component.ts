import {Component, OnInit, ChangeDetectionStrategy, Input, EventEmitter, Output} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import * as fromRoot from '../reducers';
import {Job} from 'app/models/job.model';
import {Profile, Position} from '../models/profile.model';
import {Validators} from '@angular/forms/forms';
import {Application} from '../models/job-application.model';

const emptyRating: number = -10;
@Component({
	selector: 'app-job-application-form-page',
	template: `
		<form #applicationForm="ngForm">
			<div class="row">
				<div class="col-md-12">
					<h2>Talent Application Form</h2>
					<p class="job-detail">{{job.title}} - {{job.company}}</p>
					<p style="text-align:center; font-size:small; color:darkgray; margin-bottom:5px;">
						This application is confidential. Please contact us at talent@welinktalent.com for any questions regarding this form.</p>
					<div class="form-group">
						<input type="file" class="form-control" id="file" name="file" multiple required>
					</div>
					<div class="form-group">
						<label for="reasonForLeaving" class="labelStyle">Reason for leaving the current company:</label>
						<textarea class="form-control" id="reasonForLeaving" name="reasonForLeaving" rows="5" 
											[(ngModel)]="application.reasonForLeaving" required></textarea>
					</div>
					<div class="col-md-12 div-padding">
						<p class="labelStyle">Expected Salary:</p>
						<div class="form-group">
							<label for="basePerMonth" class="label-margin">Base per month: SGD&emsp;</label>
							<input type="number" class="form-control input-base" id="basePerMonth" name="basePerMonth" 
										 [(ngModel)]="application.basePerMonth" required/>
						</div>
						<div class="form-group">
							<label for="bonus" class="bonusLabel">Bonus: SGD&emsp;</label>
							<input type="number" class="form-control input-bonus" id="bonus" name="bonus" 
										 [(ngModel)]="application.bonus" required/>
						</div>
					</div>
					<div class="col-md-12 div-padding">
						<p class="skillStyle">Please score yourself accordingly for the skills listed below.</p>
						<p style="margin-bottom: 10px;color: gray;">(5 star= Excellent; 1 star= poor)</p>
						<div class="form-group" *ngFor="let skill of job.skills">
							<input type="text" class="input-style" value="{{skill}}" />
							<ul class="list-unstyled ulStyle">
								<app-stars style="font-size: x-large;"></app-stars>
							</ul>
						</div>
					</div>
					<div class="form-group">
						<label for="strengths" class="labelStyle">What are your strengths?</label>
						<textarea class="form-control" rows="5" id="strengths" name="strengths" 
											[(ngModel)]="application.strength" required></textarea>
					</div>
					<div class="form-group">
						<label for="points" class="labelStyle">What are your points for development/improvement?</label>
						<textarea class="form-control" rows="5" id="points" name="points" 
											[(ngModel)]="application.improvements" required></textarea>
					</div>
					<div class="form-group">
						<label for="achievements" class="labelStyle">What are your main achievements?</label>
						<textarea class="form-control" rows="5" id="achievements" name="achievements" 
											[(ngModel)]="application.achievements" required></textarea>
					</div>
					<div class="form-group">
						<label for="management" class="labelStyle">What is your management style?</label>
						<textarea class="form-control" rows="5" id="management" name="managements" 
											[(ngModel)]="application.management" required></textarea>
					</div>
					<div class="button-class">
						<button type="submit" class="btn btn-primary btn-lg" (click)="onApplyClick()">Apply?</button>
						<p class="bottom-style">Your information will be saved automatically</p>
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
		.label-margin {
			margin-top: 6px;
			font-weight: bolder;
		}
		.input-base {
			width: 28%;
			float: right;
			margin-right: 472px;
		}
		.bonusLabel {
			float: right;
			margin-top: -48px;
			margin-right: 257px;
			font-weight: bolder;
		}
		.input-bonus {
			width: 28%;
			float: right;
			margin-top: -54px;
		}
		.button-class {
			text-align: center;
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
		.bottom-style {
			margin-bottom: 0;
			font-size: x-small;
			color: gray;
		}
		.listStyle {
			list-style-type: none;
			display: inline-block;
			font-size: 25px;
			padding-right: 8px;
		}
		.ulStyle {
			float: right;
			margin-right: 62%;
			margin-bottom: 0;
		}
		.highlight{
			color:yellow;
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
		.skill-label {
			font-size: x-large;
			font-weight: bolder;
		}
		.input-style {
			font-size: x-large;
			font-weight: bolder;
			width: 200px;
			border: none;
		}
	`],
})

export class JobApplicationFormComponent {
	@Input() job: Job;
	@Output() applicationEventEmitter = new EventEmitter<Application>();
	application: Application= new Application();

	constructor() {	}

	onApplyClick() {
		this.applicationEventEmitter.emit(this.application);
	}

	// onChange(event) {
	// 	console.log('onChange');
	// 	let files = event.srcElement.files;
	// 	console.log(files);
	// 	this.application.file = files;
	// }
}
