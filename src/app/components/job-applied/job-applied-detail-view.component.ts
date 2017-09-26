import { Component, Input } from '@angular/core';
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
		<br/><br/>
		<div class="row">
			<div class="col-md-12">
				<h6 style="color: #57148D;">Reason of interest (What are your Push and Pull Factors) ?</h6>
				<textarea
					rows="5"
				  type="text"
					class="form-control"
					value="{{ jobApplied.form_data.reasonForLeaving }}"
					readonly></textarea>
			</div>
		</div>
		<br/>
		<div class="row">
			<div class="col-md-12">
				<h6 style="color: #57148D;">Your personal scoring:</h6>
				<div *ngFor="let skill of jobApplied.form_data.skills; let i=index;">
					<div class="row">
						<div class="col-md-5">
						<p>{{ skill.name }}</p>
						</div>
						<div class="col-md-7">
							<ng-container *ngFor="let num of [0, 1, 2, 3, 4]; let counter=index">
								<i [ngClass]="getClass(jobApplied.form_data.skills[i], counter)"
								   aria-hidden="true">
								</i>
							</ng-container>
						</div>
					</div>
				</div>
			</div>
		</div>
		<br/>
		<div class="row">
			<div class="col-md-12">
				<h6 style="color: #57148D;">Management</h6>
				<ul class="list-unstyled">
					<li *ngFor="let manage of management">
						<input type="radio" class="input-radio" value="{{ manage.value }}" [(ngModel)]="jobApplied.form_data.management" disabled/>
						<label>&emsp;{{ manage.value }}</label>
					</li>
				</ul>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<h6 style="color: #57148D;">Leadership</h6>
				<ul class="list-unstyled">
					<li *ngFor="let lead of leadership">
						<input type="radio" class="input-radio" value="{{ lead.value }}" [(ngModel)]="jobApplied.form_data.leadership" disabled/>
						<label>&emsp;{{ lead.value }}</label>
					</li>
				</ul>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<h6 style="color: #57148D;">Self-Management</h6>
				<ul class="list-unstyled">
					<li *ngFor="let selfManage of self_management">
						<input type="radio" class="input-radio" value="{{ selfManage.value }}" 
										[(ngModel)]="jobApplied.form_data.selfManagement" disabled/>
						<label>&emsp;{{ selfManage.value }}</label>
					</li>
				</ul>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<h6 style="color: #57148D;">Relationships</h6>
				<ul class="list-unstyled">
					<li *ngFor="let relation of relationship">
						<input type="radio" class="input-radio" value="{{ relation.value }}" 
										[(ngModel)]="jobApplied.form_data.relationship" disabled/>
						<label>&emsp;{{ relation.value }}</label>
					</li>
				</ul>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<h6 style="color: #57148D;">Analytical</h6>
				<ul class="list-unstyled">
					<li *ngFor="let analytic of analytics">
						<input type="radio" class="input-radio" value="{{ analytic.value }}" 
										[(ngModel)]="jobApplied.form_data.analytical" disabled/>
						<label>&emsp;{{ analytic.value }}</label>
					</li>
				</ul>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<h6 style="color: #57148D;">Why are you best fit for this job</h6>
				<textarea
					rows="5"
				  type="text"
					class="form-control"
					value="{{ jobApplied.form_data.fitToJobReason }}"
					readonly></textarea>
			</div>
		</div>
		<br/>
		<div class="row">
			<div class="col-md-12">
				<h6 style="color: #57148D;">What are the achievements related to this job you are the proudest of?</h6>
				<textarea
					rows="5"
				  type="text"
					class="form-control"
					value="{{ jobApplied.form_data.jobRelatedAchievements }}"
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
			-webkit-text-stroke-width: 1px;
			-webkit-text-stroke-color: black;
		}
		.color-white{
			color: white;
			-webkit-text-stroke-width: 1px;
			-webkit-text-stroke-color: black;
		}
	`]
})
export class JobAppliedDetailViewComponent {
	@Input() jobApplied: JobsApplied;
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

	constructor() {	}

	getClass(skill: Skill, index: number) {
		if (index < skill.rate) {
			return 'fa fa-star fa-2x color-yellow';
		} else {
			return 'fa fa-star fa-2x color-white';
		}
	}
}
