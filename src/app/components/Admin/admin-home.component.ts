import {Component} from '@angular/core';

@Component({
	selector: `app-admin-home`,
	template: `
		<div class="row">
			<div class="col-md-12">
				<button class="btnCreate btn btn-primary">Create a job</button>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12">
				<app-admin-create-job></app-admin-create-job>
			</div>
		</div>
	`,
	styles: [`
		.btnCreate {
			width: 100%;
		}
		.row {
			margin-top: 2rem;
		}
	`]
})

export class AdminHomeComponent {
	constructor() {}
}
