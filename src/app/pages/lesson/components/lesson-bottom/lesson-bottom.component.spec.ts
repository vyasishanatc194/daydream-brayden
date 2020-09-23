import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonBottomComponent } from './lesson-bottom.component';

describe('LessonBottomComponent', () => {
	let component: LessonBottomComponent;
	let fixture: ComponentFixture<LessonBottomComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [LessonBottomComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LessonBottomComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
