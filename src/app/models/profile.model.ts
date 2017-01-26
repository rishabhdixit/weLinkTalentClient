export interface Position {
	title:     string;
	company:   any;
	isCurrent: boolean;
	location:  any;
	startDate: any;
	summary:   string;
}

export interface Profile {
	id:           string;
	emailAddress: string;
	firstName:    string;
	lastName:     string;
	pictureUrl:   string;
	headline:     string;
	positions:    Position[];
}
