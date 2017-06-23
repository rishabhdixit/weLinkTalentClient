import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Job } from 'app/models/job.model';
import { JobApplication } from '../models/job-application.model';

@Component({
	selector: 'app-candidate-job-application-form-page',
	template: `
		<form #applicationForm="ngForm">
			<div class="row">
				<div class="col-md-12">
					<h2>Talent Application Form</h2>
					<p class="job-detail">{{job.title}} - {{job.company.name}}</p>
					<p style="text-align:center; font-size:small; color:darkgray; margin-bottom:5px;">
					This application is confidential. Please contact us at talent@welinktalent.com for any questions regarding this form.</p>
					<div class="form-group">
						<input type="file" class="form-control" id="file" name="file" (change)="onFileUpload($event)" multiple required>
					</div>
					<div class="form-group">
						<label for="reasonForLeaving" class="labelStyle">Reason for leaving the current company:</label>
						<textarea class="form-control" id="reasonForLeaving" name="reasonForLeaving" rows="5"
											[(ngModel)]="application.reasonForLeaving" required></textarea>
					</div>
					<div class="col-md-12 div-padding">
						<p class="labelStyle">Expected Salary:</p>
						<div class="form-group">
							<label for="basePerMonth" class="label-margin">Base per month:&emsp;</label>
							<div class="input-group inputBase">
								<select #basePerMonthCurrency (change)="onChange($event)">
									<option>SGD</option>
									<option>PHP</option>
									<option>USD</option>
									<option>EUR</option>
									<option>EGP</option>
									<option>HKD</option>
									<option>AUD</option>
									<option>BRL</option>
									<option>JPY</option>
								</select>
								<input type="number" class="form-control currency" id="basePerMonth" [(ngModel)]="application.basePerMonth" 
											 [ngModelOptions]="{standalone: true}" required="required"/>
							</div>
						</div>
						<div class="form-group">
							<label for="bonus" class="bonusLabel">Bonus:&emsp;</label>
							<div class="input-group inputBonus">
								<select #bonusCurrency (change)="onChange($event)">
									<option>SGD</option>
									<option>PHP</option>
									<option>USD</option>
									<option>EUR</option>
									<option>EGP</option>
									<option>HKD</option>
									<option>AUD</option>
									<option>BRL</option>
									<option>JPY</option>
								</select>
								<input type="number" class="form-control currency" id="bonus" [(ngModel)]="application.bonus" 
											 [ngModelOptions]="{standalone: true}" required="required"/>
							</div>
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
					<div *ngIf="!forReference" class="button-class">
						<button type="submit" class="btn btn-primary btn-lg btnApply" (click)="onApplyClick()">Apply?</button>
						<!--<p class="bottom-style">Your information will be saved automatically</p>-->
					</div>
				</div>
			</div>
		</form>
	`,
	styles: [`
		h2 {
			text-align: center;
			color: #57148D;
		}
		.div-padding {
			padding-left: 0;
			padding-right: 0;
		}
		.label-margin {
			margin-top: 6px;
			font-weight: bolder;
		}
		.bonusLabel {
			float: right;
			margin-top: -48px;
			margin-right: 265px;
			font-weight: bolder;
		}
		.button-class {
			text-align: center;
		}
		.labelStyle {
			color: #57148D;
			font-weight: 700;
		}
		.skillStyle {
			color: #57148D;
			font-weight: 700;
			margin-bottom: 0;
		}
		.ulStyle {
			float: right;
			margin-right: 40%;
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
			width: 260px;
			border: none;
		}
		.inputBonus {
			width: 260px;
			float: right;
			margin-top: -54px;
		}
		.inputBase {
			width: 260px;
			float: right;
			margin-right: 460px
		}
		input.currency {
			text-align: right;
			padding-right: 15px;
		}
		.btnApply {
			border-radius: 0;
			background: #57148D;
		}
	`],
})

export class CandidateJobApplicationFormComponent {
	@Input() job: Job;
	@Output() applicationEventEmitter = new EventEmitter<JobApplication>();
	@Input() forReference: Boolean;

	application: JobApplication= new JobApplication();

	constructor() {	}

	onApplyClick() {
		this.applicationEventEmitter.emit(this.application);
	}

	onFileUpload(event) {
		const files = event.target.files;
		if (files.length > 5) {
			alert('Maximum of 5 files can only be uploaded');
			this.application.files = null;
		} else {
			this.application.files = files;
		}
	}

	onChange(currency) {
		return currency;
	}
}
