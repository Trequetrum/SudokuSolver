import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-grid-display',
	templateUrl: './grid-display.component.html',
	styleUrls: ['./grid-display.component.scss']
})
export class GridDisplayComponent implements OnInit {

	@Input() sudoku: Array<Array<Array<any>>>;

	constructor() { }

	ngOnInit(): void {
	}

}
