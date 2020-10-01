import { Component, OnInit, Input } from '@angular/core';
import { Lesson } from 'src/app/model/lesson.model';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-lesson-card',
	templateUrl: './lesson-card.component.html',
	styleUrls: ['./lesson-card.component.scss']
})
export class LessonCardComponent implements OnInit {
	@Input() lesson: Lesson;
	@Input() right: boolean = false;
	@Input() left: boolean = false;
	public apiUrl = environment.api_url;
	public openCard: boolean = false;
	public flippedCard: boolean = false;
	private flipTime: number = 0;

	ngOnInit(): void {}

	public closeCard(e) {
		if (Date.now() - this.flipTime <= 500) return;
		const rollBack = (element) => {
			if (
				element.classList &&
				(element.classList.contains('cardFrontContainer') ||
					element.classList.contains('cardBackContainer'))
			)
				return true;
			if (element.parentElement) return rollBack(element.parentElement);
			else return false;
		};
		if (!rollBack(e.toElement)) this.openCard = false;
	}

	public reduceLanguages(lesson) {
		return lesson.languages.map((l) => l.name.substr(0, 2)).join(', ');
	}

	public toggleFlip() {
		this.flippedCard = !this.flippedCard;
		this.flipTime = Date.now();
	}
}
