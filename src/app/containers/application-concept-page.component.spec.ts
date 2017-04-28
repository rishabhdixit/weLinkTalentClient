import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {ApplicationConceptPageComponent} from './application-concept-page.component';

xdescribe('ApplicationConceptPageComponent', () => {
	let component: ApplicationConceptPageComponent;
	let fixture: ComponentFixture<ApplicationConceptPageComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ApplicationConceptPageComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(ApplicationConceptPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
