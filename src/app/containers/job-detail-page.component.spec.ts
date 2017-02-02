import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {JobDetailPageComponent} from './job-detail-page.component';

xdescribe('JobDetailPageComponent', () => {
	let component: JobDetailPageComponent;
	let fixture: ComponentFixture<JobDetailPageComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [JobDetailPageComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(JobDetailPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
