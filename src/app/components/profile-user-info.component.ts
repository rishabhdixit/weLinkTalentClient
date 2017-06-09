import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Profile } from '../models/profile.model';
import { Store } from '@ngrx/store';
import *as fromRoot from '../reducers';
import * as profileAction from '../actions/profile.action';
import { Job } from '../models/job.model';

@Component({
	selector: `app-profile-user-info`,
	template: `
		<div class="container">
			<div class="container-fluid">
				<div class="row col-md-12">
					<div class="col-md-6 div1-style">
						<form role="form" class="form-inline">
							<div class="form-group">
								<label for="dateBirth" class="labelWeight">Date of Birth: </label>
								<input type="date" class="form-control formSpace" id="dateBirth" name="birthDate" [(ngModel)]="profile.birthDate"
											 value="{{ profile?.birthDate }}" style="margin-left: 68px; width: 221px;"/>
							</div>
							<div class="form-group">
								<label for="email" class="labelWeight">Email:</label>
								<input type="email" class="form-control formSpace" id="email" name="email" [(ngModel)]="profile.email"
											 value="{{ profile?.email }}" style="margin-left:125px;"/>
							</div>
							<div class="form-group">
								<label for="FINNumber" class="labelWeight">NRIC / FIN Number: </label>
								<input type="number" class="form-control formSpace" id="FINNumber" name="FINNumber" [(ngModel)]="profile.NRIC"
											 value="{{ profile?.NRIC }}" required style="margin-left: 19px;"/>
							</div>
							<div class="form-group">
								<label for="SingaporeVisa" class="labelWeight">Visa for Singapore: </label>
								<select class="form-control dropdownStyle" id="SingaporeVisa" name="singaporeVisa" [(ngModel)]="profile.singaporeVisa" 
												value="{{ profile?.singaporeVisa }}">
									<option>Yes, I have</option>
									<option>No, I don't have</option>
								</select>
							</div>
							<div class="form-group">
								<label for="noticePeriod" class="labelWeight">Notice Period: </label>
								<input type="date" class="form-control" id="noticePeriod" name="periodNotice" [(ngModel)]="profile.noticePeriod"
											 value="{{ profile?.noticePeriod }}" style="margin-left: 63px; width: 222px;"/>
							</div>
						</form>
					</div>
					<div class="col-md-6 div2-style">
						<form role="form" class="form-inline">
							<div class="form-group">
								<label for="maritalStatus" class="labelWeight">Marital Status: </label>
								<select class="form-control formSpace marital" id="maritalStatus" name="status" [(ngModel)]="profile.maritalStatus" 
												value="{{ profile?.maritalStatus }}">
									<option>Single</option>
									<option>Married</option>
									<option>Divorce</option>
									<option>Separated</option>
									<option>Widowed</option>
								</select>
							</div>
							<div class="form-group">
								<label for="mobileNumber" class="labelWeight">Mobile:  </label>
								<input type="text" class="form-control formSpace" id="mobileNumber" name="mobile" [(ngModel)]="profile.mobile"
											 value="{{ profile?.mobile }}" style="margin-left: 153px;"/>
								<!--<ReactTelephoneInput defaultCountry="in" flagsImagePath="/path/to/images/flags.png"-->
									<!--onChange={handleInputChange} onBlur={handleInputBlur} />-->
							</div>
							<div class="form-group">
								<label for="numberOfChildren" class="labelWeight">Number of Children: </label>
								<select class="form-control formSpace totalChildren" id="numberOfChildren" name="children" [(ngModel)]="profile.children" 
												value="{{ profile?.children}}">
									<option>0</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
									<option>6</option>
									<option>7</option>
									<option>8</option>
									<option>9</option>
									<option>10</option>
									<option>11</option>
									<option>12</option>
									<option>More than 12</option>
								</select>
							</div>
							<div class="form-group">
								<label for="validityEnd" class="labelWeight">End of validity: </label>
								<input type="date" class="form-control formSpace" id="validityEnd" name="validity" [(ngModel)]="profile.validityEnd"
											 value="{{ profile?.validityEnd }}" style="margin-left:97px; width:222px;"/>
							</div>
							<div class="form-group">
								<label for="canNegotiate" class="labelWeight">Negotiable? </label>
								&emsp;<p class="pWeight p1">Yes&emsp;</p><input type="radio" id="canNegotiate" class="labelweight cb"
																																name="negotiable" value="Yes, can be Negotiate"/>
								&emsp;<p class="pWeight p2">No&emsp;</p><input type="radio" id="canNegotiate" class="labelweight cb"
																															  name="negotiable" value="No, cannot be Negotiate"/>
							</div>
						</form>
					</div>
				</div>
				<div>
					<h3>Current Salary</h3><br>
				</div>
				<div class="row col-md-12" style="padding-left: 0; padding-right: 0;">
					<div class="col-md-6" style="padding-left: 0;">
						<form role="form" class="form-inline">
							<div class="form-group">
								<label for="basePerMonth" class="labelWeight">Base per month: SGD</label>
								<input type="number" class="form-control formSpace" id="basePerMonth" name="basePerMonth" [(ngModel)]="profile.basePerMonth"
											 value="{{ profile?.basePerMonth }}" style="margin-left: 22px;"/>
							</div>
							<div class="form-group">
								<label for="bonus" class="labelWeight">Bonus: SGD</label>
								<input type="number" class="form-control formSpace" id="bonus" name="bonus" [(ngModel)]="profile.bonus" 
											 value="{{ profile?.bonus }}" style="margin-left: 92px;"/>
							</div>
							<div class="form-group">
								<label for="allowance" class="labelWeight">Allowances: SGD</label>
								<input type="number" class="form-control formSpace" id="allowance" name="allowance" [(ngModel)]="profile.allowance" 
											 value="{{ profile?.allowance }}" style="margin-left: 55px;"/>
							</div>
							<div class="form-group">
								<label for="longTermIncentives" class="labelWeight">Any Long Term Incentive: &nbsp;</label>
								<input type="text" class="form-control" id="longTermIncentives" name="longTermIncentives" [(ngModel)]="profile.incentives" 
											 value="{{ profile?.incentives }}" style="padding-right: 0;"/>
							</div>
						</form>
					</div>
					<div class="col-md-6">
						<form role="form" class="form-inline">
							<div class="form-group">
								<label for="1213months" class="labelWeight">&emsp;on </label>&nbsp;
								<p class="pWeight">&emsp;12 months&nbsp;&nbsp;</p>
									<input type="radio" id="1213months" name="bonusRecieved" #bonusRecieved class="formSpace cb"/>
								<p class="pWeight">&emsp;13 months&nbsp;&nbsp;</p>
									<input type="radio" id="1213months" name="bonusRecieved" #bonusRecieved class="formSpace cb"/>
							</div>
							<div class="form-group">
								<label for="calculated" class="labelWeight">How is it calculated? </label>
								<input type="text" class="form-control formSpace" id="calculated" name="calculation" [(ngModel)]="profile.calculation" 
											 value="{{ profile?.calculation }}" style="margin-left: 55px;"/>
							</div>
							<div class="form-group">
								<label for="description" class="labelWeight">Please describe:  </label>
								<input type="text" class="form-control formSpace" id="description" name="description" [(ngModel)]="profile.description"
											 value="{{ profile?.description }}" style="margin-left: 89px;"/>
							</div>
							<div class="form-group">
								<label for="vestingPeriod" class="labelWeight">Vesting Period:  </label>
								<input type="date" class="form-control" id="vestingPeriod" name="vestingPeriod" [(ngModel)]="profile.vestingPeriod"
											 value="{{ profile?.vestingPeriod }}" style="margin-left:96px; width:219px;"/>
							</div>
						</form>
					</div>
				</div>
				<div style="text-align: center; margin-top: 35px;">
					<button class="btn btn-primary btn-lg" style="margin-top: 10px;" 
									(click)="onConfirmButtonClicked()">Confirm</button>
				</div>
			</div>
		</div>
	`,
	styles: [`
		.formSpace{
			margin-bottom: 5px;
		}
		.labelWeight{
			font-weight: bolder;
		}
		.pWeight{
			font-weight: bolder;
			margin-bottom: 0;
		}
		.cb{
			border-radius: 0.25em;
			width: 1.7em;
			height: 1.7em;
		}
		.div-padding{
			padding-right: 0;
			padding-left: 0;
		}
		.formSpace{
			margin-bottom: 5px;
		}
		.p1{
			margin-left: 110px;
		}
		.p2{
			margin-left: 45px;
		}
		.dropdownStyle{
			margin-left: 27px;
			margin-bottom: 5px;
			width: 222px;
		}
		.marital{
			margin-left: 100px;
			width: 220px;
		}
		.totalChildren{
			margin-left: 56px;
			width: 221px;
		}
		.div1-style {
			padding-left: 0;
			margin-left: -15px;
		}
		.div2-style {
			padding-right: 0;
			margin-left: 15px;
		}
		h3 {
			margin-top: 20px;
			margin-bottom: 5px;
			margin-left: -20px;
			color: blue;
			font-size: x-large;
		}
	`],
})

export class ProfileUserInfoComponent {
	// TODO - Implement 2 way binding.
	@Input() job: Job;
	@Input() profile: Profile;
	@Output() saveProfileUserInfoEventEmiter = new EventEmitter<Profile>();
	constructor(private store: Store<fromRoot.State>) {	}

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
		// profileSave.negotiable = this.profile.negotiable;
		profileSave.basePerMonth = this.profile.basePerMonth;
		profileSave.bonus = this.profile.bonus;
		profileSave.allowance = this.profile.allowance;
		profileSave.incentives = this.profile.incentives;
		// profileSave.bonusRecieved = this.profile.bonusRecieved;
		profileSave.calculation = this.profile.calculation;
		profileSave.description = this.profile.description;
		profileSave.vestingPeriod = this.profile.vestingPeriod;

		this.saveProfileUserInfoEventEmiter.emit(profileSave);
		this.store.dispatch(new profileAction.ProfileSaveInfoAction(profileSave));
	}
}
