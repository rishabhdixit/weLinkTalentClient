import { Component, Input, OnInit } from '@angular/core';
// import * as JSZip from 'jszip';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from '../../models/user.model';
import { JobsApplied } from '../../models/jobs-applied.model';

@Component({
	selector: 'app-candidate-profile-view',
	template: `
		<div class="row">
			<div class="col-md-12">
				<div class="row">
					<div class="col-md-12 text-left">
						<h3 class="purple-color">Candidate Resume's</h3>
					</div>
				</div>
			</div>
		</div>
		<div class="row" *ngFor="let resumeUrl of application.resume_urls">
			<div class="col-md-9 form-inline">
				<h5>{{getFileName(resumeUrl)}}</h5>
			</div>
			<div class="col-md-3 form-inline text-right">
				<a href="{{resumeUrl}}" download="{{getFileName(resumeUrl)}}">
					<button class="btn btn-primary form-control">Download File</button>
				</a>
			</div>
		</div>
		<br/>
		<form class="form-horizontal" novalidate [formGroup]="candidateProfileForm">
			<hr/>
			<div class="row">
				<div class="col-md-12">
					<div class="row">
						<div class="col-md-12 text-left">
							<h3 class="purple-color">Candidate Profile</h3>
						</div>
					</div>
				</div>
				<div class="col-md-12">
					<div class="row">
						<div class="col-md-5 form-group">
							<label for="firstName">First Name</label>
							<input type="text" id="firstName" class="form-control" formControlName="firstName" readonly>
						</div>
						<div class="col-md-5 form-group">
							<label for="lastName">Last Name</label>
							<input type="text" id="lastName" class="form-control" formControlName="lastName" readonly/>
						</div>
						<div class="col-md-2"></div>
					</div>
				</div>
				<div class="col-md-12">
					<div class="row">
						<div class="col-md-5 form-group">
							<label for="birthDate">Date of Birth</label>
							<input type="text" id="birthDate" class="form-control"
								value="{{user.profile.birthDate | date: 'MM - dd - yyyy'}}" placeholder="Birth Day" readonly/>
						</div>
						<div class="col-md-7 form-group"></div>
					</div>
				</div>
				<div class="col-md-12">
					<div class="row">
						<div class="col-md-5 form-group">
							<label for="maritalStatus">Marital Status</label>
							<input type="text" id="maritalStatus" class="form-control" formControlName="maritalStatus" readonly/>
						</div>
						<div class="col-md-7"></div>
					</div>
				</div>
				<div class="col-md-12">
					<div class="row">
						<div class="col-md-5 form-group">
							<label for="email">Email Address</label>
							<input type="email" class="form-control" id="email" formControlName="emailAddress" readonly/>
						</div>
						<div class="col-md-7"></div>
					</div>
				</div>
				<div class="col-md-12">
					<div class="row">
						<div class="col-md-5 form-group">
							<label for="mobile">Phone</label>
							<input type="tel" class="form-control" id="mobile" formControlName="mobileNumber" readonly/>
						</div>
						<div class="col-md-7"></div>
					</div>
				</div>
				<div class="col-md-12">
					<div class="row">
						<div class="col-md-5 form-group">
							<label for="NRIC">NRIC / FIN Number / Passport</label>
							<input type="text" class="form-control" id="NRIC" formControlName="NRIC" readonly/>
						</div>
						<div class="col-md-7"></div>
					</div>
				</div>
				<div class="col-md-12">
					<div class="row">
						<div class="col-md-5 form-group">
							<label for="singaporeVisa">Visa for Singapore</label>
							<input type="text" class="form-control" id="NRIC" formControlName="singaporeVisa" readonly/>
						</div>
						<div class="col-md-5 form-group">
							<label for="visaValidity">End of validity</label>
							<input type="text" class="form-control" id="visaValidity" value="{{user.profile.visaValidity | date: 'MM - dd - yyyy'}}" readonly/>
						</div>
						<div class="col-md-2"></div>
					</div>
				</div>
				<div class="col-md-12">
					<div class="row">
						<div class="col-md-8">
							<div class="form-inline">
								<label>Availability</label>
							</div>
							<div class="form-inline">
								<div class="radio">
									<ul>
										<li *ngFor="let noticePeriod of noticePeriodValueList">
											<label>
												<input
													type="radio"
													value="{{ noticePeriod }}"
													formControlName="noticePeriod"
													readonly/>
												&nbsp;
												{{ noticePeriod }}
												&nbsp;&nbsp;&nbsp;
											</label>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="col-md-4">
							<div class="form-inline">
								<label>Negotiable?</label>
							</div>
							<div class="form-inline">
								<div class="radio">
									<ul>
										<li *ngFor="let logicalValue of logicalValueList">
											<label>
												<input
													type="radio"
													value="{{ logicalValue.value }}"
													formControlName="noticePeriodNegotiable"
													readonly/>
												{{ logicalValue.name }}
											</label>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-12" style="padding-top: 10px;">
					<div class="row">
						<div class="col-md-10">
							<label for="summary">Summary</label>
							<textarea class="form-control" rows="10" formControlName="summary" placeholder="Profile summary goes here!" readonly></textarea>
						</div>
						<div class="col-md-2"></div>
					</div>
				</div>
			</div>
			<br>
			<div class="row">
				<div class="col-md-12">
					<div class="row">
						<div class="col-md-12 text-left">
							<h3 class="purple-color">Current Salary</h3>
						</div>
					</div>
				</div>
				<div class="col-md-12">
					<div class="row">
						<div class="col-md-3 form-group">
							<label for="currency">Currency</label>
							<input type="text" class="form-control" id="currency" formControlName="currency" readonly/>
						</div>
					</div>
				</div>
				<div class="col-md-12">
					<div class="row">
						<div class="col-md-5 form-group">
							<label for="annualSalary">Annual Salary</label>
							<input type="text" class="form-control" id="annualSalary" formControlName="annualSalary" readonly/>
						</div>
						<div class="col-md-5 form-group">
							<label for="annualBonus">Annual Bonus</label>
							<input type="text" class="form-control" id="annualBonus" formControlName="annualBonus" readonly/>
						</div>
						<div class="col-md-2 form-group"></div>
					</div>
				</div>
				<div class="col-md-12">
					<div class="row">
						<div class="col-md-12">
							<div class="row">
								<div class="col-md-8">
									<div class="form-inline">
										<label class="labelWeight">Allowance</label>
									</div>
									<div class="form-inline">
										<div class="checkbox">
											<ul>
												<li>
													<label class="labelWeight">
														<input
															type="checkbox"
															formControlName="transportation" readonly/>
														&nbsp;
														Transportation
														&nbsp;&nbsp;&nbsp;&nbsp;
													</label>
												</li>
												<li>
													<label class="labelWeight">
														<input
															type="checkbox"
															formControlName="housing" readonly/>
														&nbsp;
														Housing
														&nbsp;&nbsp;&nbsp;&nbsp;
													</label>
												</li>
												<li>
													<label class="labelWeight">
														<input
															type="checkbox"
															formControlName="schooling" readonly/>
														&nbsp;
														Schooling
														&nbsp;&nbsp;&nbsp;&nbsp;
													</label>
												</li>
												<li>
													<label class="labelWeight">
														<input
															type="checkbox"
															formControlName="health" readonly/>
														&nbsp;
														Health
													</label>
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div class="col-md-4"></div>
							</div>
						</div>
						<div class="col-md-12" style="padding-top: 15px;">
							<div class="row">
								<div class="col-md-2 form-inline">
									<label class="labelWeight">
										<input
											type="checkbox"
											formControlName="others" readonly/>
										&nbsp;
										Others
									</label>
								</div>
								<div class="col-md-8">
									<input class="form-control" type="text" formControlName="otherAllowanceName" readonly/>
								</div>
								<div class="col-md-2"></div>
							</div>
						</div>
						<div class="col-md-12">
							<div class="row">
								<div class="col-md-6">
									<label for="totalAllowance" class="labelWeight">Total value of your allowance</label>
									<input type="text"
												 onkeypress="return event.charCode >= 48 && event.charCode <= 57"
												 class="form-control currency"
												 (focus)="onFocusThousandSeparator('currentSalary.allowance.totalAllowance')"
												 (blur)="onBlurThousandSeparator('currentSalary.allowance.totalAllowance')"
												 id="totalAllowance"
												 formControlName="totalAllowance" readonly/>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-12">
					<div class="row">
						<div class="col-md-12">
							<div class="form-inline">
								<label class="labelWeight">Are you on an expat package?</label>
							</div>
							<div class="form-inline">
								<div class="radio">
									<ul>
										<li *ngFor="let logicalValue of logicalValueList">
											<label class="labelWeight">
												<input
													type="radio"
													value="{{ logicalValue.value }}"
													formControlName="isOnExpatPackage" readonly/>
												&nbsp;
												{{ logicalValue.name }}
												&nbsp;&nbsp;&nbsp;&nbsp;
											</label>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<br>
			<div class="row">
				<div class="col-md-12">
					<div class="row">
						<div class="col-md-12 text-left">
							<h3 class="purple-color">Expected Salary</h3>
						</div>
					</div>
				</div>
				<div class="col-md-12">
					<div class="row">
						<div class="col-md-3 form-group">
							<label for="expectedSalaryCurrency">Currency</label>
							<input type="text" class="form-control" id="expectedSalaryCurrency" formControlName="currency" readonly/>
						</div>
						<div class="col-md-7 form-group">
							<label for="annualSalaryPackage">Annual Package</label>
							<input type="text" class="form-control currency" id="annualSalaryPackage" formControlName="annualSalaryPackage" readonly/>
						</div>
						<div class="col-md-2"></div>
					</div>
				</div>
				<div class="col-md-12">
					<div class="row">
						<div class="col-md-12">
							<div class="form-inline">
								<label class="labelWeight">Are you on an expat package?</label>
							</div>
							<div class="form-inline">
								<div class="radio">
									<ul>
										<li *ngFor="let logicalValue of logicalValueList">
											<label class="labelWeight">
												<input
													type="radio"
													value="{{ logicalValue.value }}"
													formControlName="isOnExpatPackage"/>
												&nbsp;
												{{ logicalValue.name }}
												&nbsp;&nbsp;&nbsp;&nbsp;
											</label>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<br>
			<div class="row">
				<div class="col-md-12">
					<div class="row">
						<div class="col-md-12 text-left">
							<h3 class="purple-color">Misc</h3>
						</div>
					</div>
				</div>
				<div class="col-md-12">
					<div class="row">
						<div class="col-md-12">
							<div class="form-inline">
								<label class="labelWeight">Percentage of travel accepted</label>
							</div>
							<div class="form-inline">
								<div class="radio">
									<ul>
										<li *ngFor="let percentage of percentagesTravelAccepted">
											<label class="labelWeight">
												<input
													type="radio"
													value="{{ percentage }}"
													formControlName="percentageTravelAccepted"/>
												&nbsp;
												{{ percentage }}
												&nbsp;&nbsp;&nbsp;&nbsp;
											</label>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-12">
					<div class="row">
						<div class="col-md-12">
							<div class="form-inline">
								<label class="labelWeight">Driving license</label>
							</div>
							<div class="form-inline">
								<div class="radio">
									<ul>
										<li *ngFor="let logicalValue of logicalValueList">
											<label class="labelWeight">
												<input
													type="radio"
													value="{{ logicalValue.value }}"
													formControlName="drivingLicense"/>
												&nbsp;
												{{ logicalValue.name }}
												&nbsp;&nbsp;&nbsp;&nbsp;
											</label>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</form>
	`,
	styles: [`
		label {
			font-weight: bolder;
		}
		ul {
			list-style: none;
			padding-left: 0px;
		}
		div li {
			display: inline;
			float: left;
		}
	`]
})
export class CandidateProfileViewComponent implements OnInit {
	@Input() user: User;
	@Input() application: JobsApplied;

	logicalValueList: Array<any> = [
		{ name: 'Yes', value: true },
		{ name: 'No', value: false }
	];
	noticePeriodValueList: Array<any> = ['Immediately', '1 month', '3 months', '6 months'];
	percentagesTravelAccepted: Array<String> = ['No travel', '25%', '50%', '75%'];

	candidateProfileForm: FormGroup;

	constructor(private fb: FormBuilder) {}

	ngOnInit() {
		this.candidateProfileForm = this.fb.group({
			firstName: this.fb.control(this.user.profile.firstName),
			lastName: this.fb.control(this.user.profile.lastName),
			headline: this.fb.control(this.user.profile.headline),
			emailAddress: this.fb.control(this.user.profile.emailAddress),
			summary: this.fb.control(this.user.profile.summary),
			birthDate: this.fb.control(this.user.profile.birthDate),
			maritalStatus: this.fb.control(this.user.profile.maritalStatus),
			mobileNumber: this.fb.control(this.user.profile.mobileNumber),
			NRIC: this.fb.control(this.user.profile.NRIC),
			singaporeVisa: this.fb.control(this.user.profile.singaporeVisa),
			visaValidity: this.fb.control(this.user.profile.visaValidity),
			noticePeriod: this.fb.control(this.user.profile.noticePeriod),
			noticePeriodNegotiable: this.fb.control(this.user.profile.noticePeriodNegotiable + ''),
			currency: this.fb.control(this.user.profile.currentSalary.currency),
			annualSalary: this.fb.control(this.user.profile.currentSalary.annualSalary),
			annualBonus: this.fb.control(this.user.profile.currentSalary.annualBonus),
			transportation: this.fb.control(this.user.profile.currentSalary.allowance.transportation),
			housing: this.fb.control(this.user.profile.currentSalary.allowance.housing),
			schooling: this.fb.control(this.user.profile.currentSalary.allowance.schooling),
			health: this.fb.control(this.user.profile.currentSalary.allowance.health),
			others: this.fb.control(this.user.profile.currentSalary.allowance.others),
			otherAllowanceName: this.fb.control(this.user.profile.currentSalary.allowance.otherAllowanceName),
			totalAllowance: this.fb.control(this.user.profile.currentSalary.allowance.totalAllowance),
			isOnExpatPackage: this.fb.control(this.user.profile.currentSalary.isOnExpatPackage),
			annualSalaryPackage: this.fb.control(this.user.profile.expectedSalary.annualSalaryPackage),
			percentageTravelAccepted: this.fb.control(this.user.profile.miscellaneous.percentageTravelAccepted),
			drivingLicense: this.fb.control(this.user.profile.miscellaneous.drivingLicense),
		});
		console.log('Annual Salary Package: ', this.user.profile.expectedSalary.annualSalaryPackage);

		this.profileFormDisable();
	}

	/*downloadResumes(): void {
		this.compressResumesToZip([
			'https://s3-ap-southeast-1.amazonaws.com/jaylex-develop/applicant/Larry+M.+Borrero/pdf/9fb6/Larry+M.+Borrero.pdf',
			'https://s3-ap-southeast-1.amazonaws.com/jaylex-develop/applicant/Larry+M.+Borrero/pdf/9fb6/Larry+M.+Borrero.pdf'
		]);
	}*/

	/*private compressResumesToZip(files: string[]) {
		let zipFile: JSZip = new JSZip();
		let xmlHTTP = new XMLHttpRequest();

		let dataResponse = {
			base64: null,
			status: null
		};

		xmlHTTP.open('GET', files[0], true);
		xmlHTTP.responseType = 'arraybuffer';
		xmlHTTP.onload = function(e) {
			if (xmlHTTP.statusText == 'OK') {
				var arr = new Uint8Array(xmlHTTP.response);
				var base64 = btoa(Array.prototype.map.call(arr, function (ch) {
					return String.fromCharCode(ch);
				}).join(''));
				console.log('base64:', base64);
				// callback(base64, xmlHTTP.statusText);
			} else {
				// callback(null, xmlHTTP.statusText);
			}
		};

		xmlHTTP.send(null);

		console.log(zipFile);
		console.log(xmlHTTP);
	}*/

	getFileName(url: string): string {
		return url.substr(url.lastIndexOf('/') + 1);
	}

	private profileFormDisable(): void {
		this.candidateProfileForm.get('noticePeriod').disable();
		this.candidateProfileForm.get('noticePeriodNegotiable').disable();
	}
}
