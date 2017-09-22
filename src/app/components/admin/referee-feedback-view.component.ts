import { Component, Input, OnChanges } from '@angular/core';
import { JobsApplied } from '../../models/jobs-applied.model';
import { Skill }  from '../../models/skill.model';
import { RefereeFeedback } from '../../models/referee-feedback.model';

@Component({
	selector: 'app-referees-feedback-view',
	template: `
		<div class="row">
			<div class="col-md-10">
				<div class="row">
					<div class="col-md-10 text-left">
						<h3 class="purple-color">Referee's Feedback</h3>
					</div>
				</div>
			</div>
		</div>
		<br/>
		<div class="row" *ngFor="let feedback of refereesFeedBack; let i=index;">
			<div class="col-md-10">
				<div class="row">
					<div class="col-md-12">
						<h5><b>{{feedback.referee_profile.firstName}} {{feedback.referee_profile.lastName}}</b></h5>
					</div>
					<div class="col-md-12">
						<h5><b>{{feedback.referee_profile.emailAddress}}</b></h5>
					</div>
				</div>
				<br/>
				<div class="row">
					<div class="col-md-12">
						<h6 class="purple-color"><b>Reason of interest (What are your Push and Pull Factors) ?</b></h6>
						<textarea rows="5" type="text" class="form-control" value="{{feedback.reasonForLeavingFeedback}}" readonly></textarea>
						<label class="form-inline padding-top-5px">
							<input type="checkbox" [checked]="feedback.reasonForLeavingApproved" disabled>&nbsp;&nbsp;&nbsp;APPROVE
						</label>
					</div>
				</div>
				<br/>
				<div class="row">
					<div class="col-md-12">
						<p class="purple-color"><b>Your personal scoring:</b></p>
						<div *ngFor="let skill of feedback.skillRatings; let i=index;">
							<div class="row">
								<div class="col-md-5">
									<p><b>{{ skill.name }}</b></p>
								</div>
								<div class="col-md-7">
									<ng-container *ngFor="let num of [0, 1, 2, 3, 4]; let counter=index">
										<i [ngClass]="getClass(feedback.skillRatings[i], counter)"></i>
									</ng-container>
								</div>
							</div>
						</div>
					</div>
				</div>
				<br/>
				<div class="row">
					<div class="col-md-12">
						<h6 class="purple-color"><b>Management</b></h6>
						<textarea rows="6" type="text" class="form-control" value="{{feedback.managementFeedback}}" readonly></textarea>
						<label class="form-inline padding-top-5px">
							<input type="checkbox" [checked]="feedback.managementApproved" disabled>&nbsp;&nbsp;&nbsp;APPROVE
						</label>
					</div>
				</div>
				<br/>
				<div class="row">
					<div class="col-md-12">
						<h6 class="purple-color"><b>Leadership</b></h6>
						<textarea rows="6" type="text" class="form-control" value="{{feedback.leadershipFeedback}}" readonly></textarea>
						<label class="form-inline padding-top-5px">
							<input type="checkbox" [checked]="feedback.leadershipApproved" disabled>&nbsp;&nbsp;&nbsp;APPROVE
						</label>
					</div>
				</div>
				<br/>
				<div class="row">
					<div class="col-md-12">
						<h6 class="purple-color"><b>Self-Management</b></h6>
						<textarea rows="6" type="text" class="form-control" value="{{feedback.selfManagementFeedback}}" readonly></textarea>
						<label class="form-inline padding-top-5px">
							<input type="checkbox" [checked]="feedback.selfManagementApproved" disabled>&nbsp;&nbsp;&nbsp;APPROVE
						</label>
					</div>
				</div>
				<br/>
				<div class="row">
					<div class="col-md-12">
						<h6 class="purple-color"><b>Relationships</b></h6>
						<textarea rows="6" type="text" class="form-control" value="{{feedback.relationshipFeedback}}" readonly></textarea>
						<label class="form-inline padding-top-5px">
							<input type="checkbox" [checked]="feedback.relationshipApproved" disabled>&nbsp;&nbsp;&nbsp;APPROVE
						</label>
					</div>
				</div>
				<br/>
				<div class="row">
					<div class="col-md-12">
						<h6 class="purple-color"><b>Analytical</b></h6>
						<textarea rows="6" type="text" class="form-control" value="{{feedback.analyticalFeedback}}" readonly></textarea>
						<label class="form-inline padding-top-5px">
							<input type="checkbox" [checked]="feedback.analyticalApproved" disabled>&nbsp;&nbsp;&nbsp;APPROVE
						</label>
					</div>
				</div>
				<br/>
				<div class="row">
					<div class="col-md-12">
						<h6 class="purple-color"><b>Why are you best fit for this job</b></h6>
						<textarea rows="5" type="text" class="form-control" value="{{feedback.fitToJobReasonFeedback}}" readonly></textarea>
						<label class="form-inline padding-top-5px">
							<input type="checkbox" [checked]="feedback.firToJobReasonApproved" disabled>&nbsp;&nbsp;&nbsp;APPROVE
						</label>
					</div>
				</div>
				<br/>
				<div class="row">
					<div class="col-md-12">
						<h6 class="purple-color"><b>What are the achievements related to this job you are the proudest of?</b></h6>
						<textarea rows="5" type="text" class="form-control" value="{{feedback.relatedAchievementFeedback}}" readonly></textarea>
						<label class="form-inline padding-top-5px">
							<input type="checkbox" [checked]="feedback.relatedAchievementApproved" disabled>&nbsp;&nbsp;&nbsp;APPROVE
						</label>
					</div>
				</div>
				<br/>
				<div class="row">
					<div class="col-md-12">
						<label class="purple-color">Do you agree that the candidate is qualified in skills and personality in doing this role?</label><br/>
						<ng-container *ngFor="let num of [0, 1, 2, 3, 4]; let counter=index">
							<i [ngClass]="getCandidateRate(feedback.candidateRate, counter)"></i>
						</ng-container>
					</div>
				</div>
				<br/>
				<div class="row">
					<div class="col-md-12">
						<label class="purple-color">Would you rehire the candidate?</label>
						<div class="form-inline">
							<input type="checkbox"
								[checked]="feedback.rehireCandidate" disabled/>
							<label>&emsp;Yes&emsp;</label>
							<input type="checkbox"
								[checked]="feedback.rehireCandidate ? false : true" disabled/>
							<label>&emsp;No&emsp;</label>
						</div>
					</div>
				</div>
				<br/>
				<div class="row">
					<div class="col-md-12">
						<label class="purple-color">
							The hiring manager might need to contact you for additional questions. Please confirm your acceptance:
						</label>
						<div class="form-inline">
							<input type="checkbox"
								[checked]="feedback.canBeContact" disabled/>
							<label>&emsp;Yes&emsp;</label>
							<input type="checkbox"
								[checked]="feedback.canBeContact ? false : true" disabled/>
							<label>&emsp;No&emsp;</label>
						</div>
					</div>
				</div>
				<br/>
				<div class="row">
					<div class="col-md-12">
						<div class="form-inline">
							<input type="checkbox"
								[checked]="feedback.approved_by_candidate" disabled/>
							<label class="purple-color">&emsp;Attach this reference to your application?</label>
						</div>
					</div>
				</div>
				<div class="row" *ngIf="i < refereesFeedBack.length - 1">
					<div class="col-md-12">
						<hr/>
					</div>
				</div>
			</div>
		</div>
	`,
	styles: [`
		label {
			font-weight: bolder;
		}
		ul li {
			display: block;
		}
		.color-yellow {
			color: yellow;
			-webkit-text-stroke-width: 1px;
			-webkit-text-stroke-color: black;
		}
		.color-white{
			color: white;
			-webkit-text-stroke-width: 1px;
			-webkit-text-stroke-color: black;
		}
		.padding-top-5px {
			padding-top: 5px;
		}
	`]
})
export class RefereesFeedbackViewComponent implements OnChanges {
	@Input() application: JobsApplied;
	refereesFeedBack: Array<RefereeFeedback> = [];

	constructor() {}

	ngOnChanges(changes: any): void {
		if (this.application) {
			this.constructFeedBacks();
		}
	}

	getClass(skill: Skill, index: number) {
		if (index < skill.rate) {
			return 'fa fa-star fa-2x color-yellow';
		} else {
			return 'fa fa-star fa-2x color-white';
		}
	}

	getCandidateRate(rate: number, index: number): string {
		if (index < rate) {
			return 'fa fa-star fa-2x color-yellow';
		} else {
			return 'fa fa-star fa-2x color-white';
		}
	}

	private constructFeedBacks(): void {
		for (let id of this.getFeedBackKeys()) {
			this.refereesFeedBack.push(this.getConstructedFeedback(id, this.application.feedback[id]));
		}
	}

	private getFeedBackKeys(): string[] {
		if (!this.application) {
			return [];
		}
		return (this.application.feedback ? Object.keys(this.application.feedback) : []);
	}

	private getConstructedFeedback(id: string, value: any): RefereeFeedback {
		let feedback = new RefereeFeedback();
		feedback.id = id;
		feedback.reasonForLeavingFeedback = value.reasonForLeavingFeedback;
		feedback.reasonForLeavingApproved = value.reasonForLeavingApproved;
		feedback.managementFeedback = value.managementFeedback;
		feedback.managementApproved = value.managementApproved;
		feedback.leadershipFeedback = value.leadershipFeedback;
		feedback.leadershipApproved = value.leadershipApproved;
		feedback.selfManagementFeedback = value.selfManagementFeedback;
		feedback.selfManagementApproved = value.selfManagementApproved;
		feedback.relationshipFeedback = value.relationshipFeedback;
		feedback.relationshipApproved = value.relationshipApproved;
		feedback.analyticalFeedback = value.analyticalFeedback;
		feedback.analyticalApproved = value.analyticalApproved;
		feedback.fitToJobReasonFeedback = value.fitToJobReasonFeedback;
		feedback.firToJobReasonApproved = value.fitToJobReasonFeedback;
		feedback.relatedAchievementFeedback = value.relatedAchievementFeedback;
		feedback.relatedAchievementApproved = value.relatedAchievementApproved;
		feedback.skillRatings = value.skillRatings;
		feedback.referee_profile = value.referee_profile;
		feedback.approved_by_candidate = value.approved_by_candidate;
		feedback.candidateRate = value.candidateRate;
		feedback.rehireCandidate = value.hireCandidate;
		feedback.canBeContact = value.canBeContact;
		return feedback;
	}
}
