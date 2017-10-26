import { Component } from '@angular/core';

@Component({
	selector: 'app-footer',
	template: `
		<footer class="container">
			<div class="row">
				<div class="col-md-2">
					<img alt="We Link Talent" src="./assets/images/W.png" class="img-rounded"/>
				</div>
				<div class="col-md-5" style="padding-left: 0">
					<p style="font-size: 1.2rem;"><b>Info@welinktalent.com</b></p>
					<p>(C) 2016 by WeLinkTalent Pte Ltd</p>
					<p>EA Licence No 16S8272</p>
				</div>
				<div class="col-md-2"></div>
				<div class="col-md-3 socialButton pull-left">
					<a href="https://plus.google.com/share.php?" target="_blank">
						<img alt="We Link Talent" src="./assets/images/google-plus-logo-button.png" 
							class="img-responsive socialButton"/>
					</a>
					<a href="https://www.facebook.com/share.php?" target="_blank">
						<img alt="We Link Talent" src="./assets/images/facebook-logo-button.png" 
							class="img-responsive socialButton"/>
					</a>
					<a href="https://twitter.com/welinktalent" target="_blank">
						<img alt="We Link Talent" src="./assets/images/twitter.png" class="img-responsive socialButton"/>
					</a>
					<a href="https://www.linkedin.com/company/3566012/" target="_blank">
						<img alt="We Link Talent" src="./assets/images/linkedin-logo.png" 
							class="img-responsive socialButton"/>
					</a>
				</div>
			</div>
		</footer>
	`,
	styles: [`
		p {
			margin-bottom: 0%;
		}
		.socialButton{
			width: 15%;
		}
	`]
})
export class FooterComponent {
	constructor() {}
}
