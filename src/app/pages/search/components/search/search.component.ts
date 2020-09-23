import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
	public input_search: any = null;
	public educatorModeOn: boolean = false;
	private subscription: ISubscription;
	public slides: Lesson[] = [];
	public slider: boolean = false;

	constructor(
		public api: ApiService,
		private route: ActivatedRoute,
		private router: Router,
		private event: EventService
	) {
		const action_ob = {
			action: 'set_page',
			redirect_to: '',
			dataobj: { page: this.router.url }
		};
		this.event.globalEvent(action_ob);
		this.input_search = localStorage.getItem('input_search');
	}

	ngOnInit(): void {
		// if educator mode on enable the submit lesson button
		this.subscription = this.event.currentData.subscribe((data: any) => {
			if (data.action === 'set_flag_mode') {
				this.educatorModeOn = data.dataobj.educatorModeOn;
			}
		});

		this.api
			.getData('lessons', null)
			.toPromise()
			.then((res) => {
				this.slides = [
					...res,
					...res,
					...res,
					...res,
					...res,
					...res,
					...res,
					...res,
					...res,
					...res
				];
			});
	}

	// on click toggle right side content section
	searchStatus: boolean = false;
	searchToggle($event) {
		this.searchStatus = $event;
	}
}