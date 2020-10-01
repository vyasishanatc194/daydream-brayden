import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-lesson-right-detail',
	templateUrl: './lesson-right-detail.component.html',
	styleUrls: ['./lesson-right-detail.component.scss']
})
export class LessonRightDetailComponent implements OnInit {
	@Input() lesson: any;

	ngOnInit(): void {}
}
