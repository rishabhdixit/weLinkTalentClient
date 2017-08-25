import { Skill } from './skill.model';
import { Position } from './position.model';
import { WorkExperience } from './work-experience.model';

export class Profile {
	linkedInId: string;
	emailAddress: string;
	firstName: string;
	lastName: string;
	pictureUrl: string;
	headline: string;
	summary: string;
	id?: string;

	birthDate: string;
	NRIC: string;
	singaporeVisa: string;
	visaValidity: string;
	noticePeriod: string;
	noticePeriodNegotiable: boolean;

	maritalStatus: string;
	mobileNumber: string;

	currentSalary: CurrentSalary;
	expectedSalary: ExpectedSalary;
	miscellaneous: Miscellaneous;

	positions?: Position[];
	workExperiences?: WorkExperience[];
	skills?: Skill[];
}

export abstract class Salary {
	currency: string;
	isOnExpatPackage: string;
}

export class CurrentSalary extends Salary {
	annualSalary: number;
	annualBonus: number;
	allowance: Allowance;
}

export class ExpectedSalary extends Salary {
	annualSalaryPackage: number;
}

export class Allowance {
	transportation: boolean;
	housing: boolean;
	schooling: boolean;
	health: boolean;
	others: boolean;
	otherAllowanceName: string;
	totalAllowance: number;
}

export class Miscellaneous {
	percentageTravelAccepted: string;
	drivingLicense: string;
}
