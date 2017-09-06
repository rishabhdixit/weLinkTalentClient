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
	managementFeedback: string; // change into managementFeedback
	managementApproved: boolean; // change into managementApproved
	leadershipFeedback: string; // change into leadershipFeedback
	leadershipApproved: boolean; // change into leadershipApproved
	selfManagementFeedback: string; // change into selfManagementFeedback
	selfManagementApproved: boolean; // change into selfManagementApproved
	relationshipFeedback: string; // newly added
	relationshipApproved: boolean; // newly added
	analyticalFeedback: string; // newly added
	analyticalApproved: boolean; // newly added
	fitToJobReasonFeedback: string; // newly added
	firToJobReasonApproved: string; // newly added
	relatedAchievementFeedback: string; // change into relatedAchievementFeedback
	relatedAchievementApproved: boolean; // change into relatedAchievementApproved
	skillRatings: Skill[];
	referee_profile: Reference;
	approved_by_candidate: boolean;
	candidateRate: number;
	rehireCandidate: boolean;
	canBeContact: boolean;
}
