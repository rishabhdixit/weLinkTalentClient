import {Component, Input, OnInit, Output, EventEmitter, OnChanges} from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import { JobsApplied } from '../../models/jobs-applied.model';
import { RefereeFeedback } from '../../models/referee-feedback.model';
import { Skill } from '../../models/skill.model';
import { isUndefined } from 'util';

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
		<div class="col-md-12" *ngIf="hasFeedBacks() && feedback.approvedByCandidate" style="padding-bottom: 39px;"></div>
		<div class="row" *ngIf="hasFeedBacks() && !feedback.approvedByCandidate">
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
				<textarea rows="5" type="text" class="form-control" [(ngModel)]="feedback.reasonForLeaving.comment" readonly></textarea>
				<label class="form-inline">
					<input type="checkbox" [(ngModel)]="feedback.reasonForLeaving.approved" disabled> APPROVE
				</label>
			</div>
		</div>
		<br/>
		<div class="row">
			<div *ngIf="selectedFeedBack" class="col-md-12">
				<div class="form-group" *ngFor="let skill of feedback.skillRatings; let i=index;">
					<ng-container *ngFor="let num of [0, 1, 2, 3, 4]; let counter=index">
						<i [ngClass]="getClass(feedback.skillRatings[i], counter)"></i>
					</ng-container>
				</div>
			</div>
		</div>
		<br/>
		<div class="row" style="padding-top: 20px;">
			<div *ngIf="selectedFeedBack" class="col-md-12">
				<textarea rows="5" type="text" class="form-control" [(ngModel)]="feedback.strength.comment" readonly></textarea>
				<label class="form-inline">
					<input type="checkbox" [(ngModel)]="feedback.strength.approved" disabled> APPROVE
				</label>
			</div>
		</div>
		<br/>
		<div class="row" style="padding-top: 3px;">
			<div *ngIf="selectedFeedBack" class="col-md-12">
				<textarea rows="5" type="text" class="form-control" [(ngModel)]="feedback.improvement.comment" readonly></textarea>
				<label class="form-inline">
					<input type="checkbox" [(ngModel)]="feedback.improvement.approved" disabled> APPROVE
				</label>
			</div>
		</div>
		<br/>
		<div class="row" style="padding-top: 3px;">
			<div *ngIf="selectedFeedBack" class="col-md-12">
				<textarea rows="5" type="text" class="form-control" [(ngModel)]="feedback.achievement.comment" readonly></textarea>
				<label class="form-inline">
					<input type="checkbox" [(ngModel)]="feedback.achievement.approved" disabled> APPROVE
				</label>
			</div>
		</div>
		<br/>
		<div class="row" style="padding-top: 8px;">
			<div *ngIf="selectedFeedBack" class="col-md-12">
				<textarea rows="5" type="text" class="form-control" [(ngModel)]="feedback.managementStyle.comment" readonly></textarea>
				<label class="form-inline">
					<input type="checkbox" [(ngModel)]="feedback.managementStyle.approved" disabled> APPROVE
				</label>
			</div>
		</div>
		<br/>
		<div *ngIf="jobAppliedFeedBacks.length > 1" class="row">
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
export class JobAppliedFeedbackViewComponent implements OnInit, OnChanges {
	@Output() OnApprovedFeedbackEvent = new EventEmitter<any>();
	@Input() jobApplied: JobsApplied;

	jobAppliedFeedBacks: RefereeFeedback[] = [];
	selectedFeedBack: RefereeFeedback;
	index: number = 0;
	maxIndex: number;

	feedback: any = {
		approvedByCandidate: false,
		skillRatings: [Skill],
		reasonForLeaving: {
			comment: '',
			approved: false
		},
		strength: {
			comment: '',
			approved: false
		},
		improvement: {
			comment: '',
			approved: false
		},
		achievement: {
			comment: '',
			approved: false
		},
		managementStyle: {
			comment: '',
			approved: false
		}
	};

	constructor(private store: Store<fromRoot.State>) { }

	ngOnInit() {}

	ngOnChanges(changes: any): void {
		if (this.jobApplied) {
			this.constructFeedBacks();
			this.initSelectedFeedBack();
			this.populateFeedback(this.selectedFeedBack);
		}
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
			this.populateFeedback(this.selectedFeedBack);
		}
	}

	onNextClick(): void {
		if (this.index < this.maxIndex - 1) {
			this.selectedFeedBack = this.jobAppliedFeedBacks[this.index++];
			this.populateFeedback(this.selectedFeedBack);
		}
	}

	getClass(skill: Skill, index: number): string {
		if (index < skill.rate) {
			return 'fa fa-star fa-2x color-yellow';
		} else {
			return 'fa fa-star fa-2x';
		}
	}

	hasFeedBacks(): boolean {
		return !isUndefined(this.jobAppliedFeedBacks) && this.jobAppliedFeedBacks.length > 0;
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

	populateFeedback(paramFeedback: RefereeFeedback): void {
		if (paramFeedback) {
			this.feedback.approvedByCandidate = paramFeedback.approved_by_candidate;
			this.feedback.skillRatings = paramFeedback.skillRatings;
			this.feedback.reasonForLeaving = {
				comment: paramFeedback.reasonForLeavingFeedback,
				approved: paramFeedback.reasonForLeavingApproved
			};
			this.feedback.strength = {
				comment: paramFeedback.strengthFeedback,
				approved: paramFeedback.strengthApproved
			};
			this.feedback.improvement = {
				comment: paramFeedback.improvementFeedback,
				approved: paramFeedback.improvementApproved
			};
			this.feedback.achievement = {
				comment: paramFeedback.achievementFeedback,
				approved: paramFeedback.achievementApproved
			};
			this.feedback.managementStyle = {
				comment: paramFeedback.managementStyleFeedback,
				approved: paramFeedback.managementStyleApproved
			};
		}
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
		feedback.approved_by_candidate = value.approved_by_candidate;
		return feedback;
	}
}
