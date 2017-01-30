import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-pagination',
	template: `
<div class="col-md-12">
	<ul class="pagination pagination-sm">
		<li>
			<a href="#">Prev</a>
		</li>
		<li>
			<a href="#">1</a>
		</li>
		<li>
			<a href="#">2</a>
		</li>
		<li>
			<a href="#">3</a>
		</li>
		<li>
			<a href="#">4</a>
		</li>
		<li>
			<a href="#">5</a>
		</li>
		<li>
			<a href="#">Next</a>
		</li>
	</ul>
</div>
	`,
	styles: []
})
export class PaginationComponent {

	constructor() {
	}
}
