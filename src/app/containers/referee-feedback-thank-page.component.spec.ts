import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefereeFeedbackThankPageComponent } from './referee-feedback-thank-page.component';

xdescribe('RefereeFeedbackThankPageComponent', () => {
	let component: RefereeFeedbackThankPageComponent;
	let fixture: ComponentFixture<RefereeFeedbackThankPageComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ RefereeFeedbackThankPageComponent ]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RefereeFeedbackThankPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
