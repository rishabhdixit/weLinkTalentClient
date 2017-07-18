import { Component } from '@angular/core';

@Component({
	selector: 'app-footer',
	template: `
		<footer>
			<div class="col-md-12">
				<div class="col-md-8" style="margin-top: 20%;">
					<img alt="We Link Talent" src="./assets/images/W.png" class="img-rounded"/>
					<div class="socialButton">
						<a href="https://plus.google.com/share.php?" target="_blank">
							<img alt="We Link Talent" src="./assets/images/google-plus-logo-button.png" 
								class="img-responsive socialButton"/>
						</a>
						<a href="https://www.facebook.com/share.php?" target="_blank">
							<img alt="We Link Talent" src="./assets/images/facebook-logo-button.png" 
								class="img-responsive socialButton betweenSpaces"/>
						</a>
						<a href="https://twitter.com/share.php?" target="_blank">
							<img alt="We Link Talent" src="./assets/images/twitter.png" class="img-responsive socialButton betweenSpaces"/>
						</a>
						<a href="https://www.linkedin.com/share.php?" target="_blank">
							<img alt="We Link Talent" src="./assets/images/linkedin-logo.png" 
								class="img-responsive socialButton betweenSpaces"/>
						</a>
					</div>
					<div>
						<p class="pull-left"> © 2017 by WeLinkTalent Pte Ltd</p>
						<p class="pull-right betweenSpaces">Engineered by VISEO</p>
					</div>
				</div>
			</div>
		</footer>
	`,
	styles: [`
		footer {
			margin-bottom: 0;
			height: 60px;
			margin-left: 25%;
		}
		.socialButton{
			width: 20%;
			float: right;
    		margin-top: 7%;
		}
		.betweenSpaces{
			margin-right:7px;
		}
	`]
})
export class FooterComponent {
	constructor() {}
}
