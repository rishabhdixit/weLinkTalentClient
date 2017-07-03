import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { JobApplication } from '../models/job-application.model';

const emptyRating: number = -10;
@Component({
	selector: 'app-stars',
	template:`		
		<ng-container *ngFor="let a of iterableStarArray">
			<i (mouseover)="onMouseOver(a)"
				 (mouseleave)="onMouseLeave(a)"
				 (click)="isClicked(a, skill)"
				 [class.highlight]="isHighlighted(a)" 
				 class="fa fa-star fa-2x" 
				 aria-hidden="true" 
				 [(ngModel)]="application.skills[skill]" 
				 ngDefaultControl></i>
		</ng-container>
	`,
	styles:[
			`
			.highlight{
				color:yellow;
			}
			i:hover{
				cursor:pointer;
			}
		`
	]
})

export class StarsComponent implements OnInit {

	@Input() noOfStars: number = 5;
	@Input() application: JobApplication;
	@Input() skill: any;
	@Input() index: number;
	@Input() currRating: number = emptyRating;
	@Output() newRating = new EventEmitter();

	iterableStarArray: Array<any> = [];

	rating: number = emptyRating;
	clicked: boolean = false;

	constructor() {}

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
		console.log(this.currRating);
	}

	isHighlighted(index: number) {
		if (this.rating > index - 1) {
			return true;
		}
		return false;
	}

	fillArray(numStars: number) {
		for (let a = 0, len = numStars; a < len; a++) {
			this.iterableStarArray.push(a);
		}
	}
}
