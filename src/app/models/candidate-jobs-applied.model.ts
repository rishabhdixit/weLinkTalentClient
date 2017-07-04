import { Company } from './company.model';

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
}
