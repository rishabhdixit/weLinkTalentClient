import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
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
		<div class="container">
			<div class="container-fluid">
				<div class="col-md-12">
					<h2>Talent Application Form</h2>
					<p class="pHeader">{{ selectedJob.title }} - {{ selectedJob.company.name }}</p>
					<p class="hLabel">This application is confidential. Please contact us at talent@welinktalent.com for any questions
						regarding this form.</p>
					<p style="color: #4D308E; font-size: larger;">Please provide at least two references:</p>
				</div>
				<div class="col-md-12">
					<app-reference-form (addReferenceEmitter)="addReferenceClickHandler($event)" [modifiedReferee]="referee"></app-reference-form>
				</div>
				<div class="col-md-12 light-gray-background">
					<div *ngFor="let ref of referenceList; let i = index">
						<p>Reference</p>
						<div class="col-md-6" style="margin-left: -15px;">
							<div class="form-group">
								<label class="labelWeight">First Name:<i class="red-color"> * </i></label>
								<input type="text" disabled class="form-control" value="{{ ref.firstName }}"/>
							</div>
							<div class="form-group">
								<label class="labelWeight">Current Company:<i class="red-color"> * </i></label>
								<input type="text" disabled class="form-control" value="{{ ref.company }}"/>
							</div>
							<div class="form-group">
								<label class="labelWeight">Mobile Phone:<i class="red-color"> * </i></label>
								<input type="text" disabled class="form-control" value="{{ ref.phone }}"/>
							</div>
						</div>
						<div class="col-md-6 div-style">
							<div class="form-group">
								<label class="labelWeight">Last Name:<i class="red-color"> * </i></label>
								<input type="text" disabled class="form-control" value="{{ ref.lastName }}"/>
							</div>
							<div class="form-group">
								<label class="labelWeight">Current Title:<i class="red-color"> * </i></label>
								<input type="text" disabled class="form-control" value="{{ ref.title }}"/>
							</div>
							<div class="form-group">
								<label class="labelWeight">Email Address:<i class="red-color"> * </i></label>
								<input type="email" disabled class="form-control" value="{{ ref.emailAddress }}"/>
							</div>
						</div>
						<div class="col-md-6" style="margin-left: -15px;">
							<div class="form-group">
								<label class="labelWeight">Professional relationship with the referee:<i class="red-color"> * </i></label>
								<input type="text" disabled class="form-control" value="{{ ref.relationship }}"/>
							</div>
						</div>
						<div class="col-md-6 company-div">
							<div class="form-group">
								<label class="labelWeight">In which company, did you work together:<i class="red-color"> * </i></label>
								<input type="text" disabled class="form-control" value="{{ ref.companyTogether }}"/>
							</div>
						</div>
						<div class="form-group col-md-12" style="padding-right: 0; padding-left: 0;">
							<label class="labelWeight">When did you work together?<i class="red-color"> * </i></label>
							<input type="text" disabled class="form-control" value="{{ ref.startYearOfWorking }} - {{ ref.endYearOfWorking }}"/>
						</div>
						<div class="form-group">
							<label class="labelWeight">Can we contact this reference?<i class="red-color"> * </i></label>
							<input type="text" disabled class="form-control" value="{{ ref.canContact }}"/>
						</div>
						<div class="col-md-12 buttons">
							<button class="btn btn-default" (click)="editReference(i)">Edit</button>&emsp;
							<button class="btn btn-danger" (click)="removeReference(i)">Remove</button>
						</div>
						<hr>
					</div>
				</div>
				<div class="col-md-12 text-left light-gray-background">
					<p class="purple-color" style="padding-top: 10px; padding-bottom: 10px;">
						Total Number of References: <strong class="red-color">{{ referenceList.length }}</strong>
					</p>
				</div>
				<div class="col-md-12">
					<div class="row">
						<div class="col-md-12">
							<h6 class="purple-color">Privacy Statement</h6>
							<p>Filling this form, you agree to share all your personal details with WeLinkTalent Pte Ltd.
								WeLinkTalent is committed to ensuring that we, when collect and use information about visitors to
								our websites, we do so in accordance with the Personal Data Protection Act 2012</p>
						</div>
						<div class="col-md-12">
							<h6 class="purple-color">Terms and Conditions</h6>
							<p>This Curriculum Vitae is provided in the strictest confidence, is subjected to the Terms
								and Conditions of WeLinkTalent Pte Ltd and contains personal data that must only be processed for the purpose
								for which it is submitted (in accordance with the PDPA). If you have not recently received a copy of our
								relevant Terms and Conditions, please ensure that you request a further copy before instructing our
								consultants to arrange any candidate interviews.</p>
						</div>
					</div>
				</div>
				<div class="col-md-12" style="text-align: center;">
					<button class="btn btn-primary btn-lg btnSubmit" [disabled]="referenceLength()" 
					        (click)="onSubmitReferenceButton()">Submit</button>
				</div>
			</div>
		</div>
	`,
	styles: [`
		.hLabel {
			text-align:center;
			font-size:small;
			color:darkgray;
			margin-bottom:5px;
		}
		h2 {
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
		.buttons {
			text-align: right;
			padding-right: 0%;
		}
		.pHeader{
			font-size: larger;
			color: gray;
			text-align: center;
		}
	`],
})

export class ApplicationReferenceFormPageComponent implements OnInit {
	jobApplication: JobApplication;
	@Input() job: Job;
	referenceList: Reference[] = [];
	user$: Observable<User>;
	route$: Observable<NavigationEnd>;
	referee: Reference;
	selectedJob: Job;

	constructor(private store: Store<fromRoot.State>, private userStore: Store<fromRoot.State>, private router: Router) {
		this.store.select(fromRoot.getApplicationForm).subscribe((data) => this.jobApplication = data);
		this.user$ = this.userStore.select(fromRoot.getUser);
		this.route$ = this.router.events.filter((event) => event instanceof NavigationEnd);
	}

	ngOnInit(): void {
		this.store.select(fromRoot.getSelectedJob).subscribe((job) => this.selectedJob = job);
	}

	referenceLength(): boolean {
		if (this.referenceList.length < 2) {
			return true;
		}
		return false;
	}

	addReferenceClickHandler(reference: Reference): void {
		this.referenceList.push(reference);
	}

	onSubmitReferenceButton(): void {
		this.store.dispatch(
			new application.ApplicationReferenceFormSubmitAction({
				references_info : this.referenceList,
				applicationId: this.jobApplication.id
			})
		);
	}

	removeReference(i: number): void {
		this.referenceList.splice(i, 1);
	}

	editReference(i: number): void {
		this.referee = this.referenceList[i];
		this.referenceList.splice(i, 1);
	}
}
