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
import { ProfileUserInfoComponent } from './profile-user-info.component'; // For demo purposes
import { ProfileViewComponent } from './profile-view.component';
import { ThankYouViewComponent } from './thank-you-view.component';
import { JobButtonsComponent } from './job-buttons.component';
import { JobContentSideViewComponent } from './job-content-side-view.component';
// import { ProfileBasicInfoComponent } from './profile-basic-info.component';
// import { ProfileCurrentSalaryInfoComponent } from './profile-current-salary-info.component';
import { ApplicationConceptComponent } from './application-concept.component';
import { StarsComponent } from './stars.component';
import { SelectedJobSkillsComponent } from './selected-job-skills.component';
import { JobApplicationFormComponent } from './job-application-form.component';
import { ReferenceFormComponent } from './reference-form.component';
import { ShareButtonsModule } from 'ng2-sharebuttons';
import { RatingModule } from 'ng2-rating';

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
	ProfileUserInfoComponent, // For demo purposes
	ProfileViewComponent,
	JobButtonsComponent,
	JobContentSideViewComponent,
	// ProfileBasicInfoComponent,
	// ProfileCurrentSalaryInfoComponent,
	ApplicationConceptComponent,
	StarsComponent,
	SelectedJobSkillsComponent,
	JobApplicationFormComponent,
	ReferenceFormComponent,
	ThankYouViewComponent,
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		RouterModule,
		ReactiveFormsModule,
		ShareButtonsModule.forRoot(),
	],
	declarations: COMPONENTS,
	exports: COMPONENTS
})
export class ComponentsModule {
}
