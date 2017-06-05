export class Skill {
	constructor(
		public id:   string,
		public name: string,
	) {}
}

export class Position {
	constructor(
		public id:        			string,
		public title:     			string,
		public company:   			any,
		public isCurrent: 			boolean,
		public location:  			any,
		public startDate: 			any,
		public endDate:				any,
		public summary:   			string,
		public responsibilities:	string[],
	) {}
}

export class Profile {
	linkedinId:   	string;
	emailAddress: 	string;
	firstName:    	string;
	lastName:     	string;
	pictureUrl:   	string;
	headline:     	string;
	summary:      	string;
	id?:          	string;
	positions?:   	Position[];
	skills?:      	Skill[];
	// Note : new added fields.

	birthDate: string;
	NRIC: number;
	email: string;
	singaporeVisa: string;
	noticePeriod: string;
	maritalStatus: string;
	mobile: string;
	children: string;
	validityEnd: string;
	negotiable: any;
	basePerMonth: number;
	bonus: number;
	allowance: number;
	incentives: any;
	bonusRecieved: any;
	calculation: string;
	description: string;
	vestingPeriod: string;

}

