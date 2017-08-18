import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Job } from '../../models/job.model';

@Component({
	selector: `app-application-concept`,
	template: `		
		<div class="col-md-12">
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
		<div class="col-md-12" style="margin-top:40px;">
			<div class="col-md-6 cancelButton">
				<a routerLink="/jobs"><button class="btn btn-default btn-lg btnCancel" style="margin-right:10px;">Cancel</button></a>
			</div>
			<div class="col-md-6 nextButton">
				<button class="btn btn-primary btn-lg applyBtn" (click)="applyButtonConcept()">Apply</button>
			</div>
		</div>
    `,

	styles: [`
		.cancelButton{
			float: left;
			text-align: right;
		}
		.nextButton{
			float: right;
		}
		.applyBtn{
			width: 113px;
			margin-left:10px;
			border-radius: 0;
			background: #57148D;
		}
		.btnCancel {
			border-radius: 0;
		}
	`],
})

export class ApplicationConceptComponent {
	@Input() job: Job;
	@Output() ApplyButtonConceptEvent = new EventEmitter<Job>();

	constructor() {}
	applyButtonConcept() {
		this.ApplyButtonConceptEvent.emit(this.job);
	}
}
