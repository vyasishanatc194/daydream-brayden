import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-lesson-bottom',
	templateUrl: './lesson-bottom.component.html',
	styleUrls: ['./lesson-bottom.component.scss']
})
export class LessonBottomComponent implements OnInit {
	public techCards = [
		{
			card: [
				{
					content: 'open this lesson?'
				},
				{
					content: 'preview this lesson?'
				},
				{
					content: 'use this lesson with your learners?'
				}
			]
		},
		{
			card: [
				{
					content: 'enroll your learners in the lesson?'
				},
				{
					content: 'collect data on your learners?'
				},
				{
					content: 'monitor your learners’ progress?'
				},
				{
					content: 'integrate the lesson into your pre-existing online course?'
				}
			]
		},
		{
			card: [
				{
					content: 'customize the lesson for your learners?'
				},
				{
					content: 'enroll your learners in the customized version?'
				},
				{
					content:
						'share your customized version with the infiniscope Teaching Network?'
				}
			]
		}
	];

	constructor() {}

	ngOnInit(): void {}
}
