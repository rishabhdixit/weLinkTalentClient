import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Job } from '../../models/job.model';

@Component({
	selector: 'app-job-buttons',
	template: `
	<div class="row col-md-12">
		<div class="col-md-2"></div>
		<div class="col-md-5">
			<a routerLink="/jobs">
				<button type="button" class="btn btn-basic btn-lg btnBack">Back</button>
			</a>
		</div>
		<div  *ngIf="job.status != 'Application found'" class="col-md-5">
			<button type="button" class="btn btn-primary btn-lg btnApply" (click)="applyButtonClick()">Apply</button>
		</div>
	</div>
	`,
	styles: [`
		.btnApply {
			border-radius: 0;
			background: #57148D;
		}
		.btnBack {
			border-radius: 0;
		}
	`]
})
export class JobButtonsComponent {
	@Input() job: Job;
	@Output() applyButtonClickEvent = new EventEmitter<Job>();

	constructor() {
	}

	applyButtonClick() {
		this.applyButtonClickEvent.emit(this.job);
	}
}
