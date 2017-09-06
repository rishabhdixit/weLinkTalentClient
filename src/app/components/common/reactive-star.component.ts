import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
const emptyRating: number = -10;
@Component({
	selector: 'app-reactive-star',
	template: `
	<div class="row">
		<div *ngIf="!disableName" class="col-md-6">
			<p class="labelWeight">{{skill}}</p>
		</div>
		<ng-container *ngFor="let a of iterableStarArray">
		<i (mouseover)="onMouseOver(a)" 
		   (mouseleave)="onMouseLeave(a)" 
		   (click)="isClicked(a)"
		   [class.highlight]="isHighlighted(a)"
		   class="fa fa-star fa-2x" 
		   aria-hidden="true"></i>
		</ng-container>
	</div>
	`,
	styles: [`
		.highlight {
			color: yellow;
			cursor: pointer;
			-webkit-text-stroke-width: 1px;
			-webkit-text-stroke-color: black;
		}
		.labelWeight {
			font-weight: bolder;
			margin-top: 5px;
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

export class ReactiveStarsComponent implements OnInit {

	@Input() noOfStars: number = 5;
	@Input() currRating: number = emptyRating;
	@Input() disableName: boolean = false;
	@Input() skill: string;
	@Input() listIndex: number;
	@Output() newRating = new EventEmitter<any>();

	iterableStarArray: Array<any> = [];

	rating: number = emptyRating;
	clicked: boolean = false;

	constructor() { }

	ngOnInit() {
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

	isClicked(index: number) {
		if (index === this.rating && this.clicked) {
			this.rating = emptyRating;
			this.clicked = false;
			return false;
		}
		this.clicked = true;
		this.rating = index;
		this.newRating.emit({ index: this.listIndex, value: (this.rating + 1) });
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
