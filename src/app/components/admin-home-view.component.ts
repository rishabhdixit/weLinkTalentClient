import { Component } from '@angular/core';

@Component({
	selector: `app-admin-home-view`,
	template: `
		<div class="row">
			<div class="col-md-12">
				<button class="btnCreate btn btn-primary">Create a job</button>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<app-create-job-form></app-create-job-form>
			</div>
		</div>
	`,
	styles: []
})

export class AdminHomeViewComponent {
	constructor() { }
}
