import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefereeFeedbackPageComponent } from './referee-feedback-page.component';

xdescribe('RefereeFeedbackPageComponent', () => {
	let component: RefereeFeedbackPageComponent;
	let fixture: ComponentFixture<RefereeFeedbackPageComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [ RefereeFeedbackPageComponent ]
		})
		.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RefereeFeedbackPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should be created', () => {
		expect(component).toBeTruthy();
	});
});
