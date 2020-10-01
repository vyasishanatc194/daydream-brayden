import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-lesson-left',
	templateUrl: './lesson-left.component.html',
	styleUrls: ['./lesson-left.component.scss']
})
export class LessonLeftComponent implements OnInit {
	@Input() lesson: any;

	public resources = [
		{
			document: 'Middle School Classroom Lesson'
		}
	];

	public alignDocuments = [
		{
			document: 'Middle School Classroom Lesson'
		},
		{
			document: 'NGSS Middle School'
		},
		{
			document: '21st Century Skills Middle School'
		},
		{
			document: 'CCSS Middle School'
		}
	];

	ngOnInit(): void {}
}
