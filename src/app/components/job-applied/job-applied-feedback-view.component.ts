import { Component, Input, OnInit } from '@angular/core';
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
				<h6>Your personal scoring:</h6>
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
		<div class="row">
			<div *ngIf="selectedFeedBack" class="col-md-12">
				<textarea rows="5" type="text" class="form-control" value="{{selectedFeedBack.strengthFeedback}}" readonly></textarea>
				<label class="form-inline">
					<input type="checkbox" checked="{{isChecked(selectedFeedBack.strengthApproved)}}" disabled> APPROVE
				</label>
			</div>
		</div>
		<br/>
		<div class="row">
			<div *ngIf="selectedFeedBack" class="col-md-12">
				<textarea rows="5" type="text" class="form-control" value="{{selectedFeedBack.improvementFeedback}}" readonly></textarea>
				<label class="form-inline">
					<input type="checkbox" checked="{{isChecked(selectedFeedBack.improvementApproved)}}" disabled> APPROVE
				</label>
			</div>
		</div>
		<br/>
		<div class="row">
			<div *ngIf="selectedFeedBack" class="col-md-12">
				<textarea rows="5" type="text" class="form-control" value="{{selectedFeedBack.achievementFeedback}}" readonly></textarea>
				<label class="form-inline">
					<input type="checkbox" checked="{{isChecked(selectedFeedBack.achievementApproved)}}" disabled> APPROVE
				</label>
			</div>
		</div>
		<br/>
		<div class="row">
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

	private initSelectedFeedBack() {
		this.maxIndex = this.jobAppliedFeedBacks.length;
		if (this.jobAppliedFeedBacks.length > 0) {
			this.selectedFeedBack = this.jobAppliedFeedBacks[this.index];
		}
	}

	onBackClick() {
		if (this.index > 0) {
			this.selectedFeedBack = this.jobAppliedFeedBacks[this.index--];
		}
	}

	onNextClick() {
		if (this.index < this.maxIndex - 1) {
			this.selectedFeedBack = this.jobAppliedFeedBacks[this.index++];
		}
	}

	isChecked(value) {
		if (value) {
			return 'checked';
		}
	}

	getClass(skill: Skill, index: number) {
		if (index < skill.rate) {
			return 'fa fa-star fa-2x color-yellow';
		} else {
			return 'fa fa-star fa-2x';
		}
	}

	private constructFeedBacks() {
		for (let id of this.getFeedBackKeys()) {
			this.jobAppliedFeedBacks.push(this.jobApplied.feedback[id].feedback as RefereeFeedback);
		}
	}

	private getFeedBackKeys() {
		if (!this.jobApplied) {
			return [];
		}
		return (this.jobApplied.feedback ? Object.keys(this.jobApplied.feedback) : []);
	}
}
