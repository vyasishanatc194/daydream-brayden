import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonRightComponent } from './lesson-right.component';

describe('LessonRightComponent', () => {
	let component: LessonRightComponent;
	let fixture: ComponentFixture<LessonRightComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [LessonRightComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LessonRightComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
