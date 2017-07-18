import { Component, Output, EventEmitter } from '@angular/core';
import { Job } from '../../models/job.model';

@Component({
	selector: 'app-job-search',
	template: `
	<div class="row">
		<div class="col-md-5">
			<label for="searchWhat">What</label>
			<input id="searchWhat" name="searchWhat" class="form-control" #searchWhat />
		</div>
		<div class="col-md-5">
			<label for="searchWhere">Where</label>
			<input id="searchWhere" name="searchWhere" class="form-control" #searchWhere/>
		</div>
		<div class="col-md-2">
			<label for="searchButton">&nbsp;</label>
			<button type="button" class="btn btn-primary form-control" 
							(click)="onSearchClick(searchWhat.value,searchWhere.value)">Find Jobs</button>
		</div>
	</div>
	<div class="row">
		<div class="col-md-12">
		<hr>
		</div>
	</div>
	`,
	styles: [`
		.image {
			margin: 11px 0 5px 15px;
			border: 0;
			width: 219px;
			height: 70px;
			background-size: 219px 70px
		}
	`]
})
export class JobSearchComponent {
	@Output() searchButtonClick = new EventEmitter<Job>();
	constructor() {
	}

	onSearchClick(title: string, location: string) {
		let job: Job = new Job();
		job.title = title;
		job.location = location;

		this.searchButtonClick.emit(job);
	}
}
