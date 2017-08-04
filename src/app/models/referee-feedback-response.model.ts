import { Job } from './job.model';

export class RefereeFeedbackResponse {
	candidate: Candidate;
	job: Job;
}

export class Candidate {
	id: string;
	emailAddress: string;
	firstName: string;
	lastName: string;
}
