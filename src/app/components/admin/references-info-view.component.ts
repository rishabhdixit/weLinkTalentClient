import { Component, Input } from '@angular/core';
import { JobsApplied } from '../../models/jobs-applied.model';

@Component({
	selector: 'app-references-info-view',
	template: `
		<div class="row">
			<div class="col-md-10">
				<div class="row">
					<div class="col-md-12 text-left">
						<h3 class="purple-color">Reference's Information</h3>
					</div>
				</div>
			</div>
		</div>
		<br/>
		<div class="row" *ngFor="let referenceInfo of application.references_info; let i=index;">
			<div class="col-md-10">
				<div class="row">
					<div class="col-md-6">
						<div class="form-group">
							<label for="firstName" class="purple-color">First Name:</label>
							<input type="text" class="form-control" id="firstName"
								name="firstName" value="{{referenceInfo.firstName}}" readonly/>
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
							<label for="lastName" class="purple-color">Last Name:</label>
							<input type="text" class="form-control" id="lastName"
								name="lastName" value="{{referenceInfo.lastName}}" readonly/>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-6">
						<div class="form-group">
							<label for="company" class="purple-color">Current Company:</label>
							<input type="text" class="form-control" id="company"
								name="company" value="{{referenceInfo.company}}" readonly/>
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
							<label for="title" class="purple-color">Current Title:</label>
							<input type="text" class="form-control" id="title"
								name="title" value="{{referenceInfo.title}}" readonly/>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-6">
						<div class="form-group">
							<label for="phone" class="purple-color">Mobile Phone:</label>
							<input type="text" class="form-control" id="phone"
								name="phone" value="{{referenceInfo.phone}}" readonly/>
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
							<label for="emailAddress" class="purple-color">Email Address:</label>
							<input type="email" class="form-control" id="emailAddress"
								name="emailAddress" value="{{referenceInfo.emailAddress}}" readonly/>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-6">
						<div class="form-group">
							<label for="relation" class="purple-color">Professional relationship with the referee:</label>
							<input type="text" class="form-control" id="relation"
								name="relation" value="{{referenceInfo.relationship}}" readonly/>
						</div>
					</div>
					<div class="col-md-6">
						<div class="form-group">
							<label for="companyTogether" class="purple-color">In which company, did you work together:</label>
							<input type="text" class="form-control" id="companyTogether"
								name="companyTogether" value="{{referenceInfo.companyTogether}}" readonly/>
						</div>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12">
						<label class="purple-color">When did you work together?</label>
					</div>
				</div>
				<div class="row">
					<div class="col-md-6">
						<label for="startYearOfWorking" class="purple-color">From:</label>
						<input type="month" class="form-control" id="startYearOfWorking"
							name="startYearOfWorking" value="{{referenceInfo.startYearOfWorking}}" readonly/>
					</div>
					<div class="col-md-6">
						<label for="endYearOfWorking" class="purple-color">To:</label>
						<input type="month" class="form-control" id="endYearOfWorking"
							name="endYearOfWorking" value="{{referenceInfo.endYearOfWorking}}" readonly/>
					</div>
				</div>
				<br/>
				<div class="row">
					<div class="col-md-12 listStyle">
						<label class="purple-color">
							<b>Can we contact this reference?</b>
							&nbsp;&nbsp;&nbsp;{{referenceInfo.canContact}}
						</label>
					</div>
				</div>
				<div class="row" *ngIf="i < application.references_info.length - 1">
					<div class="col-md-12">
						<hr/>
					</div>
				</div>
				<br/>
			</div>
		</div>
	`,
	styles: [`
		label {
			font-weight: bolder;
		}
		li {
			display: inline;
		}
	`]
})
export class ReferencesInfoViewComponent {
	@Input() application: JobsApplied;

	constructor() {}
}
