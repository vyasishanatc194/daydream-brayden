import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-lesson-right',
	templateUrl: './lesson-right.component.html',
	styleUrls: ['./lesson-right.component.scss']
})
export class LessonRightComponent implements OnInit {
	@Input() lesson: any;

	constructor() {}

	ngOnInit(): void {}
}
