import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-or-seperator',
	template: `
	<div class="omb_login">
			<div class="row omb_loginOr">
					<div class="col-md-12">
							<hr class="omb_hrOr">
							<span class="omb_spanOr">OR</span>
					</div>
			</div>
	</div>

	`,
	styles: [`
		.omb_login {
				text-align: center;
		}
		
		.omb_login .omb_socialButtons a {
			color: white; 
			opacity:0.9;
		}
		.omb_login .omb_socialButtons a:hover {
				color: white;
			opacity:1;    	
		}
		.omb_login .omb_loginOr {
			position: relative;
			font-size: 1.5em;
			color: #FFFF;
			margin-top: 1em;
			margin-bottom: 1em;
			padding-top: 0.5em;
			padding-bottom: 0.5em;
		}
		.omb_login .omb_loginOr .omb_hrOr {
			background-color: #FFFF;
			height: 1px;
			margin-top: 0px !important;
			margin-bottom: 0px !important;
		}
		.omb_login .omb_loginOr .omb_spanOr {
			display: block;
			position: absolute;
			left: 50%;
			top: -0.6em;
			margin-left: -1.5em;
			background-color: white;
			width: 3em;
			text-align: center;
		}			
	`]
})
export class OrSeperatorComponent {

	constructor() {
	}

}
