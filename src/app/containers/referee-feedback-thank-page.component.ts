import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromRoot from '../reducers';
import { RefereeFeedbackResponse } from '../models/referee-feedback-response.model';

@Component({
	selector: `app-referee-feedback-thank-page`,
	template: `
		<div class="container">
			<div class="container-fluid">
				<div class="col-md-12">
					<app-referee-feedback-thank-view [refereeFeedback]="refereeFeedback$ | async"></app-referee-feedback-thank-view>
				</div>
			</div>
		</div>
	`,
	styles: [``],
})

export class RefereeFeedbackThankPageComponent {
	refereeFeedback$: Observable<RefereeFeedbackResponse>;

	constructor(private store: Store<fromRoot.State>) {
		this.refereeFeedback$ = this.store.select(fromRoot.getRefereeFeedbackResponse);
	}
}
