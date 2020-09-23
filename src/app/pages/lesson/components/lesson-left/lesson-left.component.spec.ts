import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonLeftComponent } from './lesson-left.component';

describe('LessonLeftComponent', () => {
	let component: LessonLeftComponent;
	let fixture: ComponentFixture<LessonLeftComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [LessonLeftComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LessonLeftComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
