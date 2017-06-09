import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Store, State } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Job } from '../models/job.model';
import { Reference } from '../models/reference.model';
import { Application } from '../models/job-application.model';
import * as fromRoot from '../reducers';
import * as ui from '../actions/ui.action';
import * as application from '../actions/job-application.action';

@Component({
	selector: 'app-application-reference-form-page',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div class="container">
			<div class="container-fluid">
				<div class="row">
					<div class="col-md-12">
						<h2>Talent Application Form</h2>
						<!--<p class="job-detail">{{ job.title }} - {{ job.company.name }}</p>-->
						<p class="hlabel">This application is confidential. Please contact us at talent@welinktalent.com for any questions
							1regarding this form.</p>
						<p style="color: #4D308E; font-size: larger;">Please provide two references:</p>
					</div>
					<div>
						<p class="refereeStyle">Reference</p>
						<app-reference-form (addReferenceEmitter)="addReferenceClickHandler($event)"></app-reference-form>
					</div>
					<div *ngFor="let i of referenceList">
						<p>References: </p>
						<p>First Name: {{ i.fname }}</p>
						<p>Last Name: {{ i.lname }}</p>
						<p>Current Company: {{ i.company }}</p>
						<p>Current Title: {{ i.title }}</p>
						<p>Mobile Phone: {{ i.phone }}</p>
						<p>Email: {{ i.email }}</p>
						<p>Professional relationship with the referee: {{ i.relationship }}</p>
						<p>When did you work together? From {{ i.startYearOfWorking }} To {{ i.endYearOfWorking }}</p>
						<p>In which company, did you work together: {{ i.companyTogether }}</p>
						<p>Can we contact this reference? {{ i.canContact }}</p>
					</div>
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
					<div class="col-md-12" *ngIf="referenceList.length > 1" style="text-align: center;">
						<button class="btn btn-primary btn-lg" (click)="onSubmitReferenceButton()">Submit</button>
					</div>
				</div>
			</div>
		</div>
	`,
	styles: [`
		.top {
			margin-bottom: 5px;
			font-size: smaller;
			color: blue;
		}
		.below{
			font-size: smaller;
		}
		.div-margin{
			margin-top: 30px;
			margin-left: 0;
			padding-left: 0;
		}
		.hlabel {
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
	`],
})

export class ApplicationReferenceFormPageComponent {
	application: Application;
	@Input() job: Job;
	referenceList: Reference[] = [];

	constructor(private store: Store<fromRoot.State>) {
		this.store.select(fromRoot.getApplicationForm).subscribe((data) => this.application = data);
	}

	addReferenceClickHandler(reference: Reference) {
		this.referenceList.push(reference);
	}

	onSubmitReferenceButton() {
		this.store.dispatch(new application.ApplicationReferenceFormSubmitAction({references_info : this.referenceList,
			applicationId: this.application.id}));
	}

}
