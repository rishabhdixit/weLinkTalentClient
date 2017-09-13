import { Component, Input } from '@angular/core';
import { RefereeFeedbackResponse } from '../../models/referee-feedback-response.model';

@Component({
	selector: `app-referee-feedback-thank-view`,
	template: `
			<div class="row">
				<div class="col-md-12" style="text-align: center;">
					<p>Thank you for validating
						<strong>
							{{ refereeFeedback?.candidate?.firstName }} {{ refereeFeedback?.candidate?.lastName }}
						</strong>
						's application for
					</p>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12" style="text-align: center; margin-bottom: 3rem;">
					<p>
						<strong class="text-primary">
							{{ refereeFeedback?.job?.title }}
						</strong> - 
						<strong class="text-primary">
							{{ refereeFeedback?.job?.company?.name }}
						</strong>
					</p>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<p>Your validation will be used to evaluate the candidate's suitability for the role he/she has applied.</p>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<p>An email has been sent to the candidate to notify him/her of your completion of the application validation.</p>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<p>For any queries, feel free to contact us at talent@welinktalent.com.</p>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12" style="margin-bottom: 3rem;">
					<p>If you wish to edit the information you have entered, you may do so by clicking the button below
						or through the link that has been sent to you via email.</p>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12" style="text-align: center;">
					<a routerLink="/jobs"><button class="btn btn-primary btn-lg">Done</button></a>
				</div>
			</div>
	`,
	styles: [`
		.btn {
			border-radius: 0;
			background: #4D308E;
		}
	`],
})

export class RefereeFeedbackThankViewComponent {
	@Input() refereeFeedback: RefereeFeedbackResponse;

	constructor() {}
}
