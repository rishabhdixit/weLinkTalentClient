import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-pagination',
	template: `
	<div class="row">
		<div class="col-md-12">
		<hr>
			<nav aria-label="Page navigation example">
				<ul class="pagination">
					<li class="page-item"><a class="page-link" href="#">Previous</a></li>
					<li class="page-item"><a class="page-link" href="#">1</a></li>
					<li class="page-item"><a class="page-link" href="#">2</a></li>
					<li class="page-item"><a class="page-link" href="#">3</a></li>
					<li class="page-item"><a class="page-link" href="#">Next</a></li>
				</ul>
			</nav>
		</div>
	</div>
	`,
	styles: []
})
export class PaginationComponent {

	constructor() {
	}
}
