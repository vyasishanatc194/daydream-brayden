import { Component, OnInit } from '@angular/core';

import { EventService } from 'src/app/services/event/event.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-educator-mode',
	templateUrl: './educator-mode.component.html',
	styleUrls: ['./educator-mode.component.scss']
})
export class EducatorModeComponent implements OnInit {
	public educatorModeOn: boolean = false;

	constructor(private event: EventService, private router: Router) {}

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
}
