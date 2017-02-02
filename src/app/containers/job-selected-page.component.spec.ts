import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {JobSelectedPageComponent} from './job-selected-page.component';

xdescribe('JobSelectedPageComponent', () => {
	let component: JobSelectedPageComponent;
	let fixture: ComponentFixture<JobSelectedPageComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [JobSelectedPageComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(JobSelectedPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
