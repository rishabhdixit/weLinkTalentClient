import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Store, State } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Job } from 'app/models/job.model';

@Component({
	selector: `app-thank-you-page`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div class="container">
			<div class="row container-fluid">
				<div class="col-md-12" style="margin-top: 30px;">
					 <h2>Thank you for applying to:</h2>
					 <p class="pHeader">Finance Director APAC - Passerelles Numeriques</p>
				</div>
				<div class="col-md-12" style="margin-top: 50px;">
					<div class="col-md-5" style="margin-left: 35px;">
						<div class="card cardStyle">
							<div class="card-block">
								<h1 class="card-title">5</h1>
								<p class="card-text fontStyle">Application Slots Left</p>
							</div>  
						</div>
					</div>
					<div class="col-md-2">
						<img alt="We Link Talent" src="./assets/images/right_arrow.png" 
								class="img-responsive arrow"/>
					</div>
					<div class="col-md-5 rightPart">
						<div class="card cardStyle">
							<div class="card-block">
								<h1 class="card-title ">4</h1>
								<p class="card-text fontStyle">Application Slots Left</p>
							</div>  
						</div>
					</div>
				</div>
				<div class="col-md-12"  style="margin-top:60px; font-size: large;">
					<p>An email has been sent to your referee(s) to validate your application.</p><br>
					<p>You will also receive a notification email once your referee has completed the validation form.</p><br>
					<p>You can also go to your Home page to check the application status.</p><br>
					<p>For any queries, feel free to contact us on at talent@welinktalent.com.</p><br>
					<hr>
				</div>
				<div class="col-md-12" style="margin-top: 10px; font-size: smaller;">
					<p style="font-size: initial;">You may also wish to apply for the following jobs:</p>
					<div class="col-md-6 div-style">
						<div class="card" style="width: 20rem; height: 13rem;">
							<div class="card-block">
								<h5 class="card-title ">Job Title</h5>
								<p class="card-text">Company Name</p>
								<p class="card-text">Description</p>
							</div>  
						</div>
						<div class="card" style="width: 20rem; height: 13rem; margin-top: 25px;">
							<div class="card-block">
								<h5 class="card-title ">Job Title</h5>
								<p class="card-text">Company Name</p>
								<p class="card-text">Description</p>
							</div>  
						</div>
					</div>
					<div class="col-md-6" style="float: right; margin-right: -110px;">
						<div class="card" style="width: 20rem; height: 13rem;">
							<div class="card-block">
								<h5 class="card-title ">Job Title</h5>
								<p class="card-text">Company Name</p>
								<p class="card-text">Description</p>
							</div>  
						</div>
						<div class="card" style="width: 20rem; height: 13rem; margin-top: 25px;">
							<div class="card-block">
								<h5 class="card-title ">Job Title</h5>
								<p class="card-text">Company Name</p>
								<p class="card-text">Description: Somethin is happening in somethingy.
										 And that somethin is somethin dangerous.</p>
							</div>  
						</div>
					</div>
				</div>
			</div>
		</div>
	`,

	styles: [`
		.cardStyle{
			text-align: center;
			width: 80%;
			height: 40%;
			background: #4D308E;
		}
		h1{
			color: white;
			font-size: 80px;
			margin-top: -20px;
			font-weight: bolder;
		}
		.fontStyle{
			color: white;
			font-size: larger;
			font-weight: 800;
			margin-top: -20px;
		}
		.rightPart{
			margin-left: 0;
			float: right;
			padding-right: 0;
			margin-top: -156px;
			margin-right: -20px;
		}
		h2{
			text-align: center;
			color: blue;
		}
		.pHeader{
			font-size: larger;
			color: gray;
			text-align: center;
		}
		.arrow{
			width: 149%;
			float: right;
			margin-right: -394px;
			margin-top: -153px;
		}
		.div-style{
			float: right;
			margin-right: 5px;
		}
		h5{
			color: blue;
		}
	`],
})

export class ThankYouPageComponent {
	job: Job;
	constructor() {

	}
}
