import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApplicationPageViewComponent } from './application-page-view.component';

xdescribe('ApplicationPageViewComponent', () => {
	let component: ApplicationPageViewComponent;
	let fixture: ComponentFixture<ApplicationPageViewComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ApplicationPageViewComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ApplicationPageViewComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
