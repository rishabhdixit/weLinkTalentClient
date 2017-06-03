import { Component } from '@angular/core';
import * as fromRoot from '../reducers';
import { Application, Reference } from '../models/job-application.model';


@Component({
	selector: `app-reference-form`,
	template: `
		<form #firstReference = "ngForm">
			<div class="col-md-6" style="margin-left: -15px;">
				<div class="form-group">
					<label for="fname" class="labelweight">First Name: </label>
					<input type="text" class="form-control input-style" id="fname" name="fname"/>
				</div>
				<div class="form-group">
					<label for="currentCompany" class="labelweight">Current Company: </label>
					<input type="text" class="form-control input-style" id="currentCompany" name="currentCompany"/>
				</div>
				<div class="form-group">
					<label for="phone" class="labelweight">Mobile Phone: </label>
					<input type="text" class="form-control input-style" id="phone" name="phone"/>
				</div>
			</div>
			<div class="col-md-6 div-style">
				<div class="form-group">
					<label for="lname" class="label-style">Last Name: </label>
					<input type="text" class="form-control form-input-style" id="lname" name="lname"/>
				</div>
				<div class="form-group">
					<label for="currentTitle" class="label-style">Current Title: </label>
					<input type="text" class="form-control form-input-style" id="currentTitle" name="currentTitle"/>
				</div>
				<div class="form-group">
					<label for="email" class="label-style">Email:</label>
					<input type="email" class="form-control form-input-style" id="email" name="email"/>
				</div>
			</div>
			<div class="form-group">
				<label for="relation" class="labelweight">Professional relationship with the referee:</label>
				<input type="text" class="form-control input-relation" id="relation" name="relation"/>
			</div>
			<div class="form-group">
				<label for="dateWorked" class="labelweight">When did you work together? &emsp;From&emsp;</label>
				<input type="date" class="form-control input-date-style" id="dateWorked" name="dateWorked"/>
				<label for="dateWorked1" class="to-style">&emsp;To:&emsp;</label>
				<input type="date" class="form-control input-2date-style" id="dateWorked1" name="dateWorked1"/>
			</div>
			<div class="form-group">
				<label for="oldCompany" class="labelweight">In which company, did you work together: </label>
				<input type="text" class="form-control input-company" id="oldCompany" name="oldCompany" />
			</div>
			<div class="form-group">
				<label for="canContact" class="labelweight">Can we contact this reference?</label>
				&emsp;<p class="yes-label-style">&emsp;Yes&emsp;</p>
				<input type="checkbox" class="input-box" id="canContact" name="canContact"/>
				&emsp;<p class="no-label-style">&emsp;No&emsp;</p>
				<input type="checkbox" class="input-box1" id="canContact" name="canContact"/>
			</div>
		</form>
	`,
	styles: [`
	.labelweight {
		font-weight: bolder;
		margin-top: 5px;
	} 
	.input-box {
		border-radius: 0.25em;
		width: 1.7em;
		height: 1.7em;
		float: right;
		margin-top: -40px;
		margin-right: 570px;
	}
	.input-style {
		width: 280px;
		float: right;
		margin-bottom: 5px;
		margin-right: -15px;
	}
	.div-style {
		float: right;
		margin-top: -158px;
		padding-right: 0;
	}
	.form-input-style {
		width: 280px;
		float: right;
		margin-bottom: 5px;
	}
	.label-style {
		margin-left: 40px;
		font-weight: bolder;
		margin-top: 5px;
	}
	.input-relation {
		width: 570px;
		float: right;
		margin-top: -36px;
	}
	.input-date-style {
		width: 260px;
		float: right;
		margin-right: 340px;
	}
	.to-style {
		float: right;
		margin-right: -325px;
		margin-top: -27px;
		font-weight: bolder;
	}
	.input-2date-style {
		width: 260px;
		float: right;
		margin-left: 500px;
		margin-top: -42px;
		margin-bottom: 5px;
	}
	.yes-label-style {
		margin-left: 250px;
		margin-top: -31px;
		font-weight: bolder;
	}
	.no-label-style {
		float: right;
		margin-top: -40px;
		margin-right: 505px;
		font-weight: bolder;
	}
	.input-box1 {
		border-radius: 0.25em;
		width: 1.7em;
		height: 1.7em;
		float: right;
		margin-top: -40px;
		margin-right: 480px;
	}
	.input-company {
		width: 570px;
		float: right;
	}
	`],
})

export class ReferenceFormComponent {
	application: Application = new Application();
	reference: Reference = new Reference();
}
