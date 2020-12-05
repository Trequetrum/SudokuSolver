import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-grid-entry',
	templateUrl: './grid-entry.component.html',
	styleUrls: ['./grid-entry.component.scss']
})
export class GridEntryComponent implements OnInit {

	@Input() vals: number[];

	display: number[];

	constructor() { }

	ngOnInit(): void {
		for (let i = 1; i < 9; i++) {

		}
	}

}
