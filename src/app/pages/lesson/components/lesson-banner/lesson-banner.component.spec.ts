import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonBannerComponent } from './lesson-banner.component';

describe('LessonBannerComponent', () => {
	let component: LessonBannerComponent;
	let fixture: ComponentFixture<LessonBannerComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [LessonBannerComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LessonBannerComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
