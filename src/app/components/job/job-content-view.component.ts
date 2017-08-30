import { Component, Input } from '@angular/core';
import { Job } from '../../models/job.model';

@Component({
	selector: 'app-job-content-view',
	template: `
		<div class="row">
			<div class="col-md-12">
				<div class="row">
					<div class="col-md-6 labelType">Employment Type:</div>
					<div class="col-md-6">{{job.employment_type}}</div>
				</div>
				<div class="row">
					<div class="col-md-6 labelType">Location:</div>
					<div class="col-md-6">{{job?.company?.address}}</div>
				</div>
				<div class="row">
					<div class="col-md-6 labelType">Industry:</div>
					<div class="col-md-6">{{job.industry}}</div>
				</div>
				<div class="row">
					<div class="col-md-6 labelType">Expertise:</div>
					<div class="col-md-6">{{job.expertise}}</div>
				</div>
				<div class="row">
					<div class="col-md-6 labelType">Salary from:</div>
					<div class="col-md-6">{{job.salary_from}}</div>
				</div>
				<div class="row">
					<div class="col-md-6 labelType">Salary to:</div>
					<div class="col-md-6">{{job.salary_to}}</div>
				</div>
				<div class="row">
					<div class="col-md-6 labelType">Contact Name:</div>
					<div class="col-md-6">{{job?.company?.name}}</div>
				</div>
				<div class="row">
					<div class="col-md-6 labelType">Phone Number:</div>
					<div class="col-md-6">{{job?.company?.phone_numbers[0]}}</div>
				</div>
				<div class="row">
					<div class="col-md-6 labelType">Contact Email:</div>
					<div class="col-md-6">{{job?.company?.email}}</div>
				</div>
			</div>
			<div class="col-md-2">&nbsp;</div>
		</div>
		<div class="row">
			<div class="col-md-12 labelType">Job Description</div>
			<div class="col-md-12 div-margin-40" style="padding-top: 10px;">
				<p>{{job?.description}}</p>
			</div>
		</div>
		<br/>
		<div class="row">
			<div class="col-md-12">
				<dl>
					<dt>Skills</dt>
					<dd>
						<ul class="item">
							<li *ngFor="let skill of job.skills">{{skill}}</li>
						</ul>
					</dd>
				</dl>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<dl>
					<dt>Responsibility</dt>
					<dd>
						<ul class="item">
							<li *ngFor="let responsility of job.responsibilities">{{responsility}}</li>
						</ul>
					</dd>
				</dl>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				 <dl class="dl-horizontal">
					<dt>The Ideal Talent</dt>
					<dd>
						<ul>
							<li *ngFor="let talent of job.ideal_talent">{{talent}}</li>
						</ul>
					</dd>
				</dl>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12 labelType">About The Company</div>
			<div class="col-md-12" style="padding-top: 10px;">
				<div class="row">
					<div class="col-md-3">
						<img src="{{'http://' + job?.company_logo }}" class="img-responsive logo"/>
					</div>
					<div class="col-md-9">
						<p>{{job?.company?.about}}</p>
					</div>
				</div>
			</div>
		</div>
	`,
	styles: [`
		.tableBorder td {
			padding-top: 5px;
			padding-bottom: 0px;
			border: none;
		}
		.labelType {
			font-weight: 700;
		}
		.div-margin-40 {
			margin-left: 40px;
		}
		.logo {
			width: 3cm;
			height: 3cm;
		}
	`]
})
export class JobContentViewComponent {
	@Input() job: Job;

	constructor() {	}
}
