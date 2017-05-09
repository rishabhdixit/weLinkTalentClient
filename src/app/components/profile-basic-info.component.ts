import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '../reducers';
import { Profile } from '../models/profile.model';

@Component({
	selector: 'app-profile-basic-info',
	template: `
	<div class="container div-padding">
		<div class="row col-md-12">
			<div class="col-md-6">
				<form role="form" class="form-inline">
					<div class="form-group">
						<label for="dateBirth" class="labelweight">Date of Birth: </label>
						<input type="date" class="form-control formSpace" id="dateBirth" style="margin-left: 68px; width: 221px;"/>
					</div>
					<div class="form-group">
						<label for="email" class="labelweight">Email:</label>
						<input type="email" class="form-control formSpace" id="email" style="margin-left:125px;"/>
					</div>
					<div class="form-group">
						<label for="FINNumber" class="labelweight">NRIC / FIN Number: </label>
						<input type="number" class="form-control formSpace" id="FINNumber" style="margin-left: 19px;"/>
					</div>
					<div class="form-group">
						<label for="SingaporeVisa" class="labelweight">Visa for Singapore: </label>
							<select class="form-control dropdownStyle" id="SingaporeVisa">
								<option></option>
								<option>Yes</option>
								<option>No</option>
							</select>
					</div>
					<div class="form-group">
						<label for="noticePeriod" class="labelweight">Notice Period: </label>
						<input type="date" class="form-control" id="noticePeriod" style="margin-left: 63px; width: 222px;"/>
					</div>
				</form>
			</div>
			<div class="col-md-6">
				<form role="form" class="form-inline">
					<div class="form-group">
						<label for="maritalStatus" class="labelweight">Marital Status: </label>
						<select class="form-control formSpace marital" id="maritalStatus">
								<option>Single</option>
								<option>Married</option>
								<option>Divorce</option>
								<option>Seperated</option>
								<option>Widowed</option>
						</select>
					</div>
					<div class="form-group">
						<label for="mobileNumber" class="labelweight">Mobile:  </label>
						<input type="text" class="form-control formSpace" id="mobileNumber" style="margin-left: 153px;"/>
					</div>
					<div class="form-group">
						<label for="numberOfChildren" class="labelweight">Number of Children: </label>
						<select class="form-control formSpace totalChildren" id="numberOfChildren">
								<option></option>
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
						<label for="validityEnd" class="labelweight">End of validity: </label>
						<input type="date" class="form-control formSpace" id="validityEnd" style="margin-left:97px; width:222px;"/>
					</div>
					<div class="form-group">
						<label for="canNegotiate" class="labelweight">Negotiable? </label>
						&emsp;<p class="pWeight p1">Yes&emsp;</p><input type="checkbox" id="canNegotiate" class="labelweight cb"/>
						&emsp;<p class="pWeight p2">No&emsp;</p><input type="checkbox" id="canNegotiate" class="labelweight cb"/>
					</div>
				</form>
			</div>
		</div>
	</div>
	`,

	styles: [`
		.div-padding{
			padding-right: 0px;
			padding-left: 0;
		}
		.formSpace{
			margin-bottom: 5px;
		}
		.labelweight{
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
	`],
})

export class ProfileBasicInfoComponent {
	@Input() profile: Profile;

	constructor () {

	}
}
