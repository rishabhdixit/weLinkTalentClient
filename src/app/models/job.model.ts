export class Job {
	_id:              	string;
	title:           	string;
	createdAt:			string;
	employment_type: 	string;
	location: 			string;
	industry: 			string;
	company:			{};
	expertise: 			string;
	salary_from: 		string;
	salary_to: 			string;
	salary_currency:	string;
	contact_name: 		string;
	contact_number: 	string;
	contact_email: 		string;
	responsibilities: 	any;
	ideal_talent: 		string;
	about_company: 		string;
	skills: 			string[];
	criteria: 			string;
	years_experience:	string;
	visa_passport_constraints:	string;
}
