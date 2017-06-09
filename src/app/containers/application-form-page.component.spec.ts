import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ApplicationFormPageComponent } from './application-form-page.component';

xdescribe('ApplicationFormPageComponent', () => {
	let component: ApplicationFormPageComponent;
	let fixture: ComponentFixture<ApplicationFormPageComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ApplicationFormPageComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ApplicationFormPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
