import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Profile } from '../models/profile.model';
import { Job } from '../models/job.model';

@Component({
	selector: `app-profile-user-info`,
	template: `
		<form #profileForm="ngForm">
			<div class="col-md-6" style="padding-left: 0;">
				<div class="form-group">
					<label for="birthDate" class="labelWeight">Date of Birth </label>
					<input type="Date" class="form-control" id="birthDate" name="birthDate" [(ngModel)]="profile.birthDate"/>
				</div>
				<div class="form-group">
					<label for="email" class="labelWeight">Email Address </label>
					<input type="text" class="form-control" id="email" name="email" [(ngModel)]="profile.emailAddress"/>
				</div>
				<div class="form-group">
					<label for="NRIC" class="labelWeight">NRIC / FIN Number </label>
					<input type="number" class="form-control" id="NRIC" name="NRIC" [(ngModel)]="profile.NRIC"/>
				</div>
				<!--Dropdown-->
				<div class="form-group">
					<label for="singaporeVisa" class="labelWeight">Visa for Singapore </label>
					<input type="text" class="form-control" id="singaporeVisa" name="singaporeVisa" [(ngModel)]="profile.singaporeVisa"/>
				</div>
				<div class="form-group">
					<label for="noticePeriod" class="labelWeight">Notice Period </label>
					<input type="Date" class="form-control" id="noticePeriod" name="noticePeriod" [(ngModel)]="profile.noticePeriod"/>
				</div>
			</div>
			<div class="col-md-6 div-style">
				<!--Dropdown -->
				<div class="form-group">
					<label for="maritalStatus" class="labelWeight">Marital Status </label>
					<input type="text" class="form-control status-height" id="maritalStatus" name="maritalStatus" [(ngModel)]="profile.maritalStatus"/>
				</div>
				<div class="form-group">
					<label for="mobile" class="labelWeight">Mobile </label>
					<input type="tel" class="form-control" id="mobile" name="mobilePhone" [(ngModel)]="profile.mobile"/>
				</div>
				<div class="form-group">
					<label for="numberOfChildren" class="labelWeight">Number of Children </label>
					<input type="number" class="form-control" id="numberOfChildren" name="numberOfChildren" [(ngModel)]="profile.children"/>
				</div>
				<div class="form-group">
					<label for="validity" class="labelWeight">End of validity </label>
					<input type="Date" class="form-control" id="validity" name="validity" [(ngModel)]="profile.validityEnd"/>
				</div>
				<div class="form-group">
					<label class="labelWeight">Negotiable?</label>
						<ul class="list-unstyled list-inline">
							<li *ngFor="let negotiate of negotiable">
								<label class="labelWeight">{{ negotiate.value }}</label>
								<input type="radio" class="input-radio" value="{{ negotiate.value }}" [(ngModel)]="profile.negotiable"
											 [ngModelOptions]="{standalone: true}"/>
							</li>
						</ul>
				</div>
			</div><br><br>
			<div>
				<h3>Current Salary</h3>
			</div>
			<div class="col-md-6" style="padding-left: 0;">
				<div class="form-group">
					<label for="basePerMonth" class="labelWeight">Base per month: SGD</label>
					<input type="number" class="form-control" id="basePerMonth" name="basePerMonth" [(ngModel)]="profile.basePerMonth"/>
				</div>
				<div class="form-group">
					<label for="bonus" class="labelWeight">Bonus: SGD</label>
					<input type="number" class="form-control" id="bonus" name="bonus" [(ngModel)]="profile.bonus"/>
				</div>
				<div class="form-group">
					<label for="allowance" class="labelWeight">Allowances: SGD</label>
					<input type="number" class="form-control" id="allowance" name="allowance" [(ngModel)]="profile.allowance"/>
				</div>
				<div class="form-group">
					<label for="incentives" class="labelWeight">Any long term incentives</label>
					<input type="text" class="form-control" id="incentives" name="incentives" [(ngModel)]="profile.incentives"/>
				</div>
			</div>
			<div class="col-md-6 div2-style">
				<div class="form-group">
					<label class="labelWeight">on</label>
					<div *ngFor="let bonusReceive of bonusReceivable">
						<ul class="list-unstyled list-inline">
							<li>
								<label class="labelWeight">{{ bonusReceive.value }}</label>
								<input type="radio" class="input-radio" value="{{ bonusReceive.value }}" [(ngModel)]="profile.bonusRecieved"
											 [ngModelOptions]="{standalone: true}"/>
							</li>
						</ul>
					</div>
				</div>
				<div class="form-group">
					<label for="calculation" class="labelWeight">How is it calculated?</label>
					<input type="text" class="form-control" id="calculation" name="calculation" [(ngModel)]="profile.calculation"/>
				</div>
				<div class="form-group">
					<label for="description" class="labelWeight">Please describe</label>
					<input type="text" class="form-control" id="description" name="description" [(ngModel)]="profile.description"/>
				</div>
				<div class="form-group">
					<label for="vestingPeriod" class="labelWeight">Vesting Period</label>
					<input type="date" class="form-control" id="vestingPeriod" name="vestingPeriod" [(ngModel)]="profile.vestingPeriod"/>
				</div>
			</div>
			<div style="text-align: center; margin-top: 35px;">
				<button class="btn btn-primary btn-lg" style="margin-top: 10px;" (click)="onConfirmButtonClicked()">Confirm</button>
			</div>
		</form>
	`,
	styles: [`
		.div-style {
			float: right;
			margin-top: -439px;
			padding-right: 0;
		}
		.labelWeight {
			font-weight: bolder;
		}
		.status-height {
			height: 43px;
		}
		.input-radio {
			border-radius: 0.25em;
			width: 1.7em;
			height: 1.7em;
		}
		.div2-style {
			float: right;
			margin-top: -407px;
		}
	`],
})

export class ProfileUserInfoComponent {
	// TODO - Implement 2 way binding.
	@Input() job: Job;
	@Input() profile: Profile = new Profile();
	@Output() saveProfileUserInfoEventEmitter = new EventEmitter<Profile>();
	negotiable: Array<any> = [{id:0, value: 'Yes'}, {id:1, value: 'No'}];
	bonusReceivable: Array<any> = [{id: 0, value: '12 month'}, {id:1, value: '13 month'}];

	constructor() {	}

	onConfirmButtonClicked() {

		let profileSave = new Profile();

		profileSave.birthDate = this.profile.birthDate;
		profileSave.NRIC = this.profile.NRIC;
		profileSave.email = this.profile.email;
		profileSave.singaporeVisa = this.profile.singaporeVisa;
		profileSave.noticePeriod = this.profile.noticePeriod;
		profileSave.maritalStatus = this.profile.maritalStatus;
		profileSave.mobile = this.profile.mobile;
		profileSave.children = this.profile.children;
		profileSave.validityEnd = this.profile.validityEnd;
		profileSave.negotiable = this.profile.negotiable;
		profileSave.basePerMonth = this.profile.basePerMonth;
		profileSave.bonus = this.profile.bonus;
		profileSave.allowance = this.profile.allowance;
		profileSave.incentives = this.profile.incentives;
		profileSave.bonusRecieved = this.profile.bonusRecieved;
		profileSave.calculation = this.profile.calculation;
		profileSave.description = this.profile.description;
		profileSave.vestingPeriod = this.profile.vestingPeriod;

		console.log(profileSave);

		this.saveProfileUserInfoEventEmitter.emit(profileSave);
	}
}
