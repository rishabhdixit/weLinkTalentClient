import { Component, Input } from '@angular/core';
import { JobsApplied } from '../../models/jobs-applied.model';
import { Skill }  from '../../models/skill.model';

@Component({
	selector: 'app-candidate-application-form-view',
	template: `
		<div class="row">
			<div class="col-md-12">
				<div class="row">
					<div class="col-md-12 text-left">
						<h3 class="purple-color">Candidate Application</h3>
					</div>
				</div>
			</div>
		</div>
		<br/>
		<div class="row">
			<div class="col-md-10">
				<h6 class="purple-color"><b>Reason of interest (What are your Push and Pull Factors) ?</b></h6>
				<textarea
					rows="7"
				  type="text"
					class="form-control"
					value="{{ application.form_data.reasonForLeaving }}"
					readonly></textarea>
			</div>
		</div>
		<br/>
		<div class="row">
			<div class="col-md-10">
				<p class="purple-color"><b>Your personal scoring:</b></p>
				<div *ngFor="let skill of application.form_data.skills; let i=index;">
					<div class="row">
						<div class="col-md-5">
							<h6><b>{{ skill.name }}</b></h6>
						</div>
						<div class="col-md-7">
							<ng-container *ngFor="let num of [0, 1, 2, 3, 4]; let counter=index">
								<i [ngClass]="getClass(application.form_data.skills[i], counter)"
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
				<h6 class="purple-color"><b>Management</b></h6>
				<ul>
					<li *ngFor="let manage of management">
						<input type="radio" class="input-radio" value="{{ manage.value }}" [(ngModel)]="application.form_data.management" disabled/>
						<label>&emsp;{{ manage.value }}</label>
					</li>
				</ul>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<h6 class="purple-color"><b>Leadership</b></h6>
				<ul>
					<li *ngFor="let lead of leadership">
						<input type="radio" class="input-radio" value="{{ lead.value }}" [(ngModel)]="application.form_data.leadership" disabled/>
						<label>&emsp;{{ lead.value }}</label>
					</li>
				</ul>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<h6 class="purple-color"><b>Self-Management</b></h6>
				<ul>
					<li *ngFor="let selfManage of self_management">
						<input type="radio" class="input-radio" value="{{ selfManage.value }}" 
										[(ngModel)]="application.form_data.selfManagement" disabled/>
						<label>&emsp;{{ selfManage.value }}</label>
					</li>
				</ul>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<h6 class="purple-color"><b>Relationships</b></h6>
				<ul>
					<li *ngFor="let relation of relationship">
						<input type="radio" class="input-radio" value="{{ relation.value }}" 
										[(ngModel)]="application.form_data.relationship" disabled/>
						<label>&emsp;{{ relation.value }}</label>
					</li>
				</ul>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<h6 class="purple-color"><b>Analytical</b></h6>
				<ul>
					<li *ngFor="let analytic of analytics">
						<input type="radio" class="input-radio" value="{{ analytic.value }}" 
										[(ngModel)]="application.form_data.analytical" disabled/>
						<label>&emsp;{{ analytic.value }}</label>
					</li>
				</ul>
			</div>
		</div>
		<div class="row">
			<div class="col-md-10">
				<h6 class="purple-color"><b>Why are you best fit for this job</b></h6>
				<textarea
					rows="7"
				  type="text"
					class="form-control"
					value="{{ application.form_data.fitToJobReason }}"
					readonly></textarea>
			</div>
		</div>
		<br/>
		<div class="row">
			<div class="col-md-10">
				<h6 class="purple-color"><b>What are the achievements related to this job you are the proudest of?</b></h6>
				<textarea
					rows="7"
				  type="text"
					class="form-control"
					value="{{ application.form_data.jobRelatedAchievements }}"
					readonly></textarea>
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
	`]
})
export class CandidateApplicationFormViewComponent {
	@Input() application: JobsApplied;

	management: Array<any> = [
		{ value: 'Delegation & Performance Management' },
		{ value: 'Project/Process Management' },
		{ value: 'Managing Execution' },
		{ value: 'Coaching & Developing Talent' },
		{ value: 'Managing Difference/Conflict'}
	];
	leadership: Array<any> = [
		{ value: 'Strategic Thinking' },
		{ value: 'Business Acumen' },
		{ value: 'Leading Courageously' },
		{ value: 'Inspiring Others' },
		{ value: 'Integrity, Trust & Credibility' }
	];
	self_management: Array<any> = [
		{ value: 'Learning Agility / Development' },
		{ value: 'Initiative & Risk Taking' },
		{ value: 'Drive for Results' },
		{ value: 'Adaptability Management' },
		{ value: 'Emotional Resilience' }
	];
	relationship: Array<any> = [
		{ value: 'Communication & Influencing' },
		{ value: 'Interpersonal Skills' },
		{ value: 'Teamwork & Team Building' },
		{ value: 'Customer Focus' },
		{ value: 'Cross-Cultural Agility' }
	];
	analytics: Array<any> = [
		{ value: 'Problem Solving' },
		{ value: 'Critical Thinking' },
		{ value: 'Decision Making' },
		{ value: 'Innovation' },
		{ value: 'Professional Expertise' }
	];

	constructor() {}

	getClass(skill: Skill, index: number) {
		if (index < skill.rate) {
			return 'fa fa-star fa-2x color-yellow';
		} else {
			return 'fa fa-star fa-2x color-white';
		}
	}
}
