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
	selector: 'app-application-page-view2',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div class="container">
			<div class="container-fluid">
				<div class="row">
					<div class="col-md-12">
						<h2>Talent Application Form</h2>
						<p class="hlabel">This application is confidential. Please contact us at talent@welinktalent.com for any questions
							1regarding this form.</p>
						<p style="color: #4D308E; font-size: larger;">Please provide two references:</p>
					</div>
					<form #firstReference = "ngForm">
						<p>Reference 1</p>
						<div class="col-md-6" style="margin-left: -15px;">
							<div class="form-group">
								<label for="fname" class="labelweight">First Name: </label>
								<input class="form-control input-style" id="fname" name="fname" #fname1 />
							</div>
							<div class="form-group">
								<label for="currentCompany" class="labelweight">Current Company: </label>
								<input class="form-control input-style" id="currentCompany" name="currentCompany" #currentCompany1 />
							</div>
							<div class="form-group">
								<label for="phone" class="labelweight">Mobile Phone: </label>
								<input class="form-control input-style" id="phone" name="phone" #phone1 />
							</div>
						</div>
						<div class="col-md-6 div-style">
							<div class="form-group">
								<label for="lname" class="label-style">Last Name: </label>
								<input class="form-control form-input-style" id="lname" name="lname" #lname1 />
							</div>
							<div class="form-group">
								<label for="currentTitle" class="label-style">Current Title: </label>
								<input class="form-control form-input-style" id="currentTitle" name="currentTitle" #currentTitle1 />
							</div>
							<div class="form-group">
								<label for="email" class="label-style">Email:</label>
								<input class="form-control form-input-style" id="email" name="email" #email1 />
							</div>
						</div>
						<div class="form-group">
							<label for="relation" class="labelweight">Professional relationship with the referee:</label>
							<input class="form-control input-relation" id="relation" name="relation" #relation1 />
						</div>
						<div class="form-group">
							<label for="dateWorked" class="labelweight">When did you work together? &emsp;From&emsp;</label>
							<input type="date" class="form-control input-date-style" id="dateWorked" name="dateWorked" #dateWorked1 />
							<label for="dateWorked1" class="to-style">&emsp;To:&emsp;</label>
							<input type="date" class="form-control input-2date-style" id="dateWorked1" name="dateWorked1" #dateWorked11 />
						</div>
						<div class="form-group">
							<label for="oldCompany" class="labelweight">In which company, did you work together: </label>
							<input type="text" class="form-control input-company" id="oldCompany" name="oldCompany" #oldCompany1 />
						</div>
						<div class="form-group">
							<label for="canContact" class="labelweight">Can we contact this reference?</label>
							&emsp;<p class="yes-label-style">&emsp;Yes&emsp;</p>
							<input type="radio" value="yes" class="input-box" id="canContact" name="canContact" #canContact1 />
							&emsp;<p class="no-label-style">&emsp;No&emsp;</p>
							<input type="radio" value="no" class="input-box1" id="canContact" name="canContact" #canContact1 />
						</div>
					</form>
					<p>Reference 2</p>
					<form #SecondReference = "ngForm">
						<div class="col-md-6" style="margin-left: -15px;">
							<div class="form-group">
								<label for="fname" class="labelweight">First Name: </label>
								<input class="form-control input-style" id="fname" name="fname" #fname2 />
							</div>
							<div class="form-group">
								<label for="currentCompany" class="labelweight">Current Company: </label>
								<input class="form-control input-style" id="currentCompany" name="currentCompany" #currentCompany2 />
							</div>
							<div class="form-group">
								<label for="phone" class="labelweight">Mobile Phone: </label>
								<input class="form-control input-style" id="phone" name="phone" #phone2 />
							</div>
						</div>
						<div class="col-md-6 div-style">
							<div class="form-group">
								<label for="lname" class="label-style">Last Name: </label>
								<input class="form-control form-input-style" id="lname" name="lname" #lname2 />
							</div>
							<div class="form-group">
								<label for="currentTitle" class="label-style">Current Title: </label>
								<input class="form-control form-input-style" id="currentTitle" name="currentTitle" #currentTitle2 />
							</div>
							<div class="form-group">
								<label for="email" class="label-style">Email:</label>
								<input class="form-control form-input-style" id="email" name="email" #email2 />
							</div>
						</div>
						<div class="form-group">
							<label for="relation" class="labelweight">Professional relationship with the referee:</label>
							<input class="form-control input-relation" id="relation" name="relation" #relation2 />
						</div>
						<div class="form-group">
							<label for="dateWorked" class="labelweight">When did you work together? &emsp;From&emsp;</label>
							<input type="date" class="form-control input-date-style" id="dateWorked" name="dateWorked" #dateWorked2 />
							<label for="dateWorked1" class="to-style">&emsp;To:&emsp;</label>
							<input type="date" class="form-control input-2date-style" id="dateWorked1" name="dateWorked1" #dateWorked12 />
						</div>
						<div class="form-group">
							<label for="oldCompany" class="labelweight">In which company, did you work together: </label>
							<input class="form-control input-company" id="oldCompany" name="oldCompany" #oldCompany2 />
						</div>
						<div class="form-group">
							<label for="canContact" class="labelweight">Can we contact this reference?</label>
							&emsp;<p class="yes-label-style">&emsp;Yes&emsp;</p>
							<input type="radio" value="yes" class="input-box" id="canContact" name="canContact" #canContact2 />
							&emsp;<p class="no-label-style">&emsp;No&emsp;</p>
							<input type="radio" value="no" class="input-box1" id="canContact" name="canContact" #canContact2 />
						</div>
					</form>
					<!--<div class="col-md-12" *ngFor="let i of range(referee)">-->
						<!--<p class="refereeStyle">Reference{{i}}</p>-->
						<!--<app-reference-form></app-reference-form>-->
					<!--</div>-->
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
					
						
							
								<button type="button" class="btn btn-primary btn-lg" (click)="onSaveReferee(fname1.value, lname1.value, 
								currentCompany1.value, currentTitle1.value, phone1.value, email1.value, relation1.value, dateWorked1.value,
								dateWorked11.value, oldCompany1.value, canContact1.value, fname2.value, lname2.value, currentCompany2.value,
								currentTitle2.value, phone2.value, email2.value, relation2.value, dateWorked2.value, dateWorked12.value, 
								oldCompany2.value, canContact2.value)">Submit</button>
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
			padding-left: 0;
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
		.labelweight {
			font-weight: bolder;
			margin-top: 5px;
		}
		.input-box {
			border-radius: 0.25em;
			width: 1.7em;
			height: 1.7em;
			float: right;
			margin-top: -40px;
			margin-right: 570px;
		}
		.input-style {
			width: 280px;
			float: right;
			margin-bottom: 5px;
			margin-right: -15px;
		}
		.div-style {
			float: right;
			margin-top: -158px;
			padding-right: 0;
		}
		.form-input-style {
			width: 280px;
			float: right;
			margin-bottom: 5px;
		}
		.label-style {
			margin-left: 40px;
			font-weight: bolder;
			margin-top: 5px;
		}
		.input-relation {
			width: 570px;
			float: right;
			margin-top: -36px;
		}
		.input-date-style {
			width: 260px;
			float: right;
			margin-right: 340px;
		}
		.to-style {
			float: right;
			margin-right: -325px;
			margin-top: 7px;
			font-weight: bolder;
		}
		.input-2date-style {
			width: 260px;
			float: right;
			margin-left: 500px;
			margin-top: -42px;
			margin-bottom: 5px;
		}
		.yes-label-style {
			margin-left: 250px;
			margin-top: -31px;
			font-weight: bolder;
		}
		.no-label-style {
			float: right;
			margin-top: -40px;
			margin-right: 505px;
			font-weight: bolder;
		}
		.input-box1 {
			border-radius: 0.25em;
			width: 1.7em;
			height: 1.7em;
			float: right;
			margin-top: -40px;
			margin-right: 480px;
		}
		.input-company {
			width: 570px;
			float: right;
		}
	`],
})

export class ApplicationPageView2Component {
	application: Application;

	constructor(private store: Store<fromRoot.State>) {
		this.store.select(fromRoot.getApplicationForm).subscribe((data) => this.application = data);
	}

	// TODO - to be updated
	onSaveReferee(fName: string, lName: string, recentCompany: string, title: string, phone: string, email: string, relationship: string,
								startYear: Date, endYear: Date, companyTogether: string, canContact: any, fName1: string, lName1: string, recentCompany1: string,
								title1: string, phone1: string, email1: string, relationship1: string, startYear1: Date, endYear1: Date,
								companyTogether1: string, canContact1: any) {

		let references: Reference[] = [];
		let referee1: Reference = new Reference();
		let referee2: Reference = new Reference();

		referee1.fname = fName;
		referee1.lname = lName;
		referee1.company = recentCompany;
		referee1.title = title;
		referee1.phone = phone;
		referee1.email = email;
		referee1.relationship = relationship;
		referee1.startYearOfWorking = startYear;
		referee1.endYearOfWorking = endYear;
		referee1.companyTogether = companyTogether;
		referee1.canContact = canContact;
		referee2.fname = fName1;
		referee2.lname = lName1;
		referee2.company = recentCompany1;
		referee2.title = title1;
		referee2.phone = phone1;
		referee2.email = email1;
		referee2.relationship = relationship1;
		referee2.startYearOfWorking = startYear1;
		referee2.endYearOfWorking = endYear1;
		referee2.companyTogether = companyTogether1;
		referee2.canContact = canContact1;

		references.push(referee1, referee2);
		console.log(references);

		this.store.dispatch(new application.ApplicationReferenceFormSubmitAction({references_info : references ,
			applicationId: this.application.id}));
	}
}
