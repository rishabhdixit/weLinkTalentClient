import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {JobFullPageComponent} from './job-full-page.component';

xdescribe('JobFullPageComponent', () => {
	let component: JobFullPageComponent;
	let fixture: ComponentFixture<JobFullPageComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [JobFullPageComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(JobFullPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
