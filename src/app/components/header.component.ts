import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	template: `
	<nav class="navbar navbar-default navbar-static-top">
		<div class="col-sm-11">
		</div>
		<div class="col-sm-1">
			<a routerLink="/login"> <span class="align-middle">Sign-In</span> </a>
		</div>
	</nav>	
	`,
	styles: [`
	.navbar-default {
		background-color: white;
		min-height:30px;
		margin-bottom: 5px;	
	}
`]})
export class HeaderComponent {
	constructor() {
	}
}
