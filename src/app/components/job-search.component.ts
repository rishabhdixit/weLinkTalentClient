import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-job-search',
	template: `
	<div class="row">
			<div class="col-md-12">
					<img alt="We Link Talent" src="./assets/images/company-banner.png" class="img-rounded image" />
			</div>
	</div>
	<div class="row">
			<div class="col-md-5">
					<label for="searchWhat">What</label>
					<input id="searchWhat" name="searchWhat" class="form-control"/>
			</div>
			<div class="col-md-5">
					<label for="searchWhere">Where</label>
					<input id="searchWhere" name="searchWhere" class="form-control" />
			</div>
			<div class="col-md-2">
					<label for="searchButton">&nbsp;</label>
					<button type="button" class="btn btn-primary form-control">Find Jobs</button>
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
	constructor() {
	}
}
