import { Reference } from './reference.model';
import { JobApplication } from './job-application.model';

export class RefereeFeedback {
	reference: Reference;
	jobApplication: JobApplication;
	reasonForLeavingFeedback: string;
	salaryFeedback: string;
	skillRating: any;
	strengthFeedback: string;
	improvementFeedback: string;
	achievementFeedback: string;
	managementStyleFeedback: string;
}
