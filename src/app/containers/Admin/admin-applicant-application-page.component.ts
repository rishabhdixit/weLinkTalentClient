import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../reducers';
import { User } from '../../models/user.model';
import { JobsApplied } from '../../models/jobs-applied.model';

@Component({
	selector: 'app-admin-applicant-application-page',
	template: `
		<div class="container">
			<div class="container-fluid">
				<app-candidate-profile-view [user]="user$ | async"></app-candidate-profile-view>
				<br/>
				<div class="row">
					<div class="col-md-10"><hr/></div>
				</div>
				<app-candidate-application-form-view
					[application]="application$ | async"></app-candidate-application-form-view>
				<br/>
				<div class="row">
					<div class="col-md-10"><hr/></div>
				</div>
				<app-referees-feedback-view
					[application]="application$ | async"></app-referees-feedback-view>
				<br/>
				<div class="row">
					<div class="col-md-10"><hr/></div>
				</div>
				<app-references-info-view
					[application]="application$ | async"></app-references-info-view>
			</div>
		</div>
	`,
	styles: [``]
})

export class AdminApplicantApplicationPageComponent {
	user$: Observable<User>;
	application$: Observable<JobsApplied>;

	constructor(private store: Store<fromRoot.State>) {
		this.user$ = this.store.select(fromRoot.getUserById);
		this.application$ = this.store.select(fromRoot.getJobApplication);
	}
}
