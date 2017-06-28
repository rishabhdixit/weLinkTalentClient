import { Component } from '@angular/core';

@Component({
	selector: `app-home-view`,
	template: `
		<div class="row">
			<div class="col-md-7">
				<label>Legend:</label>
			</div>
			<div class="col-md-5">
				<label>Colour Codes:</label>
			</div>
		</div>
		<div class="row">
			<div class="col-md-7">
				<p>1st Circle &emsp;-Self Application Form Status</p>
			</div>
			<div class="col-md-5">
				<div style="float: left;">
					<p>Incomplete</p>
				</div>
				<div style="float: right;">
					<i class="fa fa-circle fa-2x" aria-hidden="true" style="color:red;"></i>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-7">
				<p>2nd Circle&emsp;-Referee Validation Form Status</p>
			</div>
			<div class="col-md-5">
				<div style="float: left;">
					<p>Completed (yet to submit)</p>
				</div>
				<div style="float: right;">
					<i class="fa fa-circle fa-2x" aria-hidden="true" style="color:yellow;"></i>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-7">
				<p>3rd Circle &emsp;-Application Submission Status (with Referee Validation)</p>
			</div>
			<div class="col-md-5">
				<div style="float: left;">
					<p>Submitted</p>
				</div>
				<div style="float: right;">
					<i class="fa fa-circle fa-2x" aria-hidden="true" style="color:green;"></i>
				</div>
			</div>
		</div>
		<div class="row" style="margin-top: 50px;">
			<h3>Your Applications</h3>
		</div>
		<div class="row" style="margin-top: 10px;">
			<div class="col-md-5" style="text-align: center;">
				<label>Job Title</label>
			</div>
			<div class="col-md-3" style="text-align: center;">
				<label>Status</label>
			</div>
			<div class="col-md-4" style="text-align: center;">
				<label>Application Status</label>
			</div>
		</div>
		<div class="row">

		</div>
	`,
	styles: [`
		label {
			color: #57148D;
			font-weight: bolder;
		}
	`],
})

export class HomeViewComponent {

	constructor() {}

}
