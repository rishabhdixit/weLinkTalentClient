import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApplicationPageView2Component } from './application-page-view2.component';

xdescribe('ApplicationPageViewComponent', () => {
	let component: ApplicationPageView2Component;
	let fixture: ComponentFixture<ApplicationPageView2Component>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ApplicationPageView2Component]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ApplicationPageView2Component);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
