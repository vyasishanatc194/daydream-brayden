import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-search-bar',
	templateUrl: './search-bar.component.html',
	styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
	searchOpen: boolean = false;

	constructor() {}

	ngOnInit(): void {}

	// Mobile searchbar show or hide
	toggleSearch() {
		if (this.searchOpen) {
			this.searchOpen = false;
		} else {
			this.searchOpen = true;
		}
	}

	// On search event
	search() {}
}
