import { Company } from './company.model';
import { Reference } from './reference.model';
import { Skill } from './skill.model';
import { Job } from './job.model';

export class JobsApplied {
	id: string;
	user_id: string;
	job_id: string;
	job: Job;
	form_status: string;
	validation_status: string;
	submission_status: string;
	acceptance_status: string;
	feedback_requested: boolean;
	description: string;
	company: Company;
	location: string;
	title: string;
	application_slots: number;
	remaining_slots: number;
	form_data: CandidateJobAppliedFormData;
	resume_urls: string[];
	createdAt: Date;
	updatedAt: Date;
	references_info: Reference[];
	feedback: any;
	reference_status: string;
	application_status: string;
	recruiter_feedback_requested: boolean;
	referee_feedback_requested: boolean;
	applied_by_candidate: boolean;
	approved_by_candidate: boolean;
}

export class CandidateJobAppliedFormData {
	reasonForLeaving: string;
	skills: Skill[];
	management: string;
	leadership: string;
	selfManagement: string;
	relationship: string;
	analytical: string;
	fitToJobReason: string;
	jobRelatedAchievements: string;
}
