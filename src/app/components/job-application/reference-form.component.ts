import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import { Reference } from '../../models/reference.model';

@Component({
	selector: `app-reference-form`,
	template: `
		<form #Reference="ngForm">
			<div class="row" >
				<div class="col-md-6">
					<div class="form-group">
						<label for="firstName" class="labelWeight">First Name:* </label>
						<input type="text" class="form-control" id="firstName" name="firstName" [(ngModel)]="reference.firstName" required/>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label for="lastName" class="label-style">Last Name:* </label>
						<input type="text" class="form-control" id="lastName" name="lastName" [(ngModel)]="reference.lastName" required/>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label for="currentCompany" class="labelWeight">Current Company:* </label>
						<input type="text" class="form-control" id="currentCompany" name="currentCompany" [(ngModel)]="reference.company" required/>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label for="currentTitle" class="label-style">Current Title:* </label>
						<input type="text" class="form-control" id="currentTitle" name="currentTitle" [(ngModel)]="reference.title" required/>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label for="phone" class="labelWeight">Mobile Phone:* </label>
						<input type="text" class="form-control" id="phone" name="phone" [(ngModel)]="reference.phone" required/>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label for="email" class="label-style">Email:* </label>
						<input type="email" class="form-control" id="email" name="email" [(ngModel)]="reference.emailAddress" required/>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label for="relation" class="labelWeight">Professional relationship with the referee:* </label>
						<input type="text" class="form-control" id="relation" name="relation" [(ngModel)]="reference.relationship" required/>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label for="oldCompany" class="labelWeight">In which company, did you work together:* </label>
						<input type="text" class="form-control" id="oldCompany" name="oldCompany"
									 [(ngModel)]="reference.companyTogether" required/>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<label class="labelWeight">When did you work together?*</label>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<label for="dateWorked" class="fromLabel">From</label>
					<input type="month" class="form-control input-date-style" id="dateWorked" name="dateWorked"
								 [(ngModel)]="reference.startYearOfWorking" required/>					
				</div>
				<div class="col-md-6">
					<label for="dateWorked1" class="toLabel">To:</label>
					<input type="month" class="form-control input-2date-style" id="daseWorked1" name="dateWorked1"
								 [(ngModel)]="reference.endYearOfWorking" required/>
				</div>
			</div>
			<div class="row"style="padding-left: 15px;">
				<div class="form-group listStyle">
					<label for="canContact" class="canContactLabel">Can we contact this reference?* </label>
					<ul class="list-unstyled">
						<li *ngFor="let choice of choices">
							<label class="labelWeight">&emsp;{{ choice.value }}</label>
							<input type="radio" class="input-radio" value="{{choice.value}}" [(ngModel)]="reference.canContact"
										 [ngModelOptions]="{standalone: true}"/>
						</li>
					</ul>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12" style="text-align: right; margin-bottom: 1rem;">
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
		.fromLabel {
			margin-top: 7px;
			float: left;
			font-weight: bolder;
		}
		.toLabel {
			float: left;
			margin-top: 7px;
			font-weight: bolder;
		}
		.canContactLabel {
			margin-top: 1rem;
			font-weight: bolder;
		}
		.listStyle li {
			display: inline;
		}
	`],
})

export class ReferenceFormComponent implements OnChanges {
	reference: Reference = new Reference();
	@Input() modifiedReferee: Reference;
	@Output() addReferenceEmitter = new EventEmitter<Reference>();
	choices: Array<any> = [{id:0, value:'Yes'}, {id:1, value:'No'}];

	constructor() {	}

	ngOnChanges(): void {
		if (this.modifiedReferee) {
			this.reference = this.modifiedReferee;
		}
	}

	addReferenceButtonClick() {
		let referee = new Reference();
		Object.assign(referee, this.reference);
		this.addReferenceEmitter.emit(referee);
		this.reference.firstName = null;
		this.reference.lastName = null;
		this.reference.company = null;
		this.reference.title = null;
		this.reference.phone = null;
		this.reference.emailAddress = null;
		this.reference.relationship = null;
		this.reference.companyTogether = null;
		this.reference.startYearOfWorking = null;
		this.reference.endYearOfWorking = null;
		this.reference.canContact = null;
	}
}
