import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Profile } from '../models/profile.model';
import { Job } from '../models/job.model';

@Component({
	selector: `app-profile-user-info`,
	template: `
		<form #profileForm="ngForm">
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label for="birthDate" class="labelWeight">Date of Birth </label>
						<input type="Date" class="form-control" id="birthDate" name="birthDate" [(ngModel)]="profile.birthDate"/>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label for="maritalStatus" class="labelWeight">Marital Status </label>
						<select type="text" class="form-control status-height" id="maritalStatus" name="maritalStatus" [(ngModel)]="profile.maritalStatus">
							<option>Single</option>
							<option>Married</option>
							<option>Divorce</option>
							<option>Separated</option>
							<option>Widowed</option>
						</select>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label for="email" class="labelWeight">Email Address </label>
						<input type="text" class="form-control" id="email" name="email" [(ngModel)]="profile.emailAddress"/>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label for="mobile" class="labelWeight">Mobile </label>
						<input type="tel" class="form-control" id="mobile" name="mobilePhone" [(ngModel)]="profile.mobile"/>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label for="NRIC" class="labelWeight">NRIC / FIN Number </label>
						<input type="text" class="form-control" id="NRIC" name="NRIC" [(ngModel)]="profile.NRIC"/>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label for="numberOfChildren" class="labelWeight">Number of Children </label>
						<input type="number" class="form-control" id="numberOfChildren" name="numberOfChildren" [(ngModel)]="profile.children"/>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label for="singaporeVisa" class="labelWeight">Visa for Singapore </label>
						<select type="text" class="form-control" id="singaporeVisa" name="singaporeVisa" [(ngModel)]="profile.singaporeVisa">
							<option>Yes, I have one.</option>
							<option>No, I don't have one.</option>
						</select>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label for="validity" class="labelWeight">End of validity </label>
						<input type="Date" class="form-control" id="validity" name="validity" [(ngModel)]="profile.validityEnd"/>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label for="noticePeriod" class="labelWeight">Notice Period </label>
						<input type="Date" class="form-control" id="noticePeriod" name="noticePeriod" [(ngModel)]="profile.noticePeriod"/>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group listStyle">
						<label class="labelWeight">Negotiable?</label>
						<ul class="list-unstyled">
							<li *ngFor="let negotiate of negotiable">
								<label class="labelWeight">&emsp;{{ negotiate.value }}</label>
								<input type="radio" class="input-radio" value="{{ negotiate.value }}" [(ngModel)]="profile.negotiable"
											 name="negotiable" [ngModelOptions]="{standalone: true}"/>
							</li>
						</ul>
					</div>
				</div>
			</div><br>
			<div class="row">
					<h3>Current Salary</h3>
			</div>
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label for="basePerMonth" class="labelWeight">Base per month: SGD</label>
						<div class="input-group">
							<span class="input-group-addon">$</span>
							<input type="number" class="form-control currency" id="basePerMonth" [(ngModel)]="profile.basePerMonth" 
										 [ngModelOptions]="{standalone: true}" required="required"/>
						</div>
					</div>
				</div>
				<div class="col-md-6 listStyle">
					<div class="form-group">
						<label class="labelWeight">On</label>
						<ul class="list-unstyled">
							<li *ngFor="let bonusReceive of bonusReceivable">
								<label class="labelWeight">&emsp;{{ bonusReceive.value }}</label>
								<input type="radio" class="input-radio" value="{{ bonusReceive.value }}" [(ngModel)]="profile.bonusReceived"
											 name="bonusReceivable" [ngModelOptions]="{standalone: true}"/>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label for="bonus" class="labelWeight">Bonus: SGD</label>
						<div class="input-group">
							<span class="input-group-addon">$</span>
							<input type="number" class="form-control currency" id="bonus" [(ngModel)]="profile.bonus" [ngModelOptions]="{standalone: true}"
										 required="required"/>
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label for="calculation" class="labelWeight">How is it calculated?</label>
						<input type="text" class="form-control" id="calculation" name="calculation" [(ngModel)]="profile.calculation"/>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label for="allowance" class="labelWeight">Allowances: SGD</label>
						<div class="input-group">
							<span class="input-group-addon">$</span>
							<input type="number" class="form-control currency" id="allowance" [(ngModel)]="profile.allowance" 
										 [ngModelOptions]="{standalone: true}" required="required"/>
						</div>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label for="description" class="labelWeight">Please describe</label>
						<input type="text" class="form-control" id="description" name="description" [(ngModel)]="profile.description"/>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-6">
					<div class="form-group">
						<label for="incentives" class="labelWeight">Any long term incentives</label>
						<input type="text" class="form-control" id="incentives" name="incentives" [(ngModel)]="profile.incentives"/>
					</div>
				</div>
				<div class="col-md-6">
					<div class="form-group">
						<label for="vestingPeriod" class="labelWeight">Vesting Period</label>
						<input type="date" class="form-control" id="vestingPeriod" name="vestingPeriod" [(ngModel)]="profile.vestingPeriod"/>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12" style="text-align: center;">
					<button class="btn btn-primary btn-lg" style="margin-top: 10px;" (click)="onConfirmButtonClicked()">Confirm</button>
				</div>
			</div>
		</form>
	`,
	styles: [`
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
		input.currency {
			text-align: right;
			padding-right: 15px;
		}
		.listStyle li {
			display: inline;
		}
		input.currency {
			text-align: right;
			padding-right: 15px;
		}
	`],
})

export class ProfileUserInfoComponent {
	@Input() job: Job;
	@Input() profile: Profile = new Profile();
	@Output() saveProfileUserInfoEventEmitter = new EventEmitter<Profile>();
	negotiable: Array<any> = [{id:0, value: 'Yes'}, {id:1, value: 'No'}];
	bonusReceivable: Array<any> = [{id: 0, value: '12 month'}, {id:1, value: '13 month'}];

	constructor() {	}

}
