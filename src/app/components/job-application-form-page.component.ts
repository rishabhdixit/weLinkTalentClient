import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '../reducers';
import { Job } from 'app/models/job.model';
import { Profile, Position } from '../models/profile.model';
import { Validators } from '@angular/forms/forms';

@Component({
	selector: 'app-job-app-application-form-page',
	template: `
		<div class="container">
			<div class="row container-fluid">
					<div class="col-md-12">
						<h2>Talent Application Form</h2>
						<p style="text-align:center; font-size:small; color:darkgray; margin-bottom:5px;">This application is confidential.
						Please contact us at talent@welinktalent.com for any questions regarding this form.</p>
						<div class="form-group" style="text-align: center; margin-bottom: 0px;">
							<input type="file" id="file" multiple>
						</div>
					</div>
					<div class="col-md-12">
						<div>
							<p class="labelStyle">Reason for leaving the current company:</p>
							<textarea class="form-control" rows="10" id="reasonForLeaving" required></textarea>
						</div>
						<div>
							<p style=" margin-top:10px; margin-bottom:1px; color:#800080; font-weight:700;">Expected Salary:</p>
							<form role="form" class="form-inline">
								<div class="form-group">
									<label for="basePerMonth" style="font-weight: bolder;">Base per month: SGD&emsp;</label>
									<input type="number" class="form-control" id="basePerMonth" required>
								</div>
								<div class="form-group" style="margin-left: 100px;">
									<label for="bonus" style="font-weight: bolder;">&emsp;&emsp;Bonus: SGD&emsp;</label>
									<input type="number" class="form-control" id="bonus" required>
								</div>
							</form>
						</div>
					</div>
					<div class="col-md-12" style="margin-top:10px;">
						<p class="pStyle">Please score yourself accordingly for the skills listed below.</p>
						<p style="margin-bottom: 10px;color: gray;">(5 star= Excellent; 1 star= poor)</p>
						<form class="form">
						<div class="betweenSpace">
							<input type="text" placeholder="E.g. JavaScript"/>
							<ul class="list-unstyled ulStyle">
								<li *ngFor="let a of starCount;" class="listStyle">
									<i class="fa fa-star-o" aria-hidden="true"></i>
								</li>
							</ul>
						</div>
					</form>
					</div>
					<div class="col-md-12" style="margin-top: 10px;">
						<form class="form">
							<div class="form-group">
								<label for="strenghts" class="labelStyle">What are your strengths?</label>
								<textarea class="form-control" rows="5" id="strengths" required></textarea>
							</div>
							<div class="form-group">
								<label for="points" class="labelStyle">What are your points for development/improvement?</label>
								<textarea class="form-control" rows="5" id="points" required></textarea>
							</div>
							<div class="form-group">
								<label for="achievements" class="labelStyle">What are your main achievements?</label>
								<textarea class="form-control" rows="5" id="achievements" required></textarea>
							</div>
							<div class="form-group">
								<label for="management" class="labelStyle">What is your management style?</label>
								<textarea class="form-control" rows="5" id="management" required></textarea>
							</div>
						</form>
					</div>
					<div class="col-md-12" style="margin-top: 50px; text-align: center;">
						<a href="/application-form2"><input type="submit" name="Apply?" class="btn btn-primary btn-lg" value="Apply?"></a>
						<p class="pBottom">Your information will be saved automatically</p>
					</div>
			</div>
		</div>
	`,

	styles: [`
		h2{
			text-align: center;
			color: #4D308E;
		}
		.pStyle{
			color: #4D308E;
			font-weight: 700;
			margin-bottom: 0;
		}
		.betweenSpace{
			margin-bottom: 5px;
		}
		.labelStyle{
			color: #4D308E;
			font-weight: 700;
		}
		.pHeader{
			font-size: larger;
			color: gray;
			text-align: center;
		}
		.listStyle{
			list-style-type: none;
			display: inline-block;
			font-size: 25px;
			padding-right: 8px;
		}
		.ulStyle{
			float: right;
			margin-right: 59%;
			margin-top: -5px;
			margin-bottom: 0;
		}
		i:hover:before{
			color: #FFFF00;
			cursor: pointer;
		}
		.pBottom{
			margin-bottom: 0;
			font-size: x-small;
			color: gray;
		}
		::-webkit-file-upload-button {
			background: deepskyblue;
			color: white;
		}
	`],
})

export class JobApplicationFormPageComponent {
	starCount = new Array(5);
	@Input() job: Job;
	job$: Observable<Job>;

	constructor(private store: Store<fromRoot.State>) {
		this.job$ = this.store.select(fromRoot.getSelectedJob);
	}
}
