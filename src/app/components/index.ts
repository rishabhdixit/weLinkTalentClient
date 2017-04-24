import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header.component';
import { ComponentNameComponent } from './footer.component';
import { JobFullBodyComponent } from './job-full-body.component';
import { JobFullHeaderComponent } from './job-full-header.component';
import { JobSearchComponent } from './job-search.component';
import { JobViewComponent } from './job-view.component';
import { LinkedinLoginComponent } from './linkedin-login.component';
import { LoginComponent } from './login.component';
import { OrSeperatorComponent } from './or-seperator.component';
import { PaginationComponent } from './pagination.component';
import { ProfileViewComponent } from './profile-view.component';
import { JobButtonsComponent } from './job-buttons.component';
import { JobFullSideComponent } from './job-full-side.component';
import { ShareButtonsModule } from "ng2-sharebuttons";

export const COMPONENTS = [
	HeaderComponent,
	ComponentNameComponent,
	JobFullBodyComponent,
	JobFullHeaderComponent,
	JobSearchComponent,
	JobViewComponent,
	LinkedinLoginComponent,
	LoginComponent,
	OrSeperatorComponent,
	PaginationComponent,
	ProfileViewComponent,
	JobButtonsComponent,
	JobFullSideComponent
];

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		RouterModule,
		ReactiveFormsModule,
		ShareButtonsModule.forRoot()
	],
	declarations: COMPONENTS,
	exports: COMPONENTS
})
export class ComponentsModule {
}
