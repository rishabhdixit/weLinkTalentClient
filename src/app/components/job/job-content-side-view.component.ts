import { Component, Input, Inject } from '@angular/core';
import { Job } from '../../models/job.model';

@Component({
	selector: 'app-job-content-side-view',
	template: `
	<div>
		<div>
			<div class="card" style="margin-top: 20px;">
				<div class="card-block">
					<!--<p style="font-size: xx-large;font-weight: 900;margin-left: 150px;margin-bottom: -47px;">?</p>-->
					<h1 class="card-title">{{job.remaining_slots || job.application_slots-1}}</h1>
					<h5 class="slots">Application Slots Left</h5>
				</div>  
			</div>
		</div>
		<!--<div>
			<div class="card" style="margin-top: 20px;">
				<div class="card-block" style="padding: 17px;">
					<h4 class="card-title">Share This Page</h4>
					<hr style="background: darkgray;">
					<div>
						<a class="btn btn-social-icon btn-twitter btn-lg"
						href="https://twitter.com/home?status={{encodedUrl}}%2Fjobs%2F{{job._id}}">
							<span class="fa fa-twitter generalColor"></span>
						</a>
						<a class="btn btn-social-icon btn-twitter btn-lg"
						href="https://www.facebook.com/sharer.php?u={{encodedUrl}}%2Fjobs%2F{{job._id}}"
						target="_blank">
							<span class="fa fa-facebook generalColor"></span>
						</a>                
						<a class="btn btn-social-icon btn-twitter btn-lg" 
						href="https://www.linkedin.com/shareArticle?mini=true&url={{encodedUrl}}%2Fjobs%2F{{job._id}}
						&title=&summary=&source="
						target="_blank">
							<span class="fa fa-linkedin generalColor"></span>
						</a>  
						<a class="btn btn-social-icon btn-twitter btn-lg"
						href="https://plus.google.com/share?url={{encodedUrl}}%2Fjobs%2F{{job._id}}">
							<span class="fa fa-google-plus generalColor"></span>
						</a>
						<a class="btn btn-social-icon btn-twitter btn-lg" 
						href="mailto:?Subject=Apply for this Job&amp;body=This job suites to you. 
						{{encodedUrl}}%2Fjobs%2F{{job._id}}">
							<img src="./assets/images/emailSquareIcon.png" />
						</a>
					</div>
				</div>
			</div>
		</div>-->
		<!--<div>
			<div class="card" style="margin-top: 20px;">
				<div class="card-block">
					<h3 class="card-title"> Similar Jobs</h3>
					<hr style="background: darkgray;">
					<h5 class="jobTitle"><a routerLink="/jobs/{{job._id}}">{{job.title}}</a></h5>
					<div class="row">
						<div class="col-md-5">
							<label>Location:</label>
						</div>
						<div class="col-md-7 text-wrap">{{job.location}}</div>
					</div>
					<div class="row">
						<div class="col-md-5">
							<label>Job Type:</label>
						</div>
						<div class="col-md-7 text-wrap">{{job.job_type}}</div>
					</div>
					<div class="row">
						<div class="col-md-5">
							<label>Emp Type:</label>
						</div>
						<div class="col-md-7 text-wrap">{{job.employment_type}}</div>
					</div>
					<div class="row">
						<div class="col-md-5">
							<label>Salary:</label>
						</div>
						<div class="col-md-7 text-wrap">{{job.salary_negotiable ? 'Negotiable' : 'Not Negotiable'}}</div>
					</div>
					<hr style="background: darkgray;">
					<h5 class="jobTitle"><a routerLink="/jobs/{{job._id}}">{{job.title}}</a></h5>
					<div class="row">
						<div class="col-md-5">
							<label>Location:</label>
						</div>
						<div class="col-md-7 text-wrap">{{job.location}}</div>
					</div>
					<div class="row">
						<div class="col-md-5">
							<label>Job Type:</label>
						</div>
						<div class="col-md-7 text-wrap">{{job.job_type}}</div>
					</div>
					<div class="row">
						<div class="col-md-5">
							<label>Emp Type:</label>
						</div>
						<div class="col-md-7 text-wrap">{{job.employment_type}}</div>
					</div>
					<div class="row">
						<div class="col-md-5">
							<label>Salary:</label>
						</div>
						<div class="col-md-7 text-wrap">{{job.salary_negotiable ? 'Negotiable' : 'Not Negotiable'}}</div>
					</div>
				</div>
			</div>
		</div>-->
	</div>
	`,
	styles: [`
		h4 {
			color: #57148D;
		}
		.tableBorder td {
			padding-top: 2px;
			padding-bottom: 0px;
			border: none;
		}
		h1 {
			font-size: 115px;
			font-weight: bolder;
			text-align: center;
			color: #57148D;
			margin:  auto;
		}
		.slots {
			text-align: center;
			color: #57148D;
		}
		h3 {
			font-size: x-large;
			color: #57148D;
		}
		h5 {
			text-align: center;
			font-weight: 700;
		}
		label {
			font-weight: 700;
			line-height: 2;
		}
		.slotsLeft {
			float: right;
			font-size: xx-large;
			font-weight: 700;
			margin: 0 auto;
			margin-right: 110px;
		}
		.generalColor {
			color: #FFFFFF;
			font-size: 1.1em;
		}
		.fa-google-plus {
			background-color: #DD4B39;
		}
		.fa-facebook {
			background-color: #3B5998;
		}
		.fa-linkedin {
			background-color: #007BB6;
		}
		.fa-twitter {
			background-color: #55ACEE;
		}
  `],
})

export class JobContentSideViewComponent {
	@Input() job: Job;
	encodedUrl: string;

	constructor(@Inject('encodedUrl') private shareUrl: string) {
		this.encodedUrl = shareUrl;
	}
}
