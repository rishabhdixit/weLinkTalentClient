import { Profile } from './profile.model';

export interface User {
	id:      string;
	email:   string;
	profile: Profile;
	role: string;
	bookmark_ids: any[];
}
