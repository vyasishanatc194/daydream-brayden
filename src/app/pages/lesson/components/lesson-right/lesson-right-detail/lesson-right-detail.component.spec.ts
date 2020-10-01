import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonRightDetailComponent } from './lesson-right-detail.component';

describe('LessonRightDetailComponent', () => {
	let component: LessonRightDetailComponent;
	let fixture: ComponentFixture<LessonRightDetailComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [LessonRightDetailComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LessonRightDetailComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
