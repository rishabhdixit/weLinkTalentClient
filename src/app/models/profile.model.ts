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
	constructor(
		public linkedinId:   	string,
		public emailAddress: 	string,
		public firstName:    	string,
		public lastName:     	string,
		public pictureUrl:   	string,
		public headline:     	string,
		public summary:      	string,
		public id?:          	string,
		public positions?:   	Position[],
		public skills?:      	Skill[],
	) {}
}
