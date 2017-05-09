export class Application {
	constructor(
		public fileUpload:          any,
		public reasonForLeaving:    string,
		public basePerMonth:        string,
		public bonus:               string,
		public starRate:            any,
		public strength:            string,
		public improvements:        string,
		public achievements:        string,
		public management:          string,
		public reference: 			Reference[]
	) {}
}

export class Reference {
	constructor(
		public referenceID: 			number,
		public fname: 					string,
		public lname: 					string,
		public company: 				string,
		public title: 					string,
		public phone: 					string,
		public email: 					string,
		public relationship: 			string,
		public startYearOfWorking:		Date,
		public endYearOfWorking: 		Date,
		public companyTogether: 		string,
		public canContact: 				any,
	) {}
}
