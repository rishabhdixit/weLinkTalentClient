import { Component } from '@angular/core';

@Component({
	selector: 'app-admin-home-page',
	template: `
		<div class="container">
			<div class="container-fluid">
				<app-admin-create-job></app-admin-create-job>
			</div>
		</div>
	`,
	styles: [``],
})

export class AdminHomePageComponent {
	constructor() {}
}
