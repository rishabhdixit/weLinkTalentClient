import { JobApplication } from './job-application.model';
import { User } from './user.model';

export class RefereeFeedback {
	user: User;
	jobApplication: JobApplication;
	reasonForLeavingFeedback: string;
	reasonForLeavingApproved: boolean;
	skillRating: any;
	strengthFeedback: string;
	strengthApproved: boolean;
	improvementFeedback: string;
	improvementApproved: boolean;
	achievementFeedback: string;
	achievementApproved: boolean;
	managementStyleFeedback: string;
	managementStyleApproved: boolean;
}
