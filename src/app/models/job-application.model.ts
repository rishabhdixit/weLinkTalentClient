export class JobApplication {
		id: string;
		user_id: string;
		job_id: string;
		files: any;
		reasonForLeaving: string;
		basePerMonth: string;
		bonus: string;
		strength: string;
		improvements: string;
		achievements: string;
		management: string;
		skills: any;
		form_data: ApplicationDetails;
}

export class ApplicationDetails {
	reasonForLeaving: string;
	basePerMonth: string;
	bonus: string;
	starRate: any;
	strength: string;
	improvements: string;
	achievements: string;
	management: string;
	skills: any;
}
