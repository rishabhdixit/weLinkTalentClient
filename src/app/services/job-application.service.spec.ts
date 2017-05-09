/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JobApplicationService } from './job-application.service';

xdescribe('ProfileService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [JobApplicationService]
		});
	});

	it('should ...', inject([JobApplicationService], (service: JobApplicationService) => {
		expect(service).toBeTruthy();
	}));
});
