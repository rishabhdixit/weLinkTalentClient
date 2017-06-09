import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '../reducers';

@Component({
	selector: 'app-about-us-page',
	template: `
		<div class="container" xmlns="http://www.w3.org/1999/html">
			<div class="row container-fluid">
				<!--<p>WeLink Talent was launched to share our recruitment expertise and our market insights with you.  -->
				<!--We propose a truly consultative approach for organisations with a mid to long term strategy</p>-->
				<!--<p>We believe linking skills, personality and potential to the right company will create value and synergies benefiting -->
				<!--to both the individual seeking for a new challenge and the organisation planning to grow and gain market share</p>-->
				<!--<p>We believe in regular follow-up during the first 100 days to maximise a positive impact of your new talent acquisition.-->
				<!--We support personal growth, a key to a successful team development and we propose individual coaching to accompany -->
				<!--the integration within the new organisation. Based on our expertise, we design a sourcing methodology that suits your search, -->
				<!--to attract the talent that suits your project with the goal to reach the ideal match. This gaol is based on the assessment of -->
				<!--skills, potential and personal ambition of our talent as well as the mutual benefits to joining your organisation.</p>-->
				<!--<p>We link the right talent to the right organisation.</p>-->
				<!--<div class="col-md-12">-->
					<!--<p>References: </p>-->
					<!--<form>-->
						<!--<div class="col-md-6">-->
							<!--<div class="form-group">-->
								<!--<label>Name: </label>-->
								<!--<p class="pStyle">Philip Andrew Pulgade</p>-->
							<!--</div>-->
							<!--<div class="form-group">-->
								<!--<label>Current Company: </label>-->
								<!--<p class="pStyle">CompanyName</p>-->
							<!--</div>-->
							<!--<div class="form-group">-->
								<!--<label>Current Title: </label>-->
								<!--<p class="pStyle">Last Position</p>-->
							<!--</div>-->
						<!--</div>-->
						<!--<div class="col-md-6">-->
							<!--<div class="form-group">-->
								<!--<label>Mobile Phone: </label>-->
								<!--<p class="pStyle">+639079153561</p>-->
							<!--</div>-->
							<!--<div class="form-group">-->
								<!--<label>Email: </label>-->
								<!--<p class="pStyle">andrew.pulgade@gmail.com</p>-->
							<!--</div>-->
							<!--<div class="form-group">-->
								<!--<label>Professional relationship with the referee: </label>-->
								<!--<p class="pStyle">Mentor</p>-->
							<!--</div>-->
						<!--</div>-->
						<!--<div class="form-group">-->
							<!--<label>When did you work together? </label>-->
							<!--<p class="pStyle">From January 2016 To December 2017</p>-->
						<!--</div>-->
						<!--<div class="form-group">-->
							<!--<label>In which company, did you work together: </label>-->
							<!--<p class="pStyle">CompanyName</p>-->
						<!--</div>-->
						<!--<div class="form-group">-->
							<!--<label>Can we contact this reference? </label>-->
							<!--<p class="pStyle">Yes</p>-->
						<!--</div>-->
					<!--</form>-->
				<!--</div>-->
				<!--<app-selected-job-skills></app-selected-job-skills>-->
				<app-reference-form></app-reference-form>
			</div>
	</div>
  `,
	styles: [`
		.pStyle {
			float: right;
		}
	`],
})
export class AboutUsPageComponent {

	constructor() {	}

}
