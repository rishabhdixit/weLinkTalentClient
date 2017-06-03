import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Job } from '../models/job.model';
import { NavigationEnd } from '@angular/router';

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
				<!--<a id="modal-705575" href="#modal-container-705575" role="button" data-toggle="modal">-->
				<a routerLink="/jobs"><button class="btn btn-default btn-lg" style="margin-right:10px;">Cancel</button></a>
				<!--</a>-->
				<div class="modal fade" id="modal-container-705575" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<h4 class="modal-title" id="myModalLabel">Reason for not applying</h4>
								<button type="button" class="close xbtn" data-dismiss="modal" aria-hidden="true">×</button>
							</div>
							<div class="modal-body" style="padding-top: 5px;">
								<textarea class="areaSize" rows="5" id="whynotApply" required></textarea>
							</div>
							<div class="modal-footer">							 
								<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button> 
								<a href="/jobs"><button type="button" class="btn btn-primary" (click)="alertMessage()">Send</button></a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-6 nextButton">
				<div>
					<button class="btn btn-primary btn-lg applyBtn" (click)="applyButtonConcept()">Apply?</button>
				</div>
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
		}
		.modal-body{
			padding-top: 1;
    		padding-bottom: 0;
		}
		.areaSize{
			width: 100%;
		}
		.xbtn{
			margin-top: -30px;
    		margin-right: -5px;
		}
	`],
})

export class ApplicationConceptComponent {
	@Input() job: Job;
	@Output() ApplyButtonConceptEvent = new EventEmitter<Job>();

	constructor() {}

	alertMessage() {
		alert('Thank you');
	}

	applyButtonConcept() {
		this.ApplyButtonConceptEvent.emit(this.job);
	}
}
