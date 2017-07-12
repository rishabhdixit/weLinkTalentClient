import { Profile } from './profile.model';

export interface User {
	id:      string;
	email:   string;
	profile: Profile;
	bookmark_ids: any[];
}
