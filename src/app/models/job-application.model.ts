export class JobApplication {
	id: string;
	_id: string;
	user_id: string;
	job_id: string;
	files: any;
	form_data: any;
	skills: any;
	availability: string;
	status: string;
	contacted: boolean;
	recruiter_reviewed: boolean;
	recruiter_comment: string;
	resume_urls: string[];
	createdAt: Date;
	updatedAt: Date;

	// TODO - to be removed
	reasonForLeaving: string;
	management: string; // new
	leadership: string; // new
	selfManagement: string; // new
	relationship: string; // new
	analytical: string; // new
	fitToJobReason: string; // new
	jobRelatedAchievements: string; // new
}

export class ApplicationDetails {
	reasonForLeaving: string;
	management: string;
	leadership: string;
	selfManagement: string;
	relationship: string;
	skills: any;
	analytical: string;
	fitToJobReason: string;
	jobRelatedAchievements: string;
}
