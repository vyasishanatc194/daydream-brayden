import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ISubscription } from 'rxjs/Subscription';
import { Lesson } from 'src/app/model/lesson.model';
import { ApiService } from 'src/app/services/API/api.service';
import { EventService } from 'src/app/services/event/event.service';

@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
	// seachForm : FormGroup;
	public inputSearch: any = null;
	public educatorModeOn: boolean = false;
	private subscription: ISubscription;
	public slides: Lesson[] = [];
	public slider: boolean = false;

	constructor(
		public api: ApiService,
		private router: Router,
		private event: EventService
	) {
		const actionOb = {
			action: 'set_page',
			redirect_to: '',
			dataobj: { page: this.router.url }
		};
		this.event.globalEvent(actionOb);
		this.inputSearch = localStorage.getItem('inputSearch');
	}

	ngOnInit(): void {
		// if educator mode on enable the submit lesson button
		this.subscription = this.event.currentData.subscribe((data: any) => {
			if (data.action === 'set_flag_mode') {
				this.educatorModeOn = data.dataobj.educatorModeOn;
			}
		});

		this.event.currentData.subscribe((e) => {
			if (e.action === 'search') this.getLessons((e.dataob as any).input);
		});

		this.getLessons();
	}

	private getLessons(e?) {
		if (e) {
			this.api
				.getData('lessons?title_contains=' + e, null)
				.toPromise()
				.then((res) => {
					this.slides = res;
				});
		} else {
			this.api
				.getData('lessons', null)
				.toPromise()
				.then((res) => {
					this.slides = res;
				});
		}
	}

	// on click toggle right side content section
	searchStatus: boolean = false;
	searchToggle($event) {
		this.searchStatus = $event;
	}

	// Unsubscribe event before leave component
	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
