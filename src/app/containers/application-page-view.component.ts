import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store, State } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromRoot from '../reducers';
import * as ui from '../actions/ui.action';

@Component({
	selector: 'app-application-page-view',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div class="container">
			<div class="container-fluid">
				<div class="row">
					<app-job-app-application-form-page></app-job-app-application-form-page>
				</div>
			</div>
		</div>
	`,

	styles: [``],
})

export class ApplicationPageViewComponent {

	constructor(private store: Store<fromRoot.State>) {}

}
