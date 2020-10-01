import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/services/event/event.service';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
	public educatorModeOn: boolean = false;
	currentPage = '';

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private event: EventService
	) {
		// Receive event and data from another component
		this.event.currentData.subscribe((data: any) => {
			if (data.action === 'set_flag_mode') {
				this.educatorModeOn = data.dataobj.educatorModeOn;
			}
		});
	}

	ngOnInit(): void {}

	// On change mode
	toggleMode() {
		if (this.educatorModeOn) {
			this.educatorModeOn = false;
		} else {
			this.educatorModeOn = true;
		}
		const ob = {
			action: 'set_flag_mode',
			dataobj: { educatorModeOn: this.educatorModeOn, page: this.router.url }
		};
		this.event.globalEvent(ob);
	}

	// Redirect to another route or page
	gotoRoute(route: string) {
		this.currentPage = route;
		this.router.navigate(['/' + route]);
	}
}
