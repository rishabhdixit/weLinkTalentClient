import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { JobApplication } from '../../models/job-application.model';

const emptyRating: number = -10;
@Component({
	selector: 'app-stars',
	template: `
		<div class="row">
			<div *ngIf="!disableName" class="col-md-6">
				<h5>{{ skill }}</h5>
			</div>
			<div [ngClass]="getClass(disableName)">
				<ng-container *ngFor="let a of iterateableStarArray">
					<i (mouseover)="onMouseOver(a)"
					   (mouseleave)="onMouseLeave(a)"
					   (click)="isClicked(a, skill)"
					   [class.highlight]="isHighlighted(a)"
					   class="fa fa-star fa-2x"
					   aria-hidden="true"
					   [(ngModel)]="application.skills[skill]"
					   ngDefaultControl></i>
				</ng-container>
			</div>
		</div>
	`,
	styles: [`
		.highlight {
			color: yellow;
			cursor: pointer;
			-webkit-text-stroke-width: 1px;
			-webkit-text-stroke-color: black;
		}
		i:hover {
			color: yellow;
			cursor: pointer;
			-webkit-text-stroke-width: 1px;
			-webkit-text-stroke-color: black;
		}
		i {
			color: white;
			cursor: pointer;
			-webkit-text-stroke-width: 1px;
			-webkit-text-stroke-color: black;
		}
	`]
})

export class StarsComponent implements OnInit {

	@Input() noOfStars: number = 5;
	@Input() application: JobApplication;
	@Input() skill: any;
	@Input() disableName: boolean = false;
	@Input() index: number;
	@Input() currRating: number = emptyRating;
	@Output() newRating = new EventEmitter();

	iterateableStarArray: Array<any> = [];

	rating: number = emptyRating;
	clicked: boolean = false;

	constructor() { }

	ngOnInit() {
		this.application.skills = {};
		if (this.noOfStars > 0) {
			this.fillArray(this.noOfStars);
			if (this.currRating !== emptyRating) {
				this.rating = this.currRating - 1;
				this.clicked = true;
			}
		}
	}

	onMouseOver(index: number) {
		if (this.rating > emptyRating) {
			return false;
		}

		this.rating = index;
	}

	onMouseLeave() {
		if (!this.clicked) {
			this.rating = emptyRating;
		}
	}

	isClicked(index: number, skill: string) {
		if (index === this.rating && this.clicked) {
			this.rating = emptyRating;
			this.clicked = false;
			return false;
		}
		this.clicked = true;
		this.rating = index;
		this.application.skills[skill] = this.rating;
		this.newRating.emit(this.rating);
	}

	isHighlighted(index: number) {
		if (this.rating > index - 1) {
			return true;
		}
		return false;
	}

	fillArray(numStars: number) {
		for (let a = 0, len = numStars; a < len; a++) {
			this.iterateableStarArray.push(a);
		}
	}

	getClass(disableName) {
		if (disableName) {
			return 'col-md-12';
		}
		return 'col-md-6';
	}
}
