import { Company } from './company.model';
import { Skill } from './skill.model';

export class Job {
	_id: string;
	title: string;
	createdAt: Date;
	job_type: string;
	employment_type: string;
	location: string;
	industry: string;
	company: Company;
	description: string;
	expertise: string;
	salary_from: string;
	salary_to: string;
	salary_currency: string;
	salary_negotiable: boolean;
	contact_name: string;
	contact_number: string;
	contact_email: string;
	responsibilities: any;
	ideal_talent: string;
	about_company: string;
	skills: Skill[];
	criteria: string;
	years_experience:	string;
	visa_passport_constraints: string;
	remaining_slots: number;
	application_slots: number;
	company_logo: any;
	employer_id: string;
	status: string;
	archived: boolean;
}
