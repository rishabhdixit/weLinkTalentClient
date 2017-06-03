export class Application {
		id: string;
		file: any;
		reasonForLeaving: string;
		basePerMonth: string;
		bonus: string;
		starRate: any;
		strength: string;
		improvements: string;
		achievements: string;
		management: string;
		reference: Reference[];
}

export class Reference {
		referenceID: number;
		fname: string;
		lname: string;
		company: string;
		title: string;
		phone: string;
		email: string;
		relationship: string;
		startYearOfWorking:	Date;
		endYearOfWorking: Date;
		companyTogether: string;
		canContact: any;
}
