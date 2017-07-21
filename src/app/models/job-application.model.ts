export class JobApplication {
	id: string;
	user_id: string;
	job_id: string;
	files: any;
	form_data: any;
	skills: any;

	// TODO - to be removed
	reasonForLeaving: string;
	strength: string;
	improvements: string;
	achievements: string;
	management: string;
	basePerMonth: number;
	bonus: number;
}

export class ApplicationDetails {
	reasonForLeaving: string;
	strength: string;
	improvements: string;
	achievements: string;
	management: string;
	skills: any;
	basePerMonth: number;
	bonus: number;
}
