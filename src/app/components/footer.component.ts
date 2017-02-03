import { Component } from '@angular/core';

@Component({
	selector: 'app-footer',
	template: `
		<footer>
			WelinkTalent © 2017
		</footer>
	`,
	styles: [`
		footer {
			margin-top: 100px;
			height: 60px;
			text-align: center;
		}
	`]
})
export class ComponentNameComponent {
	constructor() {}
}
