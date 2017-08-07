import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import { JobsApplied } from '../../models/jobs-applied.model';
import { RefereeFeedback } from '../../models/referee-feedback.model';
import { Skill } from '../../models/skill.model';

@Component({
	selector: 'app-job-applied-feedback-view',
	template: `
		<div class="row">
			<div class="col-md-12 text-center">
				<h5>Your Applications Details:</h5>
				<p>This section contains what you have filled previously.</p>
			</div>
		</div>
		<br/>
		<div class="row">
			<div class="col-md-12 pull-right">
				<button
					type="button" class="btn btn-primary"
					(click)="approveRefereeFeedback(jobApplied, selectedFeedBack)">
					Approve
				</button>
			</div>
		</div>
		<br/>
		<div class="row" style="padding-top: 10px;">
			<div *ngIf="selectedFeedBack" class="col-md-12">
				<textarea rows="5" type="text" class="form-control" value="{{selectedFeedBack.reasonForLeavingFeedback}}" readonly></textarea>
				<label class="form-inline">
					<input type="checkbox" checked="{{isChecked(selectedFeedBack.reasonForLeavingApproved)}}" disabled> APPROVE
				</label>
			</div>
		</div>
		<br/>
		<div class="row">
			<div *ngIf="selectedFeedBack" class="col-md-12">
				<!--<h6>Your personal scoring:</h6>-->
				<div class="form-group" *ngFor="let skill of selectedFeedBack.skillRatings; let i=index;">
					<ng-container *ngFor="let num of [0, 1, 2, 3, 4]; let counter=index">
						<i [ngClass]="getClass(selectedFeedBack.skillRatings[i], counter)"
						   aria-hidden="true">
						</i>
					</ng-container>
				</div>
			</div>
		</div>
		<br/>
		<div class="row" style="padding-top: 20px;">
			<div *ngIf="selectedFeedBack" class="col-md-12">
				<textarea rows="5" type="text" class="form-control" value="{{selectedFeedBack.strengthFeedback}}" readonly></textarea>
				<label class="form-inline">
					<input type="checkbox" checked="{{isChecked(selectedFeedBack.strengthApproved)}}" disabled> APPROVE
				</label>
			</div>
		</div>
		<br/>
		<div class="row" style="padding-top: 3px;">
			<div *ngIf="selectedFeedBack" class="col-md-12">
				<textarea rows="5" type="text" class="form-control" value="{{selectedFeedBack.improvementFeedback}}" readonly></textarea>
				<label class="form-inline">
					<input type="checkbox" checked="{{isChecked(selectedFeedBack.improvementApproved)}}" disabled> APPROVE
				</label>
			</div>
		</div>
		<br/>
		<div class="row" style="padding-top: 3px;">
			<div *ngIf="selectedFeedBack" class="col-md-12">
				<textarea rows="5" type="text" class="form-control" value="{{selectedFeedBack.achievementFeedback}}" readonly></textarea>
				<label class="form-inline">
					<input type="checkbox" checked="{{isChecked(selectedFeedBack.achievementApproved)}}" disabled> APPROVE
				</label>
			</div>
		</div>
		<br/>
		<div class="row" style="padding-top: 8px;">
			<div *ngIf="selectedFeedBack" class="col-md-12">
				<textarea rows="5" type="text" class="form-control" value="{{selectedFeedBack.managementStyleFeedback}}" readonly></textarea>
				<label class="form-inline">
					<input type="checkbox" checked="{{isChecked(selectedFeedBack.managementStyleApproved)}}" disabled> APPROVE
				</label>
			</div>
		</div>
		<br/>
		<div class="row">
			<div class="col-md-2"></div>
			<div class="col-md-4 text-center">
				<button
					style="background-color: #58595b;"
					type="button"
					class="btn btn-primary btn-md form-control"
					(click)="onBackClick()">Back</button>
			</div>
			<div class="col-md-4 text-center">
				<button
					style="background-color: #57148D;"
					type="button"
					class="btn btn-primary btn-md form-control"
					(click)="onNextClick()">Next</button>
			</div>
			<div class="col-md-2"></div>
		</div>
		<br/>
	`,
	styles: [`
		textarea {
			resize: none;
		}
		.color-yellow {
			color: yellow;
		}
	`]
})
export class JobAppliedFeedbackViewComponent implements OnInit {

	@Output() OnApprovedFeedbackEvent = new EventEmitter<any>();
	@Input() jobApplied: JobsApplied;

	jobAppliedFeedBacks: RefereeFeedback[] = [];
	selectedFeedBack: RefereeFeedback;
	index: number = 0;
	maxIndex: number;

	constructor(private store: Store<fromRoot.State>) { }

	ngOnInit() {
		this.constructFeedBacks();
		this.initSelectedFeedBack();
	}

	approveRefereeFeedback(jobApplied: JobsApplied, feedback: RefereeFeedback): void {
		this.OnApprovedFeedbackEvent.emit({
			applicationId: jobApplied.id,
			feedbackId: feedback.id,
			body: {
				approved_by_candidate: true
			}
		});
	}

	private initSelectedFeedBack(): void {
		this.maxIndex = this.jobAppliedFeedBacks.length;
		if (this.jobAppliedFeedBacks.length > 0) {
			this.selectedFeedBack = this.jobAppliedFeedBacks[this.index];
		}
	}

	onBackClick(): void {
		if (this.index > 0) {
			this.selectedFeedBack = this.jobAppliedFeedBacks[this.index--];
		}
	}

	onNextClick(): void {
		if (this.index < this.maxIndex - 1) {
			this.selectedFeedBack = this.jobAppliedFeedBacks[this.index++];
		}
	}

	isChecked(value): string {
		if (value) {
			return 'checked';
		}
	}

	getClass(skill: Skill, index: number): string {
		if (index < skill.rate) {
			return 'fa fa-star fa-2x color-yellow';
		} else {
			return 'fa fa-star fa-2x';
		}
	}

	private constructFeedBacks(): void {
		for (let id of this.getFeedBackKeys()) {
			this.jobAppliedFeedBacks.push(this.getConstructedFeedback(id, this.jobApplied.feedback[id]));
		}
	}

	private getFeedBackKeys(): string[] {
		if (!this.jobApplied) {
			return [];
		}
		return (this.jobApplied.feedback ? Object.keys(this.jobApplied.feedback) : []);
	}

	private getConstructedFeedback(id: string, value: any): RefereeFeedback {
		let feedback = new RefereeFeedback();
		feedback.id = id;
		feedback.reasonForLeavingFeedback = value.reasonForLeavingFeedback;
		feedback.reasonForLeavingApproved = value.reasonForLeavingApproved;
		feedback.strengthFeedback = value.strengthFeedback;
		feedback.strengthApproved = value.strengthApproved;
		feedback.improvementFeedback = value.improvementFeedback;
		feedback.improvementApproved = value.improvementApproved;
		feedback.achievementFeedback = value.achievementFeedback;
		feedback.achievementApproved = value.achievementApproved;
		feedback.managementStyleFeedback = value.managementStyleFeedback;
		feedback.managementStyleApproved = value.managementStyleApproved;
		feedback.skillRatings = value.skillRatings;
		feedback.referee_profile = value.referee_profile;
		return feedback;
	}
}
