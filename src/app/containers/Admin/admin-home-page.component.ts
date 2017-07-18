import { Component } from '@angular/core';

@Component({
	selector: 'app-admin-home-page',
	template: `
		<div class="container">
			<div class="container-fluid">
				<app-admin-home-view></app-admin-home-view>
			</div>
		</div>
	`,
	styles: [``],
})

export class AdminHomePageComponent {
	constructor() {}
}
