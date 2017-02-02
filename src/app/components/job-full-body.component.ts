import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../models/job.model';

@Component({
	selector: 'app-job-full-body',
	template: `
<div class="row">
    <div class="col-md-10">
        <dl>
            <dt>Description </dt>
            <dd>{{job.description}}</dd>
            <br>
            <dt> Skills  </dt>
            <dd>{{job.skills}}</dd>
        </dl>
        <hr>
    </div>
    <div class="col-md-2">&nbsp;</div>
</div>

<div class="row">
	<div class="col-md-10">
		 <dl class="dl-horizontal">
				<dt>Questions </dt>
				<dd>
					<ul>
							<li *ngFor="let question of questions">
								{{question}}
							</li>
					</ul>
				</dd>
		</dl>
		<hr>
	</div>
	<div class="col-md-2">&nbsp;</div>
</div>

<div class="row">
	<div class="col-md-10">
		 <dl class="dl-horizontal">
				<dt>Experience </dt>
				<dd>{{job.yearsExperience}}</dd>
				<dt> Type  </dt>
				<dd>{{job.type}}</dd>
		</dl>
	</div>
	<div class="col-md-2">&nbsp;</div>
</div>
	`,
	styles: []
})
export class JobFullBodyComponent {
	@Input() job: Job;
	constructor() {
	}

	get questions(){
		return ['3 to 8 years of experience in software development in financial environment?',
			'Experience in application server clustering, performance tuning and testing?',
			'Experience developing applications using components with Java (J2EE).?',
			'Experience working and administering with WebSphere applications in Unix (AIX)?',
			'Experience with databases like IBMDB2 or Oracle?' ];
	}
}
