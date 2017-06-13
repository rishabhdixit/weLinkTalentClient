import {Component, EventEmitter, Output} from '@angular/core';
import * as fromRoot from '../reducers';
import { Reference } from '../models/reference.model';
import {Store} from '@ngrx/store';


@Component({
	selector: `app-reference-form`,
	template: `
		<form #Reference="ngForm">
			<div class="col-md-6" style="margin-left: -15px;">
				<div class="form-group">
					<label for="fname" class="labelWeight">First Name:* </label>
					<input type="text" class="form-control" id="fname" name="fname" [(ngModel)]="reference.fname" required/>
				</div>
				<div class="form-group">
					<label for="currentCompany" class="labelWeight">Current Company:* </label>
					<input type="text" class="form-control" id="currentCompany" name="currentCompany" [(ngModel)]="reference.company" required/>
				</div>
				<div class="form-group">
					<label for="phone" class="labelWeight">Mobile Phone:* </label>
					<input type="text" class="form-control" id="phone" name="phone" [(ngModel)]="reference.phone" required/>
				</div>
			</div>
			<div class="col-md-6 div-style">
				<div class="form-group">
					<label for="lname" class="label-style">Last Name:* </label>
					<input type="text" class="form-control" id="lname" name="lname" [(ngModel)]="reference.lname" required/>
				</div>
				<div class="form-group">
					<label for="currentTitle" class="label-style">Current Title:* </label>
					<input type="text" class="form-control" id="currentTitle" name="currentTitle" [(ngModel)]="reference.title" required/>
				</div>
				<div class="form-group">
					<label for="email" class="label-style">Email:* </label>
					<input type="email" class="form-control" id="email" name="email" [(ngModel)]="reference.email" required/>
				</div>
			</div>
			<div class="col-md-6" style="margin-left: -15px;">
				<div class="form-group">
					<label for="relation" class="labelWeight">Professional relationship with the referee:* </label>
					<input type="text" class="form-control" id="relation" name="relation" [(ngModel)]="reference.relationship" required/>
				</div>
			</div>
			<div class="col-md-6 company-div">
				<div class="form-group">
					<label for="oldCompany" class="labelWeight">In which company, did you work together:* </label>
					<input type="text" class="form-control" id="oldCompany" name="oldCompany"
								 [(ngModel)]="reference.companyTogether" required/>
				</div>
			</div>
			<div class="form-group col-md-12">
				<label class="labelWeight">When did you work together?*</label><br>
				<label for="dateWorked" class="fromLabel">From</label>
				<input type="month" class="form-control input-date-style" id="dateWorked" name="dateWorked"
							 [(ngModel)]="reference.startYearOfWorking" required/>
				<label for="dateWorked1" class="toLabel">To:</label>
				<input type="month" class="form-control input-2date-style" id="daseWorked1" name="dateWorked1"
							 [(ngModel)]="reference.endYearOfWorking" required/>
			</div>
			<div class="form-group col-md12 divRadioStyle">
				<label for="canContact" class="canContactLabel">Can we contact this reference?* </label>
				<div *ngFor="let choice of choices">
					<p>
						<label class="labelWeight">{{ choice.value }}</label>
						<input type="radio" class="input-radio" value="{{choice.value}}" [(ngModel)]="reference.canContact" 
									 [ngModelOptions]="{standalone: true}"/>
					</p>
				</div>
			</div>
			<div style="float: right;">
				<button class="btn btn-primary add-btn" (click)="addReferenceButtonClick()">Add</button>
			</div>
		</form>
	`,
	styles: [`
		.labelWeight {
			font-weight: bolder;
			margin-top: 5px;
		}
		.div-style {
			float: right;
			margin-top: -273px;
		}
		.label-style {
			font-weight: bolder;
			margin-top: 5px;
		}	
		.input-date-style {
			float: left;
			width: 380px;
			margin-left: 18px;
		}
		.input-2date-style {
			float: right;
			margin-left: 500px;
			margin-bottom: 5px;
			width: 380px;
			margin-top: -42px;
		}
		.input-radio {
			border-radius: 0.25em;
			width: 1.7em;
			height: 1.7em;
		}  
		.company-div {
			margin-top: -91px;
			float: right;
		}
		.fromLabel {
			margin-top: 7px;
			float: left;
			font-weight: bolder;
		}
		.toLabel {
			float: left;
			margin-top: 7px;
			font-weight: bolder;
			margin-left: 44px;
		}
		.canContactLabel {
			float: left;
			margin-top: 1rem;
			font-weight: bolder;
		}
		.divRadioStyle {
			float: left;
		}
		.add-btn {
			margin-bottom: -280px;
		}
	`],
})

export class ReferenceFormComponent {
	reference: Reference = new Reference();
	@Output() addReferenceEmitter = new EventEmitter<Reference>();
	choices: Array<any> = [{id:0, value:'Yes'}, {id:1, value:'No'}];

	constructor() {	}

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
		referee.canContact = this.reference.canContact;

		this.addReferenceEmitter.emit(referee);
	}

}
