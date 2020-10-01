import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Lesson } from 'src/app/model/lesson.model';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-lesson-flip-card',
	templateUrl: './lesson-flip-card.component.html',
	styleUrls: ['./lesson-flip-card.component.scss']
})
export class LessonFlipCardComponent implements OnInit {
	@Input() lesson: Lesson;
	@Input() left: boolean;
	@Input() right: boolean;
	@Input() head: boolean;
	@Input() foot: boolean;
	@Output() flipping = new EventEmitter();
	public flippedCard: boolean = false;
	public flipTime: number;
	public apiUrl: string = environment.api_url;

	ngOnInit(): void {}

	public reduceLanguages(lesson) {
		return lesson.languages.map((l) => l.name.substr(0, 2)).join(', ');
	}

	public toggleFlip() {
		this.flippedCard = !this.flippedCard;
		this.flipTime = Date.now();
		this.flipping.emit(true);
		setTimeout(() => this.flipping.emit(false), 1000);
	}
}
