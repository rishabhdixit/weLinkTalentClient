import { Job } from './job.model';

export class Company {
	name: string;
	address: string;
	about: string;
	phone_numbers: string[];
	email: string;
	createdJobs: Job[];
	twitter_profile: string;
	linkedin_profile: string;
	logo: any;
}
