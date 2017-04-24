import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../models/job.model';

@Component({
	selector: 'app-job-full-body',
	template: `
	<div class="row">
		<div class="col-md-10">
		<table class="table tableBorder">
			<tbody>
				<tr>
					<td class="labelType">Employment Type:</td>
					<td>{{job.employmentType}}</td>
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
					<td>{{job.salaryFrom}}</td>
				</tr>
				<tr>
					<td class="labelType">Salary to:</td>
					<td>{{job.salaryTo}}</td>
				</tr>
				<tr>
					<td class="labelType">Contact Name:</td>
					<td>{{job.contactName}}</td>
				</tr>
				<tr>
					<td class="labelType">Phone Number:</td>
					<td>{{job.contactNumber}}</td>
				</tr>
				<tr>
					<td class="labelType">Contact Email:</td>
					<td>{{job.contactEmail}}</td>
				</tr>
			</tbody>
		</table>
		</div>
		<div class="col-md-2">&nbsp;</div>
	</div>
	<div class="row">
		<div class="col-md-10">
			<dl>
				<dt> Responsibility  </dt>
				<dd>
					<ul class="item">
						<li *ngFor="let resa of job.responsibility">
						{{resa}}
						</li>
					</ul>
				</dd>
			</dl>
		</div>
	</div>
	<div class="row">
		<div class="col-md-10">
			 <dl class="dl-horizontal">
				<dt> The Ideal Talent </dt>
				<dd>
					<ul>
						<li *ngFor="let talent of job.idealTalent">
						{{talent}}
						</li>
					</ul>
				</dd>
			</dl>
		</div>
	</div>
	<div class="row">
		<div class="col-md-12">
			 <dl class="dl-horizontal">
				<dt> About The Company </dt>
				<dd>
				<table class="table tableBorder">
					<tbody>
						<tr>
							<td class="companyLogo"><img alt="We Link Talent" src="./assets/images/PN.jpg" class="img-rounded" /></td>
							<td>{{job.aboutCompany}}</td>
						</tr>
					</tbody>
				</table>
				</dd>
			</dl>
		</div>
	<div class="col-md-2">&nbsp;</div>
	</div>
	`,
	styles: [`
		.tableBorder td{
			border: none;
		}
		.companyLogo{
			vertical-align: middle;
		}
		.labelType{
			font-weight: 700;
		}
	`]
})
export class JobFullBodyComponent {
	@Input() job: Job;
	constructor() {
	}
}
