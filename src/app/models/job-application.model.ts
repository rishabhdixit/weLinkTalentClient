export class JobApplication {
		id: string;
		user_id: string;
		job_id: string;
		files: any;
		form_data: ApplicationDetails;
		// skillRate: SkillRating[];
		skills: any;
}

export class ApplicationDetails {
	reasonForLeaving: string;
	strength: string;
	improvements: string;
	achievements: string;
	management: string;
	skills: any;
}

// export class SkillRating {
// 	skillName: string;
// 	rate: number;
// }
