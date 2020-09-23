import {
	Component,
	OnInit,
	Input,
	ApplicationRef,
	ViewChild,
	ElementRef
} from '@angular/core';
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
	@Input() clipVertically: boolean = false;
	@Input() clipHorizontally: boolean = false;
	@ViewChild('lessonContainer') lessonContainer: ElementRef;
	public sliderIndex: number = 0;
	public sliderTransition: boolean = true;
	public sliderTransitionTime: number = 0.5;
	public selectedLesson: Lesson;
	public flipCardStyle: any;
	private flipping: boolean = false;

	constructor(private appRef: ApplicationRef) {}

	ngOnInit(): void {}

	public async openCard(e: any, lesson: Lesson, i: number) {
		if (this.flipping) return;
		delete this.selectedLesson;
		await this.appRef.tick();
		if (this.slider) i -= this.sliderIndex;
		const spacing = this.convertSpacing(this.getCardSpacing());
		const firstRow =
			spacing === 1
				? false
				: Math.floor(i / spacing) === 0 && this.clipVertically;
		const lastRow =
			spacing === 1
				? false
				: Math.floor(i / spacing) ===
						Math.floor((this.lessons.length - 1) / spacing) &&
				  this.clipVertically;
		const firstColumn =
			spacing === 1 ? false : i % spacing === 0 && this.clipHorizontally;
		const lastColumn =
			spacing === 1
				? false
				: i % spacing === spacing - 1 && this.clipHorizontally;
		// const cardW = e.srcElement.offsetHeight / 2;
		const cardH = e.srcElement.offsetWidth / 2;
		const left =
			spacing === 1 ? 50 : ((i % 4) * (1 / spacing) + 1 / (spacing * 2)) * 100;
		this.flipCardStyle = {
			top: lastRow
				? 'unset'
				: firstRow
				? '70px'
				: e.srcElement.offsetTop +
				  cardH +
				  (this.clipVertically && firstRow ? -cardH : 0) +
				  (this.clipVertically && lastRow ? cardH : 0) +
				  38 +
				  32 +
				  'px',
			bottom: lastRow ? '16px' : 'unset',
			left: lastColumn ? 'unset' : firstColumn ? '0px' : left + '%', // (e.srcElement.offsetLeft + cardW + ((this.clipHorizontally && firstColumn) ? - cardW : 0) + ((this.clipHorizontally && lastColumn) ? cardW : 0)) + 'px',
			right: lastColumn ? '0px' : 'unset',
			first: firstColumn,
			last: lastColumn,
			head: firstRow,
			foot: lastRow
		};
		this.selectedLesson = lesson;
	}

	public closeCard(e: any) {
		if (this.flipping) return;
		const isChildOf = (e: any, classes: string[]): boolean => {
			if (
				e.className &&
				classes.filter((c) => e.className.indexOf(c) >= 0).length > 0
			)
				return true;
			if (!e.parentElement) return false;
			return isChildOf(e.parentElement, classes);
		};
		if (!isChildOf(e.toElement, ['cardFrontContainer', 'cardBackContainer']))
			delete this.selectedLesson;
	}

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
		const width = window.innerWidth; // this.lessonContainer ? this.lessonContainer.nativeElement.offsetWidth : window.innerWidth;
		if (width > 992) return 25;
		else if (width > 768) return 50;
		else return 100;
	}

	public convertSpacing(spacing: number) {
		if (spacing === 100) return 1;
		if (spacing === 50) return 2;
		if (spacing === 25) return 4;
	}

	public updateFlipping(e: boolean) {
		this.flipping = e;
	}
}
