import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-job-seach',
	template: `
	<div class="row">
			<div class="col-md-12">
					<img alt="We Link Talent" src="./assets/images/company-banner.png" class="img-rounded image" />
			</div>
	</div>
	<div class="row">
			<div class="col-md-12">
					<div class="col-md-5 d-inline-block">
							<label for="searchWhat">What</label>
					</div>
					<div class="col-md-5 d-inline-block">
							<label for="searchWhere">Where</label>
					</div>
					<div class="col-md-2 d-inline-block">
					</div>
			</div>
	</div>
	<div class="row">
			<div class="col-md-12">
					<div class="col-md-5 d-inline-block">
							<input id="searchWhat" name="searchWhat" class="form-control" />
					</div>
					<div class="col-md-5 d-inline-block">
							<input id="searchWhere" name="searchWhere" class="form-control" />
					</div>
					<div class="col-md-2 d-inline-block">
							<button type="button" class="btn btn-primary">Find Jobs</button>
					</div>
			</div>
	</div>
	<hr/>
	<br/>
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
export class JobSeachComponent {
	constructor() {
	}
}
