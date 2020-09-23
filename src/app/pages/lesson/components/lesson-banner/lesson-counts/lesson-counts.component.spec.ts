import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonCountsComponent } from './lesson-counts.component';

describe('LessonCountsComponent', () => {
	let component: LessonCountsComponent;
	let fixture: ComponentFixture<LessonCountsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [LessonCountsComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LessonCountsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
