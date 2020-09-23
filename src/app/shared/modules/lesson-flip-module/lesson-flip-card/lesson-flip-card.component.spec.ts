import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonFlipCardComponent } from './lesson-flip-card.component';

describe('LessonFlipCardComponent', () => {
	let component: LessonFlipCardComponent;
	let fixture: ComponentFixture<LessonFlipCardComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [LessonFlipCardComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LessonFlipCardComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
