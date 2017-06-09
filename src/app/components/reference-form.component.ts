import {Component, EventEmitter, Input, Output} from '@angular/core';
import * as fromRoot from '../reducers';
import { Application } from '../models/job-application.model';
import { Reference } from '../models/reference.model';
import {Job} from '../models/job.model';
import {Store} from '@ngrx/store';
import * as application from '../actions/job-application.action';


@Component({
	selector: `app-reference-form`,
	template: `
		<form #Reference = "ngForm">
			<div class="col-md-6" style="margin-left: -15px;">
				<div class="form-group">
					<label for="fname" class="labelWeight">First Name:* </label>
					<input type="text" class="form-control" id="fname" name="fname" [(ngModel)]="reference.fname"/>
				</div>
				<div class="form-group">
					<label for="currentCompany" class="labelWeight">Current Company:* </label>
					<input type="text" class="form-control" id="currentCompany" name="currentCompany" [(ngModel)]="reference.company"/>
				</div>
				<div class="form-group">
					<label for="phone" class="labelWeight">Mobile Phone:* </label>
					<input type="text" class="form-control" id="phone" name="phone" [(ngModel)]="reference.phone"/>
				</div>
			</div>
			<div class="col-md-6 div-style">
				<div class="form-group">
					<label for="lname" class="label-style">Last Name:* </label>
					<input type="text" class="form-control" id="lname" name="lname" [(ngModel)]="reference.lname"/>
				</div>
				<div class="form-group">
					<label for="currentTitle" class="label-style">Current Title:* </label>
					<input type="text" class="form-control" id="currentTitle" name="currentTitle" [(ngModel)]="reference.title"/>
				</div>
				<div class="form-group">
					<label for="email" class="label-style">Email:* </label>
					<input type="email" class="form-control" id="email" name="email" [(ngModel)]="reference.email"/>
				</div>
			</div>
			<div class="col-md-6" style="margin-left: -15px;">
				<div class="form-group">
					<label for="relation" class="labelWeight">Professional relationship with the referee:* </label>
					<input type="text" class="form-control" id="relation" name="relation" [(ngModel)]="reference.relationship"/>
				</div>
			</div>
			<div class="col-md-6 company-div">
				<div class="form-group">
					<label for="oldCompany" class="labelWeight">In which company, did you work together:* </label>
					<input type="text" class="form-control" id="oldCompany" name="oldCompany"
								 [(ngModel)]="reference.companyTogether"/>
				</div>
			</div>
			<div class="form-group">
				<label for="dateWorked" class="labelWeight">When did you work together? <p>From&emsp;</label>
				<input type="month" class="form-control input-date-style" id="dateWorked" name="dateWorked"
							 [(ngModel)]="reference.startYearOfWorking"/>
				<label for="dateWorked1" class="to-style">&emsp;To:&emsp;</label>
				<input type="month" class="form-control input-2date-style" id="dateWorked1" name="dateWorked1"
							 [(ngModel)]="reference.endYearOfWorking"/>
			</div>
			<div class="form-group">
				<label for="canContact" class="labelWeight">Can we contact this reference?* </label>
				&emsp;<p class="yes-label-style">&emsp;Yes&emsp;</p>
				<input type="checkbox" class="input-box" id="canContact" name="canContact"/>
				&emsp;<p class="no-label-style">&emsp;No&emsp;</p>
				<input type="checkbox" class="input-box1" id="canContact" name="canContact"/>
				<div style="float: right; margin-top: -15px;">
					<button class="btn btn-primary" (click)="addReferenceButtonClick()">Add</button>
				</div>
			</div>
		</form>
	`,
	styles: [`
	.labelWeight {
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
	.div-style {
		float: right;
		margin-top: -273px;
		padding-right: 0;
	}
	.label-style {
		font-weight: bolder;
		margin-top: 5px;
	}
	.input-date-style {
		width: 260px;
		float: right;
		margin-right: 340px;
	}
	.to-style {
		float: right;
		margin-right: -325px;
		margin-top: 5px;
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
		.company-div {
			margin-top: -91px;
			float: right;
			padding-right: 0;
		}
	`],
})

export class ReferenceFormComponent {
	reference: Reference = new Reference();
	@Output() addReferenceEmitter = new EventEmitter<Reference>();

	constructor(private store: Store<fromRoot.State>) {	}

	addReferenceButtonClick() {
		let referee = new Reference();

		referee.fname = this.reference.fname;
		referee.lname = this.reference.lname;
		referee.company = this.reference.company;
		referee.title = this.reference.title;
		referee.phone = this.reference.phone;
		referee.email = this.reference.email;
		referee.relationship = this.reference.relationship;
		referee.startYearOfWorking = this.reference.startYearOfWorking;
		referee.endYearOfWorking = this.reference.endYearOfWorking;
		referee.companyTogether = this.reference.companyTogether;

		this.addReferenceEmitter.emit(referee);
	}

}
