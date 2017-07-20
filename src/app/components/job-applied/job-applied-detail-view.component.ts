import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../reducers';
import { JobsApplied } from '../../models/jobs-applied.model';
import { Skill } from '../../models/skill.model';

@Component({
	selector: 'app-job-applied-detail-view',
	template: `
		<div class="row">
			<div class="col-md-12 text-center">
				<h5>Your Applications Details:</h5>
				<p>This section contains what you have filled previously.</p>
			</div>
		</div>
		<br/>
		<div class="row">
			<div class="col-md-12">
				<h6 style="color: #57148D;">Reason for leaving current company:</h6>
				<textarea
					rows="5"
				  type="text"
					class="form-control"
					value="{{jobApplied.form_data.reasonForLeaving}}"
					readonly></textarea>
			</div>
		</div>
		<!--<br/>
	  <div class="row">
		  <div class="col-md-12">
			  <h6>Expected Salary:</h6>
			  <h6>Base per month: SGD {{jobApplied.form_data.basePerMonth}}</h6>
			  <h6>Bonus: SGD {{jobApplied.form_data.bonus}}</h6>
		  </div>
	  </div>-->
		<br/>
		<div class="row">
			<div class="col-md-12">
				<h6 style="color: #57148D;">Your personal scoring:</h6>
				<div class="form-group" *ngFor="let skill of jobApplied.form_data.skills; let i=index;">
					<ng-container *ngFor="let num of [0, 1, 2, 3, 4]; let counter=index">
						<i [ngClass]="getClass(jobApplied.form_data.skills[i], counter)"
						   aria-hidden="true">
						</i>
					</ng-container>
				</div>
			</div>
		</div>
		<br/>
		<div class="row">
			<div class="col-md-12">
				<h6 style="color: #57148D;">Your Strengths:</h6>
				<textarea
					rows="5"
					type="text"
					class="form-control"
					value="{{jobApplied.form_data.strength}}"
					readonly></textarea>
			</div>
		</div>
		<br/>
		<div class="row">
			<div class="col-md-12">
				<h6 style="color: #57148D;">Your Points of Development/Improvement:</h6>
				<textarea
					rows="5"
					type="text"
					class="form-control"
					value="{{jobApplied.form_data.improvements}}"
					readonly></textarea>
			</div>
		</div>
		<br/>
		<div class="row">
			<div class="col-md-12">
				<h6 style="color: #57148D;">Your Main Achievements:</h6>
				<textarea
					rows="5"
					type="text"
					class="form-control"
					value="{{jobApplied.form_data.achievements}}"
					readonly></textarea>
			</div>
		</div>
		<br/>
		<div class="row">
			<div class="col-md-12">
				<h6 style="color: #57148D;">Your Management Style:</h6>
				<textarea
					rows="5"
					type="text"
					class="form-control"
					value="{{jobApplied.form_data.management}}"
					readonly></textarea>
			</div>
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
export class JobAppliedDetailViewComponent {
	@Input() jobApplied: JobsApplied;

	constructor(private store: Store<fromRoot.State>) {
	}

	getClass(skill: Skill, index: number) {
		if (index < skill.rate) {
			return 'fa fa-star fa-2x color-yellow';
		} else {
			return 'fa fa-star fa-2x';
		}
	}
}
