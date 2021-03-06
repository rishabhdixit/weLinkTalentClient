import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './common/header.component';
import { FooterComponent } from './common/footer.component';
import { JobContentViewComponent } from './job/job-content-view.component';
import { JobContentHeaderViewComponent } from './job/job-content-header-view.component';
import { JobSearchComponent } from './job/job-search.component';
import { JobViewComponent } from './job/job-view.component';
import { LinkedinLoginComponent } from './common/linkedin-login.component';
import { LoginComponent } from './common/login.component';
import { OrSeperatorComponent } from './common/or-seperator.component';
import { ProfileViewComponent } from './profile/profile-view.component';
import { ThankYouViewComponent } from './job-application/thank-you-view.component';
import { JobButtonsComponent } from './job/job-buttons.component';
import { JobContentSideViewComponent } from './job/job-content-side-view.component';
import { ApplicationConceptComponent } from './job-application/application-concept.component';
import { StarsComponent } from './common/stars.component';
import { ReferenceFormComponent } from './job-application/reference-form.component';
import { CandidateJobApplicationFormComponent } from './job-application/candidate-job-application-form.component';
import { RefereeFeedbackThankViewComponent } from './referee/referee-feedback-thank-view.component';
import { JobsAppliedViewComponent } from './job-applied/jobs-applied-view.component';
import { ReactiveStarsComponent } from './common/reactive-star.component';
import { BookmarkJobViewComponent } from './bookmark-job-view.component';
import { JobAppliedDetailViewComponent } from './job-applied/job-applied-detail-view.component';
import { JobAppliedFeedbackViewComponent } from './job-applied/job-applied-feedback-view.component';
import { PageNotFoundErrorViewComponent } from './common/page-not-found-error-view.component';
import { CreateJobFormComponent } from './job/create-job-form.component';
import { EditJobFormComponent } from './job/edit-job-form.component';
import { JobCreatedViewComponent } from './job/job-created-view.component';
import { RecordNotFoundViewComponent } from './common/record-not-found-view.component';
import { AdminAllJobsApplicationsComponent } from './admin-all-jobs-applications.component';
import { ApplicationForHeaderComponent } from './common/application-for-header.component';
import { CandidateProfileViewComponent } from './admin/candidate-profile-view.component';
import { CandidateApplicationFormViewComponent } from './admin/candidate-application-form-view.component';
import { RefereesFeedbackViewComponent } from './admin/referee-feedback-view.component';
import { ReferencesInfoViewComponent } from './admin/references-info-view.component';
import { RefereeFeedbackComponent } from './referee/referee-feedback.component';

export const COMPONENTS = [
	HeaderComponent,
	FooterComponent,
	JobContentViewComponent,
	JobContentHeaderViewComponent,
	JobSearchComponent,
	JobViewComponent,
	LinkedinLoginComponent,
	LoginComponent,
	OrSeperatorComponent,
	ProfileViewComponent,
	JobButtonsComponent,
	JobContentSideViewComponent,
	ApplicationConceptComponent,
	StarsComponent,
	ReferenceFormComponent,
	ThankYouViewComponent,
	CandidateJobApplicationFormComponent,
	RefereeFeedbackThankViewComponent,
	JobsAppliedViewComponent,
	ReactiveStarsComponent,
	BookmarkJobViewComponent,
	PageNotFoundErrorViewComponent,
	JobAppliedDetailViewComponent,
	JobAppliedFeedbackViewComponent,
	CreateJobFormComponent,
	EditJobFormComponent,
	JobCreatedViewComponent,
	RecordNotFoundViewComponent,
	AdminAllJobsApplicationsComponent,
	ApplicationForHeaderComponent,
	CandidateProfileViewComponent,
	CandidateApplicationFormViewComponent,
	RefereesFeedbackViewComponent,
	ReferencesInfoViewComponent,
	RefereeFeedbackComponent,
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
