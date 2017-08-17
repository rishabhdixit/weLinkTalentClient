import { Skill } from './skill.model';
import { Position } from './position.model';

export class Profile {
	linkedinId: string;
	emailAddress: string;
	firstName: string;
	lastName: string;
	pictureUrl: string;
	headline: string;
	summary: string;
	id?: string;
	positions?: Position[];
	skills?: Skill[];

	birthDate: string;
	NRIC: string;
	singaporeVisa: string;
	visaValidity: string;
	noticePeriod: string;
	noticePeriodNegotioble: boolean;

	maritalStatus: string;
	mobileNumber: string;
	noOfChildren: number;

	salaryPerMonth: number;
	salaryBasis: any;

	bonusAmount: number;
	bonusCalc: string;

	allowance: number;
	allowanceDesc: string;

	incentives: any;
	vestingPeriod: string;
}
