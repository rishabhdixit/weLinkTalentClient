import { Component, EventEmitter, Inject, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DOCUMENT } from '@angular/common';
import { Reference } from '../../models/reference.model';

@Component({
	selector: `app-reference-form`,
	template: `
		<form [formGroup]="refereeForm">
			<div class="row">
				<div class="col-md-12">
					<div class="row" *ngIf="!isRefereeFormValid">
						<br/>
						<div class="col-md-12">
							<div class="form-group">
								<p class="alert alert-danger form-control" autofocus>Please make sure all required fields are fill out!</p>
							</div>
						</div>
						<br/>
					</div>
					<div class="row">
						<div class="col-md-12">
							<h5 class="purple-color">Reference</h5>
						</div>
					</div>
					<div class="row">
						<div class="col-md-6">
							<label for="firstName" class="labelWeight">First Name:<i class="red-color"> * </i></label>
							<input type="text" class="form-control" id="firstName" name="firstName" formControlName="firstName" required/>
							<div *ngIf="refereeForm.get('firstName').touched && refereeForm.get('firstName').invalid"
							     class="alert alert-danger form-control">Please fill out this field!</div>
						</div>
						<div class="col-md-6">
							<label for="lastName" class="label-style">Last Name:<i class="red-color"> * </i></label>
							<input type="text" class="form-control" id="lastName" name="lastName" formControlName="lastName" required/>
							<div *ngIf="refereeForm.get('lastName').touched && refereeForm.get('lastName').invalid"
							     class="alert alert-danger form-control">Please fill out this field!</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label for="company" class="labelWeight">Current Company:<i class="red-color"> * </i></label>
								<input type="text" class="form-control" id="company" name="company" formControlName="company" required/>
								<div *ngIf="refereeForm.get('company').touched && refereeForm.get('company').invalid"
								     class="alert alert-danger form-control">Please fill out this field!</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label for="title" class="label-style">Current Title:<i class="red-color"> * </i></label>
								<input type="text" class="form-control" id="title" name="title" formControlName="title" required/>
								<div *ngIf="refereeForm.get('title').touched && refereeForm.get('title').invalid"
								     class="alert alert-danger form-control">Please fill out this field!</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label for="phone" class="labelWeight">Mobile Phone:<i class="red-color"> * </i></label>
								<input type="text" class="form-control" id="phone" name="phone" formControlName="phone" required/>
								<div *ngIf="refereeForm.get('phone').touched && refereeForm.get('phone').invalid"
								     class="alert alert-danger form-control">Please fill out this field!</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label for="emailAddress" class="label-style">Email Address:<i class="red-color"> * </i></label>
								<input type="email" class="form-control" id="emailAddress" name="emailAddress" formControlName="emailAddress" required/>
								<div *ngIf="refereeForm.get('emailAddress').touched && refereeForm.get('emailAddress').invalid"
								     class="alert alert-danger form-control">Please fill out this field!</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-6">
							<div class="form-group">
								<label for="relation" class="labelWeight">Professional relationship with the referee:<i class="red-color"> * </i></label>
								<input type="text" class="form-control" id="relation" name="relation" formControlName="relationship" required/>
								<div *ngIf="refereeForm.get('relationship').touched && refereeForm.get('relationship').invalid"
								     class="alert alert-danger form-control">Please fill out this field!</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="form-group">
								<label for="companyTogether" class="labelWeight">In which company, did you work together:<i class="red-color"> * </i></label>
								<input type="text" class="form-control" id="companyTogether" name="companyTogether"
								       formControlName="companyTogether" required/>
								<div *ngIf="refereeForm.get('companyTogether').touched && refereeForm.get('companyTogether').invalid"
								     class="alert alert-danger form-control">Please fill out this field!</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
							<label class="labelWeight">When did you work together?<i class="red-color"> * </i></label>
						</div>
					</div>
					<div class="row">
						<div class="col-md-6">
							<label for="startYearOfWorking">From:<i class="red-color"> * </i></label>
							<input type="month" class="form-control" id="startYearOfWorking" name="startYearOfWorking"
							       formControlName="startYearOfWorking" required/>
							<div *ngIf="refereeForm.get('startYearOfWorking').touched && refereeForm.get('startYearOfWorking').invalid"
							     class="alert alert-danger form-control">Please fill out this field!</div>
						</div>
						<div class="col-md-6">
							<label for="endYearOfWorking">To:<i class="red-color"> * </i></label>
							<input type="month" class="form-control" id="endYearOfWorking" name="endYearOfWorking"
							       formControlName="endYearOfWorking" required/>
							<div *ngIf="refereeForm.get('endYearOfWorking').touched && refereeForm.get('endYearOfWorking').invalid"
							     class="alert alert-danger form-control">Please fill out this field!</div>
						</div>
					</div>
					<br/>
					<div class="row">
						<div class="col-md-12 listStyle">
							<label for="canContact">Can we contact this reference?<i class="red-color"> * </i></label>
							<ul class="list-unstyled">
								<li *ngFor="let choice of choices">
									<label class="labelWeight">&emsp;{{ choice.value }}</label>
									<input type="radio" class="input-radio" value="{{choice.value}}" formControlName="canContact"/>
								</li>
							</ul>
							<div *ngIf="refereeForm.get('canContact').touched && refereeForm.get('canContact').invalid"
							     class="alert alert-danger form-control">Please fill out this field!</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12" style="text-align: right; margin-bottom: 1rem;">
							<button class="btn btn-primary" (click)="addReferenceButtonClick()">Add</button>
						</div>
					</div>
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
		.input-radio {
			border-radius: 0.25em;
			width: 1.7em;
			height: 1.7em;
		}
		.listStyle li {
			display: inline;
		}
	`],
})

export class ReferenceFormComponent implements OnInit, OnChanges {
	@Input() modifiedReferee: Reference;
	@Output() addReferenceEmitter = new EventEmitter<Reference>();
	choices: Array<any> = [
		{ id: 0, value: 'Yes' },
		{ id: 1, value: 'No' }
	];

	isRefereeFormValid: boolean = true;
	refereeForm: FormGroup;

	constructor(public fb: FormBuilder, @Inject(DOCUMENT) private document: Document) { }

	ngOnInit(): void {
		this.initRefereeForm();
	}

	ngOnChanges(): void {
		if (this.modifiedReferee) {
			this.fillUpRefereeForm();
		}
	}

	private initRefereeForm(): void {
		this.refereeForm = this.fb.group({
			firstName: new FormControl('', [Validators.required]),
			lastName: new FormControl('', [Validators.required]),
			company: new FormControl('', [Validators.required]),
			title: new FormControl('', [Validators.required]),
			phone: new FormControl('', [Validators.required]),
			emailAddress: new FormControl('', [Validators.required]),
			relationship: new FormControl('', [Validators.required]),
			companyTogether: new FormControl('', [Validators.required]),
			startYearOfWorking: new FormControl('', [Validators.required]),
			endYearOfWorking: new FormControl('', [Validators.required]),
			canContact: new FormControl('', [Validators.required])
		});
	}

	addReferenceButtonClick(): void {
		if (!this.refereeForm.invalid) {
			this.addReferenceEmitter.emit(this.refereeForm.value);
			this.refereeForm.reset();
		} else {
			this.document.body.scrollTop = 200;
			this.isRefereeFormValid = false;
			setTimeout(() => {
				this.isRefereeFormValid = true;
			}, 5000);
		}
	}

	private fillUpRefereeForm(): void {
		this.refereeForm.get('firstName').setValue(this.modifiedReferee.firstName);
		this.refereeForm.get('lastName').setValue(this.modifiedReferee.lastName);
		this.refereeForm.get('company').setValue(this.modifiedReferee.company);
		this.refereeForm.get('title').setValue(this.modifiedReferee.title);
		this.refereeForm.get('phone').setValue(this.modifiedReferee.phone);
		this.refereeForm.get('emailAddress').setValue(this.modifiedReferee.emailAddress);
		this.refereeForm.get('relationship').setValue(this.modifiedReferee.relationship);
		this.refereeForm.get('companyTogether').setValue(this.modifiedReferee.companyTogether);
		this.refereeForm.get('startYearOfWorking').setValue(this.modifiedReferee.startYearOfWorking);
		this.refereeForm.get('endYearOfWorking').setValue(this.modifiedReferee.endYearOfWorking);
		this.refereeForm.get('canContact').setValue(this.modifiedReferee.canContact);
	}
}
