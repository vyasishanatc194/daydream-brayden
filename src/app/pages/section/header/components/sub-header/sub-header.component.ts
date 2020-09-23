import { Component, OnInit } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { EventService } from 'src/app/services/event/event.service';

@Component({
	selector: 'app-sub-header',
	templateUrl: './sub-header.component.html',
	styleUrls: ['./sub-header.component.scss']
})
export class SubHeaderComponent implements OnInit {
	naveOpen: boolean = false;
	currentPage = '';
	subscription: ISubscription;

	constructor(private event: EventService) {
		// Receive event and data from another component
		this.subscription = this.event.currentData.subscribe((data: any) => {
			if (data.action == 'set_page') {
				this.currentPage = data.dataobj.page;
			}
		});
	}

	ngOnInit(): void {}

	// Mobile nav-bar show and hide
	toggleNav() {
		if (this.naveOpen) {
			this.naveOpen = false;
		} else {
			this.naveOpen = true;
		}
	}
}
