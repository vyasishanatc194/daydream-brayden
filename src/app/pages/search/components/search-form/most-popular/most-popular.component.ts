import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-most-popular',
	templateUrl: './most-popular.component.html',
	styleUrls: ['./most-popular.component.scss']
})
export class MostPopularComponent implements OnInit {
	public mostPopulars = [
		{
			name: 'Tag A',
			value: 'Tag A'
		},
		{
			name: 'Tag B',
			value: 'Tag B'
		},
		{
			name: 'Tag C',
			value: 'Tag C'
		},
		{
			name: 'Tag D',
			value: 'Tag D'
		},
		{
			name: 'Tag E',
			value: 'Tag E'
		}
	];

	constructor() {}

	ngOnInit(): void {}

	// toggle most popular tags class
	activateClass(popular) {
		popular.active = !popular.active;
	}

	// show all/less tags on click
	tagsShow: boolean = false;
	showAll() {
		this.tagsShow = !this.tagsShow;
	}
}
