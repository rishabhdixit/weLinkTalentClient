import { Company } from './company.model';

export class WorkExperience {
	id: string;
	title: string;
	company: Company;
	isCurrent: boolean;
	address: string;
	startDate: Date;
	endDate: Date;
	summary: string;
	responsibilities: string;
}
