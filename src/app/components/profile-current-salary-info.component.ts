import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '../reducers';

@Component({
	selector: `app-profile-current-salary-info`,
	template: `
		<div class="container">
			<div class="row col-md-12" style="padding-left: 0; padding-right: 0;">
				<div class="col-md-6">
					<form role="form" class="form-inline">
						<div class="form-group">
							<label for="basePerMonth" class="labelWeight">Base per month: SGD</label>
							<input type="text" class="form-control formSpace" id="basePerMonth" style="margin-left: 22px;"/>
						</div>
						<div class="form-group">
							<label for="bonus" class="labelWeight">Bonus: SGD</label>
							<input type="text" class="form-control formSpace" id="bonus" style="margin-left: 92px;"/>
						</div>
						<div class="form-group">
							<label for="allowance" class="labelWeight">Allowances: SGD</label>
							<input type="text" class="form-control formSpace" id="allowance" style="margin-left: 55px;"/>
						</div>
						<div class="form-group">
							<label for="longTermIncentives" class="labelWeight">Any Long Term Incentive: &nbsp;</label>
							<input type="text" class="form-control" id="longTermIncentives" style="padding-right: 0px;"/>
						</div>
					</form>
				</div>
				<div class="col-md-6">
					<form role="form" class="form-inline">
						<div class="form-group">
							<label for="1213months" class="labelWeight">&emsp;on </label>&nbsp;
							<p class="pWeight">&emsp;12 months&nbsp;&nbsp;</p><input type="checkbox" id="1213months" class="formSpace cb"/>
							<p class="pWeight">&emsp;13 months&nbsp;&nbsp;</p><input type="checkbox" id="1213months" class="formSpace cb"/>
						</div>
						<div class="form-group">
							<label for="calculated" class="labelWeight">How is it calculated? </label>
							<input type="text" class="form-control formSpace" id="calculated" style="margin-left: 55px;"/>
						</div>
						<div class="form-group">
							<label for="description" class="labelWeight">Please describe:  </label>
							<input type="text" class="form-control formSpace" id="mobileNumber" style="margin-left: 89px;"/>
						</div>
						<div class="form-group">
							<label for="vestingPeriod" class="labelWeight">Vesting Period:  </label>
							<input type="text" class="form-control" id="vestingPeriod" style="margin-left: 96px;"/>
						</div>
					</form>
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
	`],
})

export class ProfileCurrentSalaryInfoComponent {
	constructor() {
	}
}
