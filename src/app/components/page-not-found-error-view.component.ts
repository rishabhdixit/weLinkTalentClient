import { Component } from '@angular/core';

@Component({
	selector: 'app-page-not-found-error-view',
	template: `
		<div class="row">
			<div class="col-md-12">
				<h1>404</h1>
				<h4>PAGE NOT FOUND</h4>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12 divStyle">
				<p class="pStyle" style="color: red;">Sorry, the page you are looking for cannot be found</p>
				<p class="pStyle">You may have typed the address incorrectly or you may have entered the outdated address.</p>
			</div>
		</div>
		<div class="row">
			<div class="col-md-12 divStyle">
				<button class="btn btn-lg">Bring Me Home</button>
			</div>
		</div>
	`,
	styles: [`
		h1 {
			font-weight: bolder;
			font-size: 180px;
			text-align: center;
		}
		h4 {
			text-align: center;
		}
		.pStyle {
			font-weight: bolder;
			margin-bottom: 5px;
		}
		.row {
			margin-bottom: 2rem;
		}
		.btn {
			border-radius: 0;
			background: white;
			border-color: black;
		}
		.divStyle {
			text-align: center;
		}
	`],
})

export class PageNotFoundErrorViewComponent {
	constructor() {}
}
