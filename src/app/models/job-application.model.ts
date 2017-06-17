import { Reference } from './reference.model';

export class Application {
		id: string;
		files: any;
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
