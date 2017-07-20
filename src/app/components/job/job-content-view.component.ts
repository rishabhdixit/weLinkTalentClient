import { Component, Input } from '@angular/core';
import { Job } from '../../models/job.model';

@Component({
	selector: 'app-job-content-view',
	template: `
	<div class="row">
		<div class="col-md-12">
		<table class="table tableBorder">
			<tbody>
				<tr>
					<td class="labelType">Employment Type:</td>
					<td>{{job.employment_type}}</td>
				</tr>
				<tr>
					<td class="labelType">Location:</td>
					<td>{{job.location}}</td>
				</tr>
				<tr>
					<td class="labelType">Industry:</td>
					<td>{{job.industry}}</td>
				</tr>
				<tr>
					<td class="labelType">Expertise:</td>
					<td>{{job.expertise}}</td>
				</tr>
				<tr>
					<td class="labelType">Salary from:</td>
					<td>{{job.salary_from}}</td>
				</tr>
				<tr>
					<td class="labelType">Salary to:</td>
					<td>{{job.salary_to}}</td>
				</tr>
				<tr>
					<td class="labelType">Contact Name:</td>
					<td>{{job.contact_name}}</td>
				</tr>
				<tr>
					<td class="labelType">Phone Number:</td>
					<td>{{job.contact_number}}</td>
				</tr>
				<tr>
					<td class="labelType">Contact Email:</td>
					<td>{{job.contact_email}}</td>
				</tr>
			</tbody>
		</table>
		</div>
		<div class="col-md-2">&nbsp;</div>
	</div>
	<div class="row">
		<div class="col-md-12 div-margin">
			<dl>
				<dt> Responsibility  </dt>
				<dd>
					<ul class="item">
						<li *ngFor="let resa of job.responsibilities">
						{{resa}}
						</li>
					</ul>
				</dd>
			</dl>
		</div>
	</div>
	<div class="row">
		<div class="col-md-12 div-margin">
			 <dl class="dl-horizontal">
				<dt> The Ideal Talent </dt>
				<dd>
					<ul>
						<li *ngFor="let talent of job.ideal_talent">
						{{talent}}
						</li>
					</ul>
				</dd>
			</dl>
		</div>
	</div>
	<div class="row">
		<div class="col-md-12 div-margin">
			 <dl class="dl-horizontal">
				<dt> About The Company </dt>
				<dd>
					<table class="table tableBorder">
						<tbody>
							<tr>
								<td><img src="{{'http://' + job.company_logo }}" class="img-responsive logo"/></td>
								<td>{{job.company.about}}</td>
							</tr>
						</tbody>
					</table>
				</dd>
			</dl>
		</div>
	</div>
	`,
	styles: [`
		.tableBorder td{
			padding-top: 5px;
			padding-bottom: 0px;
			border: none;
		}
		.labelType{
			font-weight: 700;
		}
		.div-margin{
			margin-left: 10px;
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
