import { JobApplication } from './job-application.model';
import { User } from './user.model';
import { Skill } from './skill.model';
import { Reference } from './reference.model';

export class RefereeFeedback {
	id: string;
	user: User;
	jobApplication: JobApplication;
	reasonForLeavingFeedback: string;
	reasonForLeavingApproved: boolean;
	strengthFeedback: string;
	strengthApproved: boolean;
	improvementFeedback: string;
	improvementApproved: boolean;
	achievementFeedback: string;
	achievementApproved: boolean;
	managementStyleFeedback: string;
	managementStyleApproved: boolean;
	skillRatings: Skill[];
	referee_profile: Reference;
	approved_by_candidate: boolean;
}
