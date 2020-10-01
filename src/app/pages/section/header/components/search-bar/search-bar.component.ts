import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event/event.service';

@Component({
	selector: 'app-search-bar',
	templateUrl: './search-bar.component.html',
	styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
	searchOpen: boolean = false;
	public searchInput: string;

	constructor(private event: EventService) {}

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
	search(e?: any) {
		if (e && e.key !== 'Enter') return;
		this.event.globalEvent({
			action: 'search',
			dataob: {
				input: this.searchInput
			}
		});
	}
}
