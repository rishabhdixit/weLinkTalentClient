import { Reference } from './reference.model';

export class JobApplication {
		id: string;
		user_id: string;
		job_id: string;
		files: any;
		reasonForLeaving: string;
		basePerMonth: string;
		bonus: string;
		starRate: any;
		strength: string;
		improvements: string;
		achievements: string;
		management: string;
		reference: Reference[];
}
