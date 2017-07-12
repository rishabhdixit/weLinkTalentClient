import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Job } from '../models/job.model';
import { Reference } from '../models/reference.model';
import { JobApplication } from '../models/job-application.model';
import * as fromRoot from '../reducers';
import * as application from '../actions/job-application.action';
import { Observable } from 'rxjs/Observable';
import { User } from '../models/user.model';
import { Router, NavigationEnd } from '@angular/router';

@Component({
	selector: 'app-application-reference-form-page',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<app-header [user]="user$ | async" [route]="route$ | async"></app-header>
		<div class="container">
			<div class="container-fluid">
				<div class="row">
					<div class="col-md-12">
						<h2>Talent Application Form</h2>
						<!--<p class="job-detail">{{ job.title }} - {{ job.company.name }}</p>-->
						<p class="hLabel">This application is confidential. Please contact us at talent@welinktalent.com for any questions
							1regarding this form.</p>
						<p style="color: #4D308E; font-size: larger;">Please provide atleast two references:</p>
					</div>
					<div>
						<p class="refereeStyle">Reference</p>
						<app-reference-form (addReferenceEmitter)="addReferenceClickHandler($event)"></app-reference-form>
					</div>
					<div class="col-md-12" style="background: lightgray;">
						<div *ngFor="let i of referenceList">
							<form>
								<p class="refereeStyle">Reference {{ referenceList.length }}</p>
								<div class="col-md-6" style="margin-left: -15px;">
									<div class="form-group">
										<label class="labelWeight">First Name:* </label>
										<input type="text" disabled class="form-control" value="{{ i.fname }}"/>
									</div>
									<div class="form-group">
										<label class="labelWeight">Current Company:* </label>
										<input type="text" disabled class="form-control" value="{{ i.company }}"/>
									</div>
									<div class="form-group">
										<label class="labelWeight">Mobile Phone:* </label>
										<input type="text" disabled class="form-control" value="{{ i.phone }}"/>
									</div>
								</div>
								<div class="col-md-6 div-style">
									<div class="form-group">
										<label class="labelWeight">Last Name:* </label>
										<input type="text" disabled class="form-control" value="{{ i.lname }}"/>
									</div>
									<div class="form-group">
										<label class="labelWeight">Current Title:* </label>
										<input type="text" disabled class="form-control" value="{{ i.title }}"/>
									</div>
									<div class="form-group">
										<label class="labelWeight">Email:* </label>
										<input type="email" disabled class="form-control" value="{{ i.email }}"/>
									</div>
								</div>
								<div class="col-md-6" style="margin-left: -15px;">
									<div class="form-group">
										<label class="labelWeight">Professional relationship with the referee:* </label>
										<input type="text" disabled class="form-control" value="{{ i.relationship }}"/>
									</div>
								</div>
								<div class="col-md-6 company-div">
									<div class="form-group">
										<label class="labelWeight">In which company, did you work together:* </label>
										<input type="text" disabled class="form-control" value="{{ i.companyTogether }}"/>
									</div>
								</div>
								<div class="form-group col-md-12" style="padding-right: 0; padding-left: 0;">
									<label class="labelWeight">When did you work together?*</label>
									<input type="text" disabled class="form-control" value="{{ i.startYearOfWorking }} - {{ i.endYearOfWorking }}"/>
								</div>
								<div class="form-group">
									<label class="labelWeight">Can we contact this reference?* </label>
									<input type="text" disabled class="form-control" value="{{ i.canContact }}"/>
								</div>
							</form>
							<hr>
						</div>
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
					<div class="col-md-12" style="text-align: center;">
						<button class="btn btn-primary btn-lg btnSubmit" (click)="onSubmitReferenceButton()">Submit</button>
					</div>
				</div>
			</div>
		</div>
		<app-footer></app-footer>
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
		.hLabel {
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
		.labelWeight {
			font-weight: bolder;
			margin-bottom: 5px;
		}
		.div-style {
			float: right;
			margin-top: -246px;
		}
		.company-div {
			float: right;
			margin-top: -82px;
		}
		.form-control {
			border: none;
			background: white;
			color: blue;
			font-weight: bolder;
		}
		.btnSubmit {
			border-radius: 0;
			background: #57148D;
		}
	`],
})

export class ApplicationReferenceFormPageComponent {
	application: JobApplication;
	@Input() job: Job;
	referenceList: Reference[] = [];
	user$: Observable<User>;
	route$: Observable<NavigationEnd>;

	constructor(private store: Store<fromRoot.State>, private userStore: Store<fromRoot.State>, private router: Router) {
		this.store.select(fromRoot.getApplicationForm).subscribe((data) => this.application = data);
		this.user$ = this.userStore.select(fromRoot.getUser);
		this.route$ = this.router.events.filter((event) => event instanceof NavigationEnd);
	}

	addReferenceClickHandler(reference: Reference) {
		this.referenceList.push(reference);
	}

	onSubmitReferenceButton() {
		this.store.dispatch(new application.ApplicationReferenceFormSubmitAction({references_info : this.referenceList,
			applicationId: this.application.id}));
	}

}
