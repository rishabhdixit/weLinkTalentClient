import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as fromRoot from '../reducers';
import * as profile from '../actions/profile.action';
import * as ui from '../actions/ui.action';

@Component({
	selector: `app-home-page`,
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div class="container">
			<div class="container-fluid">
				<p>Something's here</p>
			</div>
		</div>
	`,
	styles: [``],
})

export class HomePageComponent {
	constructor() {}
}
