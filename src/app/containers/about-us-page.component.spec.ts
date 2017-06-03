import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {AboutUsPageComponent} from './about-us-page.component';

xdescribe('AboutUsPageComponent', () => {
	let component: AboutUsPageComponent;
	let fixture: ComponentFixture<AboutUsPageComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AboutUsPageComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AboutUsPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});