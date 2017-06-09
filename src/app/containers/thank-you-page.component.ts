import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Job } from 'app/models/job.model';
import * as fromRoot from '../reducers';

@Component({
	selector: `app-thank-you-page`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div class="container">
			<div class="row container-fluid">
				<div class="col-md-12" style="margin-top: 30px;">
					 <h2>Thank you for applying to:</h2>
					 <p class="pHeader"></p>
				</div>
				<app-thank-you-view [job]="job$ | async"></app-thank-you-view>
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
								<p class="card-text">Description: Something is happening in something.
										 And that something is something dangerous.</p>
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
		h2{
			text-align: center;
			color: blue;
		}
		.pHeader{
			font-size: larger;
			color: gray;
			text-align: center;
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
	job$: Observable<Job>;
	@Input() job: Job;
	constructor(private store: Store<fromRoot.State>) {
		this.job$ = this.store.select(fromRoot.getSelectedJob);
	}
}
