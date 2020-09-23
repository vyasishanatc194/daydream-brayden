import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonTitleComponent } from './lesson-title.component';

describe('LessonTitleComponent', () => {
	let component: LessonTitleComponent;
	let fixture: ComponentFixture<LessonTitleComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [LessonTitleComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LessonTitleComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
