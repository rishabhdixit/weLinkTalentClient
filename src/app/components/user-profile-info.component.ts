import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Profile } from '../models/profile.model';
import { Store } from '@ngrx/store';
import *as fromRoot from '../reducers';
import * as profileAction from '../actions/profile.action';

@Component({
	selector: `app-user-profile-info`,
	template: `
		<div class="container">
			<div class="container-fluid">
				<div class="row col-md-12">
					<div class="col-md-6 div1-style">
						<form role="form" class="form-inline">
							<div class="form-group">
								<label for="dateBirth" class="labelWeight">Date of Birth: </label>
								<input type="date" class="form-control formSpace" id="dateBirth" name="birthDate" #birthDate value="{{profile?.birthDate}}"
											 style="margin-left: 68px; width: 221px;"/>
							</div>
							<div class="form-group">
								<label for="email" class="labelWeight">Email:</label>
								<input type="email" class="form-control formSpace" id="email" name="email" #email value="{{profile?.email}}"
											 style="margin-left:125px;"/>
							</div>
							<div class="form-group">
								<label for="FINNumber" class="labelWeight">NRIC / FIN Number: </label>
								<input type="number" class="form-control formSpace" id="FINNumber" name="FINNumber" #FINNumber  value="{{profile?.NRIC}}"
											 required style="margin-left: 19px;"/>
							</div>
							<div class="form-group">
								<label for="SingaporeVisa" class="labelWeight">Visa for Singapore: </label>
								<select class="form-control dropdownStyle" id="SingaporeVisa" name="singaporeVisa" #singaporeVisa 
												value="{{profile?.singaporeVisa}}">
									<option>Yes, I have</option>
									<option>No, I don't have</option>
								</select>
							</div>
							<div class="form-group">
								<label for="noticePeriod" class="labelWeight">Notice Period: </label>
								<input type="date" class="form-control" id="noticePeriod" name="periodNotice" #noticePeriod value="{{profile?.noticePeriod}}"
											 style="margin-left: 63px; width: 222px;"/>
							</div>
						</form>
					</div>
					<div class="col-md-6 div2-style">
						<form role="form" class="form-inline">
							<div class="form-group">
								<label for="maritalStatus" class="labelWeight">Marital Status: </label>
								<select class="form-control formSpace marital" id="maritalStatus" name="status" #status value="{{profile?.maritalStatus}}">
									<option>Single</option>
									<option>Married</option>
									<option>Divorce</option>
									<option>Seperated</option>
									<option>Widowed</option>
								</select>
							</div>
							<div class="form-group">
								<label for="mobileNumber" class="labelWeight">Mobile:  </label>
								<input type="text" class="form-control formSpace" id="mobileNumber" name="mobile" #mobile value="{{profile?.mobile}}"
											 style="margin-left: 153px;"/>
							</div>
							<div class="form-group">
								<label for="numberOfChildren" class="labelWeight">Number of Children: </label>
								<select class="form-control formSpace totalChildren" id="numberOfChildren" name="children" #children value="{{profile?.children}}">
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
								<input type="date" class="form-control formSpace" id="validityEnd" name="validity" #validityEnd value="{{profile?.validityEnd}}"
											 style="margin-left:97px; width:222px;"/>
							</div>
							<div class="form-group">
								<label for="canNegotiate" class="labelWeight">Negotiable? </label>
								&emsp;<p class="pWeight p1">Yes&emsp;</p><input type="radio" id="canNegotiate" class="labelweight cb"
																																name="negotiable" value="Yes, can be Negotiate" #negotiable value="{{profile?.negotiable}}"/>
								&emsp;<p class="pWeight p2">No&emsp;</p><input type="radio" id="canNegotiate" class="labelweight cb"
																															  name="negotiable" value="No, cannot be Negotiate" #negotiable value="{{profile?.negotiable}}"/>
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
								<input type="number" class="form-control formSpace" id="basePerMonth" name="basePerMonth" value="{{profile?.basePerMonth}}"
											 #basePerMonth style="margin-left: 22px;"/>
							</div>
							<div class="form-group">
								<label for="bonus" class="labelWeight">Bonus: SGD</label>
								<input type="number" class="form-control formSpace" id="bonus" name="bonus" value="{{profile?.bonus}}"
											 #bonus style="margin-left: 92px;"/>
							</div>
							<div class="form-group">
								<label for="allowance" class="labelWeight">Allowances: SGD</label>
								<input type="number" class="form-control formSpace" id="allowance" name="allowance" value="{{profile?.allowance}}"
											 #allowance style="margin-left: 55px;"/>
							</div>
							<div class="form-group">
								<label for="longTermIncentives" class="labelWeight">Any Long Term Incentive: &nbsp;</label>
								<input type="text" class="form-control" id="longTermIncentives" name="longTermIncentives" value="{{profile?.incentives}}"
											 #incentive style="padding-right: 0;"/>
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
								<input type="text" class="form-control formSpace" id="calculated" name="calculation" value="{{profile?.calculation}}"
											 #calculation style="margin-left: 55px;"/>
							</div>
							<div class="form-group">
								<label for="description" class="labelWeight">Please describe:  </label>
								<input type="text" class="form-control formSpace" id="description" name="description" value="{{profile?.description}}"
											 #description style="margin-left: 89px;"/>
							</div>
							<div class="form-group">
								<label for="vestingPeriod" class="labelWeight">Vesting Period:  </label>
								<input type="date" class="form-control" id="vestingPeriod" name="vestingPeriod" value="{{profile?.vestingPeriod}}"
											 #vestingPeriod style="margin-left:96px; width:219px;"/>
							</div>
						</form>
					</div>
				</div>
				<div style="text-align: center; margin-top: 35px;">
					<button class="btn btn-primary btn-lg" style="margin-top: 10px;" 
									(click)="onConfirmButtonClicked(birthDate.value, FINNumber.value, email.value, singaporeVisa.value, noticePeriod.value,
									status.value, mobile.value, children.value, validityEnd.value, negotiable.value, basePerMonth.value, 
									bonus.value, allowance.value, incentive.value, bonusRecieved.select(), calculation.value, description.value, 
									vestingPeriod.value)">Confirm</button>
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

export class UserProfileInfoComponent {
	// TODO - Implement 2 way binding.

	@Input() profile: Profile;
	constructor(private store: Store<fromRoot.State>) {

	}

	onConfirmButtonClicked(birthDate: string, NRIC: number, email: string, singaporeVisa: string, noticePeriod: string, maritalStatus: string,
												mobile: string, children: string, validityEnd: string, negotiable: any, basePerMonth: number, bonus: number,
												allowance: number, incentives: any, bonusRecieved: any, calculation: string, description: string,
												vestingPeriod: string) {
		let profileSave = new Profile();

		profileSave.birthDate = birthDate;
		profileSave.NRIC = NRIC;
		profileSave.email = email;
		profileSave.singaporeVisa = singaporeVisa;
		profileSave.noticePeriod = noticePeriod;
		profileSave.maritalStatus = maritalStatus;
		profileSave.mobile = mobile;
		profileSave.children = children;
		profileSave.validityEnd = validityEnd;
		profileSave.negotiable = negotiable;
		profileSave.basePerMonth = basePerMonth;
		profileSave.bonus = bonus;
		profileSave.allowance = allowance;
		profileSave.incentives = incentives;
		profileSave.bonusRecieved = bonusRecieved;
		profileSave.calculation = calculation;
		profileSave.description = description;
		profileSave.vestingPeriod = vestingPeriod;

		// console.log(profileInfo);

		this.store.dispatch(new profileAction.ProfileSaveInfoAction(profileSave));
	}
}
