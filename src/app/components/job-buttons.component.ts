import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Job } from '../models/job.model';
import { NavigationEnd } from '@angular/router';

@Component({
	selector: 'app-job-buttons',
	template: `
	<div class="row col-md-12">
		<div class="col-md-2"></div>
		<div class="col-md-5">
			<a routerLink="/jobs/"><button type="button" class="btn btn-basic btn-lg">Back</button></a>
		</div>
		<div class="col-md-5">
			<a [routerLink]="['/application-concept', {data: job._id}]">
				<button type="button" class="btn btn-primary btn-lg" (click)="applyButtonClick()">Apply</button>
			</a>
		</div>
	</div>
	`,
	styles: []
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
