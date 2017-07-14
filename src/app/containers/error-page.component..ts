import { Component } from '@angular/core';

@Component({
	selector: 'app-error-page',
	template: `
		<div class="container">
			<div class="container-fluid">
				<app-page-not-found-error-view></app-page-not-found-error-view>
			</div>
		</div>
	`,
	styles: [`
		.container {
			padding-top: 100px;
		}
	`],
})
export class ErrorPageComponent {

	constructor() {	}

}
