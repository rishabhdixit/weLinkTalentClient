import { Company } from './company.model';
import { Reference } from './reference.model';
import { Skill } from './skill.model';

export class CandidateJobsApplied {
	id: string;
	user_id: string;
	job_id: string;
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
	resume_url: string;
	createdAt: Date;
	updatedAt: Date;
	references_info: Reference[];
	feedback: any;
}

export class CandidateJobAppliedFormData {
	reasonForLeaving: string;
	basePerMonth: number;
	bonus: number;
	strength: string;
	improvements: string;
	achievements: string;
	management: string;
	skills: Skill[];
}
