import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '../reducers';
import { Job } from 'app/models/job.model';
import { FormGroup,	FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import { Application } from 'app/models/job-application.model';

@Component({
	selector: 'app-job-app-application-form-page2',
	templateUrl: 'job-application-form-page2.component.html',
	styleUrls: ['job-application-form-page2.component.css'],
})

export class JobApplicationFormPage2Component implements OnInit {
	@Input() referee: Application;

	@Output() editEvent = new EventEmitter<string>();
	@Output() addReferenceEvent = new EventEmitter<any>();
	@Output() saveReferenceEvent = new EventEmitter<any>();
	@Output() removeReferenceEvent = new EventEmitter<any>();

	refereeFormGroup: FormGroup;

	constructor(private fb: FormBuilder) {}

	ngOnInit() {
		this.refereeFormGroup = this.fb.group({

		});
	}

}
