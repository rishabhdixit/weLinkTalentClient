import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApplicationReferenceFormPageComponent } from './application-reference-form-page.component';

xdescribe('ApplicationFormPageComponent', () => {
	let component: ApplicationReferenceFormPageComponent;
	let fixture: ComponentFixture<ApplicationReferenceFormPageComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ApplicationReferenceFormPageComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ApplicationReferenceFormPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
