import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, State } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-application-page-view2',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div class="container">
			<div class="container-fluid">
				<div class="row">
					<app-job-app-application-form-page2></app-job-app-application-form-page2>
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
			margin-left: 15px;
		}
	`],
})

export class ApplicationPageView2Component {
	constructor() {

	}
}
