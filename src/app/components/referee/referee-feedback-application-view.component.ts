import { Component, Input } from '@angular/core';
import { JobApplication } from '../../models/job-application.model';

@Component({
	selector: 'app-referee-feedback-application-view',
	template: `
		<form #jobApplicationForm="ngForm">
			<div class="row">
				<div class="col-md-12">
					<br/>
					<br/>
					<h1>Applicant</h1>
					<br/>
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
									<p class="labelWeight">{{ skill.name }}</p>
								</div>
								<div class="col-md-6">
									<ng-container *ngFor="let count of [0,1,2,3,4]">
										<i [ngClass]="getClass(count, skill.rate)"></i>
									</ng-container>
								</div>
							</div>
						</div>
					</div>
					<br/>
					<div class="form-group">
						<h6 style="color: #57148D;">Management</h6>
						<ul class="list-unstyled">
							<li *ngFor="let manage of management">
								<input type="radio" class="input-radio" value="{{ manage.value }}" 
												[(ngModel)]="jobApplication.form_data.management" 
												[ngModelOptions]="{standalone: true}" disabled/>
								<label>&emsp;{{ manage.value }}</label>
							</li>
						</ul>
					</div>
					<br/>
					<div class="form-group">
						<h6 style="color: #57148D;">Leadership</h6>
						<ul class="list-unstyled">
							<li *ngFor="let lead of leadership">
								<input type="radio" class="input-radio" value="{{ lead.value }}" 
												[(ngModel)]="jobApplication.form_data.leadership" 
												[ngModelOptions]="{standalone: true}" disabled/>
								<label>&emsp;{{ lead.value }}</label>
							</li>
						</ul>
					</div>
					<br/>
					<div class="form-group">
						<h6 style="color: #57148D;">Self-Management</h6>
						<ul class="list-unstyled">
							<li *ngFor="let selfManage of self_management">
								<input type="radio" class="input-radio" value="{{ selfManage.value }}" 
											[(ngModel)]="jobApplication.form_data.selfManagement" 
											[ngModelOptions]="{standalone: true}" disabled/>
								<label>&emsp;{{ selfManage.value }}</label>
							</li>
						</ul>
					</div>
					<br/>
					<div class="form-group">
						<h6 style="color: #57148D;">Relationships</h6>
						<ul class="list-unstyled">
							<li *ngFor="let relation of relationship">
								<input type="radio" class="input-radio" value="{{ relation.value }}" 
												[(ngModel)]="jobApplication.form_data.relationship" 
												[ngModelOptions]="{standalone: true}" disabled/>
								<label>&emsp;{{ relation.value }} Pakyu</label>
							</li>
						</ul>
					</div>
					<br/>
					<div class="form-group">
						<h6 style="color: #57148D;">Analytical</h6>
						<ul class="list-unstyled">
							<li *ngFor="let analytic of analytics">
								<input type="radio" class="input-radio" value="{{ analytic.value }}" 
											[(ngModel)]="jobApplication.form_data.analytical" 
											[ngModelOptions]="{standalone: true}" disabled/>
								<label>&emsp;{{ analytic.value }}</label>
							</li>
						</ul>
					</div>
					<br/>
					<div class="form-group">
						<h6 style="color: #57148D;">Why are you best fit for this job</h6>
						<textarea class="form-control" id="fitToJobReason" name="fitToJobReason" rows="5" 
											[(ngModel)]="jobApplication.form_data.fitToJobReason" readonly></textarea>
					</div>
					<br/>
					<div class="form-group">
						<h6 style="color: #57148D;">What are the achievements related to this job you are the proudest of?</h6>
						<textarea class="form-control" id="jobRelatedAchievements" name="jobRelatedAchievements" rows="5" 
											[(ngModel)]="jobApplication.form_data.jobRelatedAchievements" readonly></textarea>
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
		i {
			cursor:pointer;
			color: white;
			-webkit-text-stroke-width: 1px;
			-webkit-text-stroke-color: black;
		}
		.pStyle {
			font-size: smaller;
			text-align: center;
			color: dimgray;
		}
		.color-yellow {
			color: yellow;
		}
		.labelWeight {
			font-weight: bolder;
			margin-top: 5px;
		}
	`],
})

export class RefereeFeedbackApplicationViewComponent {
	@Input() jobApplication: JobApplication;
	management: Array<any> = [
		{ id: 0, value: 'Delegation & Performance Management' },
		{ id: 1, value: 'Project/Process Management' },
		{ id: 2, value: 'Managing Execution' },
		{ id: 3, value: 'Coaching & Developing Talent' },
		{ id: 4, value: 'Managing Difference/Conflict'}
	];
	leadership: Array<any> = [
		{ id: 0, value: 'Strategic Thinking' },
		{ id: 1, value: 'Business Acumen' },
		{ id: 2, value: 'Leading Courageously' },
		{ id: 3, value: 'Inspiring Others' },
		{ id: 4, value: 'Integrity, Trust & Credibility' }
	];
	self_management: Array<any> = [
		{ id: 0, value: 'Learning Agility / Development' },
		{ id: 1, value: 'Initiative & Risk Taking' },
		{ id: 2, value: 'Drive for Results' },
		{ id: 3, value: 'Adaptability Management' },
		{ id: 4, value: 'Emotional Resilience' }
	];
	relationship: Array<any> = [
		{ id: 0, value: 'Communication & Influencing' },
		{ id: 1, value: 'Interpersonal Skills' },
		{ id: 2, value: 'Teamwork & Team Building' },
		{ id: 3, value: 'Customer Focus' },
		{ id: 4, value: 'Cross-Cultural Agility' }
	];
	analytics: Array<any> = [
		{ id: 0, value: 'Problem Solving' },
		{ id: 1, value: 'Critical Thinking' },
		{ id: 2, value: 'Decision Making' },
		{ id: 3, value: 'Innovation' },
		{ id: 4, value: 'Professional Expertise' }
	];

	getClass(count, rate) {
		if (count < rate) {
			return 'fa fa-star fa-2x color-yellow';
		} else {
			return 'fa fa-star fa-2x ';
		}
	}
}
