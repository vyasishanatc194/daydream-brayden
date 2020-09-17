import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-content-library',
	templateUrl: './content-library.component.html',
	styleUrls: ['./content-library.component.scss']
})
export class ContentLibraryComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	searchStatus: boolean = false;
	activeFlipBox() {
		this.searchStatus = !this.searchStatus;
	}

	deactiveFlipBox() {
		this.searchStatus = !this.searchStatus;
	}
}
