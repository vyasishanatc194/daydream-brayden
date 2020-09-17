import { Component, OnInit, Input } from '@angular/core';
import { Lesson } from 'src/app/model/lesson.model';

@Component({
	selector: 'app-lesson-container',
	templateUrl: './lesson-container.component.html',
	styleUrls: ['./lesson-container.component.scss']
})
export class LessonContainerComponent implements OnInit {
	@Input() title: string;
	@Input() lessons: Lesson[];
	@Input() slider: boolean = true;
	public sliderIndex: number = 0;
	public sliderTransition: boolean = true;
	public sliderTransitionTime: number = 0.5;

	constructor() {}

	ngOnInit(): void {}

	public async moveSlider(dir: boolean) {
		if (this.sliderIndex > this.lessons.length - 1) {
			this.sliderTransition = false;
			this.sliderIndex -= this.lessons.length;
			await new Promise((resolve) => setTimeout(() => resolve(), 0));
			this.sliderTransition = true;
		}
		this.sliderIndex += dir ? 1 : -1;
	}

	public getLessons(): Lesson[] {
		return [...this.lessons, ...this.lessons.slice(0, 4)];
	}

	public getCardSpacing() {
		if (window.innerWidth > 992) return 25;
		else if (window.innerWidth > 768) return 50;
		else return 100;
	}
}
