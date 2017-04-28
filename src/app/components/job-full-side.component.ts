import { Component, OnInit, Input } from '@angular/core';
import {ShareButtonsModule} from 'ng2-sharebuttons';
import { Job } from '../models/job.model';

@Component({
	selector: 'app-job-full-side',
	template: `
	<div>
		<div>
			<p class="slotsLeft">?</p>
			<h1 style="margin-left: 90px;">5</h1>
			<h5 class="slots">Application Slots Left</h5>
		</div>
		<hr>
		<div>
			<hr>
			<h4> Share This Page </h4>
			<hr>
			<div>
				<a class="btn btn-social-icon btn-twitter btn-lg"
				href="https://twitter.com/home?status=http%3A//localhost%3A4200/jobs/{{job.id}}">
					<span class="fa fa-twitter generalColor"></span>
				</a>
				<a class="btn btn-social-icon btn-twitter btn-lg"
				href="https://www.facebook.com/sharer.php?u=http%3A//localhost%3A4200/jobs/{{job.id}}"
				target="_blank">
					<span class="fa fa-facebook generalColor"></span>
				</a>                
				<a class="btn btn-social-icon btn-twitter btn-lg"
			href="https://www.linkedin.com/shareArticle?mini=true&url=http%3A//localhost%3A4200/jobs/{{job.id}}&title=&summary=&source="
				target="_blank">
					<span class="fa fa-linkedin generalColor"></span>
				</a>  
				<a class="btn btn-social-icon btn-twitter btn-lg"
				href="https://plus.google.com/share?url=localhost%253A4200/jobs/{{job.id}}">
					<span class="fa fa-google-plus generalColor"></span>
				</a>
				<a class="btn btn-social-icon btn-twitter btn-lg">
					<img src="./assets/images/emailSquareIcon.png" />
				</a>
			</div>
		</div><br><br>
		<div>
			<h3> Similar Jobs</h3>
			<hr>
			<h5 class="jobTitle">{{job.title}}</h5>
			<div>
				<table class="table table-condensed tableBorder">
					<tbody>
						<tr>
							<td class="labelType">Location:<td>
							<td>{{job.location}}</td>
						</tr >
						<tr>
							<td class="labelType">Job Type:<td>
							<td>Permanent</td>
						</tr>
						<tr>
							<td class="labelType">Emp Type:<td>
							<td>{{job.employmentType}}</td>
						</tr>
						<tr>
							<td class="labelType">Salary:<td>
							<td>Negotiable</td>
						</tr>
					</tbody>
				</table>
			</div>
			<hr>
			<h5 class="jobTitle">{{job.title}}</h5>
			<div>
				<table class="table tableBorder">
					<tbody>
						<tr>
							<td class="labelType">Location:<td>
							<td>{{job.location}}</td>
						</tr>
						<tr>
							<td class="labelType">Job Type:<td>
							<td>Permanent</td>
						</tr>
						<tr>
							<td class="labelType">Emp Type:<td>
							<td>{{job.employmentType}}</td>
						</tr>
						<tr>
							<td class="labelType">Salary:<td>
							<td>Negotiable</td>
						</tr>
					</tbody>
				</table>
			</div>
			<hr>
		</div>
	</div>
	`,
	styles: [`
   h4{
	   color: #4D308E
	}
	.tableBorder td{
		padding-top: 2px;
		padding-bottom: 0px;
		border: none;
	}
	.labelType{
		font-weight: 700;
		line-height: 2;
	}
	h1{
		font-size: 115px;
		text-align: center;
		color: #4D308E;
		margin:  auto;
	}
	.slots{
		text-align: center;
		color: #4D308E;
	}
	h3{
		font-size: x-large;
		color: #4D308E;
	}
	h5{
		text-align: center;
		font-weight: 700;
	}
	.slotsLeft{
		float: right;
		font-size: xx-large;
		font-weight: 700;
		margin: 0 auto;
		margin-right: 110px;
	}
	.generalColor{
		color: #FFFFFF;
		font-size: 1.2em;
	}
	.fa-google-plus{
		background-color: #DD4B39;
	}
	.fa-facebook{
		background-color: #3B5998;
	}
	.fa-linkedin{
		background-color: #007BB6;
	}
	.fa-twitter{
		background-color: #55ACEE;
	}
   `],
})

export class JobFullSideComponent {
	@Input() job: Job;
	constructor() {

	}
}
