import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CandidateJobApplicationComponent } from './candidate-job-application.component';

xdescribe('CandidateJobApplicationComponent', () => {
	let component: CandidateJobApplicationComponent;
	let fixture: ComponentFixture<CandidateJobApplicationComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CandidateJobApplicationComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CandidateJobApplicationComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
