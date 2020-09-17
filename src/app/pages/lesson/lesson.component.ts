import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Lesson } from 'src/app/model/lesson.model';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-lesson',
	templateUrl: './lesson.component.html',
	styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {
	currentPage = '';
	sticky: boolean = false;
	public lesson: Lesson[] = [];
	public apiUrl = environment.api_url;
	loadFlag: boolean = false;
	id: any;
 	sub: any;

	constructor(private event: EventService, 
		private router: Router,
		public api: ApiService,
		private route: ActivatedRoute
		) {
		const action_ob = {
			action: 'set_page',
			redirect_to: '',
			dataobj: { page: this.router.url }
		};
		this.event.globleEvent(action_ob);
	}

	ngOnInit(): void {
		this.loadFlag = true;
		this.sub = this.route.params.subscribe(params => {
			this.id = params['id'];
		 });
		 this.getLessonData(this.id);
	}

	getLessonData(id){
		this.api
		.getData('lessons/'+id, null)
		.toPromise()
		.then((res) => {
			this.lesson = res;
		});
	}

	ngOnDestroy() {
		this.sub.unsubscribe();
	}
	
}
