export class Skill {
	constructor(
		public id:   string,
		public name: string,
	) {}
}

export class Position {
	constructor(
		public id:        string,
		public title:     string,
		public company:   any,
		public isCurrent: boolean,
		public location:  any,
		public startDate: any,
		public summary:   string,
	) {}
}

export class Profile {
	constructor(
		public id:           string,
		public emailAddress: string,
		public firstName:    string,
		public lastName:     string,
		public pictureUrl:   string,
		public headline:     string,
		public positions?:   Position[],
		public skills?:      Skill[],
	) {}
}
