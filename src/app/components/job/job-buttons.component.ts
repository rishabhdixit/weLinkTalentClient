import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Job } from '../../models/job.model';
import { User } from '../../models/user.model';

@Component({
	selector: 'app-job-buttons',
	template: `
	<div class="row" *ngIf="!isLoggedInAsAdmin">
		<div class="col-md-6">
			<a routerLink="/jobs">
				<button type="button" class="btn btn-default btn-lg btnBack form-control">Back</button>
			</a>
		</div>
		<div class="col-md-6">
			<button type="button" class="btn btn-primary btn-lg form-control" 
			        [disabled]="alreadyApplied()" 
			        (click)="applyButtonClick()" 
			        [ngClass]="{'disable': alreadyApplied()}">Apply</button>
		</div>
	</div>
	<br/>
	<div class="row">
		<div class="col-md-12">
			<div *ngIf="alreadyApplied()" class="alert alert-warning text-center" role="alert" >
				You have already applied to this job.
			</div>
		</div>
	</div>
	`,
	styles: [`
		.disable {
			background: gray;
		}
		.btnBack {
			background: lightgray;
		}
	`]
})
export class JobButtonsComponent {
	@Input() job: Job;
	@Input() user: User;
	@Output() applyButtonClickEvent = new EventEmitter<Job>();

	constructor() {
	}

	applyButtonClick() {
		this.applyButtonClickEvent.emit(this.job);
	}

	get isLoggedInAsAdmin() {
		if (!this.user
			|| !this.user.role
			|| this.user.role !== 'admin') {
			return false;
		}

		return true;
	}

	alreadyApplied() {
		if (this.job.status === 'Application found') {
			return true;
		}
		return false;
	}
}
