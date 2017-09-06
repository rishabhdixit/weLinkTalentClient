import { FormControl } from '@angular/forms';

export class GlobalValidator {

	static mailFormat(control: FormControl): ValidationResult {
		let regex1 = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@/;
		let regex2 = /((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		let EMAIL_REGEXP = new RegExp(regex1.source + regex2.source);
		if (control.value !== '' && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
			return { 'incorrectMailFormat': true };
		}

		return null;
	}
}

interface ValidationResult {
	[key: string]: boolean;
}
