import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Store, State } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Job } from '../models/job.model';

@Component({
	selector: 'app-application-page-view2',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div class="container">
			<div class="container-fluid">
				<div class="row">
					<div class="col-md-12">
						<h2>Talent Application Form</h2>
						<p>{{ job.title }} - {{ job.company }}</p>
						<p class="hlabel">This application is confidential. Please contact us at talent@welinktalent.com for any questions
							1regarding this form.</p>
						<p style="color: #4D308E; font-size: larger;">Please provide two references:</p>
					</div>
					<div class="col-md-12" *ngFor="let i of range(referee)">
						<p class="refereeStyle">Reference{{i}}</p>
						<app-reference-form></app-reference-form>
					</div>
					<!--<div class="col-md-12">-->
						<!--<p class="refereeStyle" style="margin-top:20px;">Add Referee</p>-->
						<!--<div class="addBtn">-->
							<!--<a routerLink="#">+</a>-->
						<!--</div>-->
					<!--</div>-->
					<div class="col-md-12 div-margin">
						<div>
							<p class="top">Privacy Statement</p>
							<p class="below">Filling this form, you agree to share all your personal details with WeLinkTalent Pte Ltd. 
							WeLinkTalent is committed to ensuring that we, when collect and use information about visitors to 
							our websites, we do so in accordance with the Personal Data Protection Act 2012</p>
						</div>
						<div>
							<p class="top">Terms and Conditions</p>
							<p class="below">This Curriculum Vitae is provided in the strictest confidence, is subjected to the Terms 
							and Conditions of WeLinkTalent Pte Ltd and contains personal data that must only be processed for the purpose 
							for which it is submitted (in accordance with the PDPA). If you have not recently received a copy of our 
							relevant Terms and Conditions, please ensure that you request a further copy before instructing our 
							consultants to arrange any candidate interviews.</p>
						</div>
					</div>
					<div class="col-md-12">
						<div class="col-md-6" style="margin-top: 50px;">
							<a routerLink="/application-form"><button type="button" class="btn btn-basic btn-lg back-btn">Back</button></a>
						</div>
						<div class="col-md-6" style="float:right; margin-top:-50px;">
							<a routerLink="/thank-page"><button type="button" class="btn btn-primary btn-lg">Submit</button></a>
						</div>
					</div>
				</div>
			</div>
		</div>
	`,


	styles: [`
		.top{
			margin-bottom: 5px;
			font-size: smaller;
			color: blue;
		}
		.below{
			font-size: smaller;
		}
		.back-btn{
			width: 113px;
			float: right;
		}
		.div-margin{
			margin-top: 30px;
			margin-left: 0;
		}
		.hlabel{
			text-align:center;
			font-size:small;
			color:darkgray;
			margin-bottom:5px;
		}
		.refereeStyle{
			color: #4D308E;
			font-weight: 700;
		}
		h2{
			text-align: center;
			color: #4D308E;
		}
		.addBtn{
			font-size: x-large;
			float: right;
			margin-right: 88%;
			margin-top: -55px;
			font-weight: 800;
		}
	`],
})

export class ApplicationPageView2Component {
	@Input() job: Job;
	referee = 2;

	constructor() {	}

	range = (value) => {
		let a = [];
		for (let i = 0; i < value; ++i) {
			a.push(i + 1);
		}
		return a;
	}
}
