import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-lesson-banner',
	templateUrl: './lesson-banner.component.html',
	styleUrls: ['./lesson-banner.component.scss']
})
export class LessonBannerComponent implements OnInit {
	public apiUrl = environment.api_url;
	@Input() lesson: any;

	constructor() {}

	ngOnInit(): void {}
}
