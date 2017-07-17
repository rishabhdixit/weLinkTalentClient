import { Component } from '@angular/core';

@Component({
	selector: 'app-admin-home-page',
	template: `
		<div class="container">
			<div class="container-fluid">
				<div class="row">
					<div class="col-md-12">
						<button class="btn btn-primary" (click)="onClick()">Create a Job</button>
					</div>
				</div>
				<div *ngIf="clicked">
					<app-admin-create-job></app-admin-create-job>
				</div>
			</div>
		</div>
	`,
	styles: [``],
})

export class AdminHomePageComponent {
	clicked: boolean = false;
	constructor() {}

	onClick() {
		return this.clicked = true;
	}
}
