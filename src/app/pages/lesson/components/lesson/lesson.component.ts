import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lesson } from 'src/app/model/lesson.model';
import { ApiService } from 'src/app/services/API/api.service';
import { EventService } from 'src/app/services/event/event.service';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-lesson',
	templateUrl: './lesson.component.html',
	styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {
	public lesson: Lesson[] = [];
	public apiUrl = environment.api_url;
	loadFlag: boolean = false;
	id: any;
	sub: any;

	constructor(
		private event: EventService,
		private router: Router,
		public api: ApiService,
		private route: ActivatedRoute
	) {
		const actionOb = {
			action: 'set_page',
			redirect_to: '',
			dataobj: { page: this.router.url }
		};
		this.event.globalEvent(actionOb);
	}

	ngOnInit(): void {
		this.loadFlag = true;
		this.sub = this.route.params.subscribe((params) => {
			this.id = params.id;
		});
		this.getLessonData(this.id);
	}

	getLessonData(id) {
		this.api
			.getData('lessons/' + id, null)
			.toPromise()
			.then((res) => {
				this.lesson = res;
			});
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}
}
