import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import * as fromRoot from '../reducers';
import * as jobsAction from '../actions/jobs.action';

@Component({
	selector: 'app-job-full-page',
	template: `
<div class="container">
    <div class="container-fluid">
        <div class="col-md-12">
            <app-job-selected-page></app-job-selected-page>
        </div>
    </div>
</div>
  `,
	styles: [],
})
export class JobFullPageComponent implements OnDestroy {
	actionsSubscription$: Subscription;

	constructor(private store: Store<fromRoot.State>, route: ActivatedRoute) {
		this.actionsSubscription$ = route.params
			.select<string>('id')
			.map(id => new jobsAction.JobsSelectAction(id))
			.subscribe(store);
	}
	ngOnDestroy() {
		this.actionsSubscription$.unsubscribe();
	}
}

