import { Component, OnInit, Input } from '@angular/core';
import {ShareButtonsModule} from 'ng2-sharebuttons';
import { Job } from '../models/job.model';

@Component({
	selector: 'app-job-full-side',
	template: `
	<div>
		<div>
			<div class="card" style="margin-top: 20px;">
				<div class="card-block">
					<p style="font-size: xx-large;font-weight: 900;margin-left: 150px;margin-bottom: -47px;">?</p>
					<h1 class="card-title">5</h1>
					<h5 class="slots">Application Slots Left</h5>
				</div>  
			</div>
		</div>
		<div>
			<div class="card" style="margin-top: 20px;">
				<div class="card-block" style="padding: 17px;">
					<h4 class="card-title">Share This Page</h4>
					<hr style="background: darkgray;">
					<div>
						<a class="btn btn-social-icon btn-twitter btn-lg"
						href="https://twitter.com/home?status=http%3A//localhost%3A4200/jobs/{{job._id}}">
							<span class="fa fa-twitter generalColor"></span>
						</a>
						<a class="btn btn-social-icon btn-twitter btn-lg"
						href="https://www.facebook.com/sharer.php?u=http%3A//localhost%3A4200/jobs/{{job._id}}"
						target="_blank">
							<span class="fa fa-facebook generalColor"></span>
						</a>                
						<a class="btn btn-social-icon btn-twitter btn-lg" 
			href="https://www.linkedin.com/shareArticle?mini=true&url=http%3A//localhost%3A4200/jobs/{{job._id}}&title=&summary=&source="
						target="_blank">
							<span class="fa fa-linkedin generalColor"></span>
						</a>  
						<a class="btn btn-social-icon btn-twitter btn-lg"
						href="https://plus.google.com/share?url=localhost%253A4200/jobs/{{job._id}}">
							<span class="fa fa-google-plus generalColor"></span>
						</a>
						<a class="btn btn-social-icon btn-twitter btn-lg">
							<img src="./assets/images/emailSquareIcon.png" />
						</a>
					</div>
				</div>
			</div>
		</div>
		<div>
			<div class="card" style="margin-top: 20px;">
				<div class="card-block">
					<h3 class="card-title"> Similar Jobs</h3>
					<hr style="background: darkgray;">
					<h5 class="jobTitle"><a routerLink="/jobs/{{job._id}}">{{job.title}}</a></h5>
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
					<hr style="background: darkgray;">
					<h5 class="jobTitle"><a routerLink="/jobs/{{job._id}}">{{job.title}}</a></h5>
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
				</div>
			</div>
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
		font-weight: bolder;
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
		font-size: 1.1em;
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
