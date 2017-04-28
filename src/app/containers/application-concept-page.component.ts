import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '../reducers';

@Component({
	selector: 'app-application-concept-page',
	template: `
	<div class="container">
		<div class="row container-fluid">
			<p>WeLink Talent was launched to share our recruitment expertise and our market insights with you.  
			We propose a truly consultative approach for organisations with a mid to long term strategy</p>
			<p>We believe linking skills, personality and potential to the right company will create value and synergies benefiting 
			to both the individual seeking for a new challenge and the organisation planning to grow and gain market share</p>
			<p>We believe in regular follow-up during the first 100 days to maximise a positive impact of your new talent acquisition.
			We support personal growth, a key to a successful team development and we propose individual coaching to accompany 
			the integration within the new organisation. Based on our expertise, we design a sourcing methodology that suits your search, 
			to attract the talent that suits your project with the goal to reach the ideal match. This gaol is based on the assessment of 
			skills, potential and personal ambition of our talent as well as the mutual benefits to joining your organisation.</p>
			<p>We link the right talent to the right organisation.</p>
		</div>
		<a href="/login"><button class="btn btn-primary nextButton">Next</button></a>
	</div>
	`,

	styles: [`
		.nextButton{
			float: right;
		}
	`],
})

export class ApplicationConceptPageComponent {
	constructor() {

	}
}
