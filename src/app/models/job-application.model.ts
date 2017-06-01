export class Application {
		fileUpload:          any;
		reasonForLeaving:    string;
		basePerMonth:        string;
		bonus:               string;
		starRate:            any;
		strength:            string;
		improvements:        string;
		achievements:        string;
		management:          string;
		reference: 			Reference[];
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
