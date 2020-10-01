import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-lesson-resources',
	templateUrl: './lesson-resources.component.html',
	styleUrls: ['./lesson-resources.component.scss']
})
export class LessonResourcesComponent implements OnInit {
	@Input() documents: [];

	constructor() {}

	ngOnInit(): void {}
}
