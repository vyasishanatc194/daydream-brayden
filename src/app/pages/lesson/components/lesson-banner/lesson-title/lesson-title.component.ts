import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-lesson-title',
	templateUrl: './lesson-title.component.html',
	styleUrls: ['./lesson-title.component.scss']
})
export class LessonTitleComponent implements OnInit {
	@Input() title: any;
	@Input() createdAt: any;

	ngOnInit(): void {}
}
