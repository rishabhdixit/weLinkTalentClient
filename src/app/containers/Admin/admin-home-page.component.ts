import { Component } from 'angular2/core';

@Component({
	selector: 'app-admin-home-page',
	template: `
		<div class="container">
			<div class="row container-fluid">
				<app-admin-create-job></app-admin-create-job>
			</div>
		</div>
	`,
	styles: [``],
})

export class AdminHomePageComponent {
	constructor() {}
}
