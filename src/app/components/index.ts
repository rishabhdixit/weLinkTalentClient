import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';
import { ComponentNameComponent } from './footer.component';
import { JobContentViewComponent } from './job-content-view.component';
import { JobContentHeaderViewComponent } from './job-content-header-view.component';
import { JobSearchComponent } from './job-search.component';
import { JobViewComponent } from './job-view.component';
import { LinkedinLoginComponent } from './linkedin-login.component';
import { LoginComponent } from './login.component';
import { OrSeperatorComponent } from './or-seperator.component';
import { ProfileUserInfoComponent } from './profile-user-info.component';
import { ProfileViewComponent } from './profile-view.component';
import { ThankYouViewComponent } from './thank-you-view.component';
import { JobButtonsComponent } from './job-buttons.component';
import { JobContentSideViewComponent } from './job-content-side-view.component';
import { ApplicationConceptComponent } from './application-concept.component';
import { StarsComponent } from './stars.component';
import { RefereeFeedbackFormComponent } from './referee-feedback-form.component';
import { ReferenceFormComponent } from './reference-form.component';
import { RefereeFeedbackApplicationViewComponent } from './referee-feedback-application-view.component';
import { CandidateJobApplicationFormComponent } from './candidate-job-application-form.component';
import { RefereeFeedbackThankViewComponent } from './referee-feedback-thank-view.component';
import { CandidateJobsAppliedViewComponent } from './candidate-jobs-applied-view.component';
import { ReactiveStarsComponent } from './reactive-star.component';
import { CandidateBookmarkJobViewComponent } from './candidate-bookmark-job-view.component';
import { PageNotFoundErrorViewComponent } from './page-not-found-error-view.component';
import { CandidateJobAppliedDetailViewComponent } from './candidate-job-applied-detail-view.component';
import { CandidateJobAppliedFeedbackViewComponent } from './candidate-job-applied-feedback-view.component';

import { AdminHomeComponent } from './Admin/admin-home.component';
import { AdminHeaderComponent } from './Admin/admin-header.component';
import { AdminCreateJobComponent } from './Admin/admin-create-job.component';

export const COMPONENTS = [
	HeaderComponent,
	ComponentNameComponent,
	JobContentViewComponent,
	JobContentHeaderViewComponent,
	JobSearchComponent,
	JobViewComponent,
	LinkedinLoginComponent,
	LoginComponent,
	OrSeperatorComponent,
	ProfileUserInfoComponent,
	ProfileViewComponent,
	JobButtonsComponent,
	JobContentSideViewComponent,
	ApplicationConceptComponent,
	StarsComponent,
	RefereeFeedbackFormComponent,
	ReferenceFormComponent,
	ThankYouViewComponent,
	RefereeFeedbackApplicationViewComponent,
	CandidateJobApplicationFormComponent,
	RefereeFeedbackThankViewComponent,
	CandidateJobsAppliedViewComponent,
	ReactiveStarsComponent,
	CandidateBookmarkJobViewComponent,
	PageNotFoundErrorViewComponent,
	AdminHeaderComponent,
	AdminHomeComponent,
	AdminCreateJobComponent,
	CandidateJobAppliedDetailViewComponent,
	CandidateJobAppliedFeedbackViewComponent
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		RouterModule,
		ReactiveFormsModule,
	],
	declarations: COMPONENTS,
	exports: COMPONENTS
})
export class ComponentsModule {
}
