import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderNewestContentComponent } from './slider-newest-content.component';

describe('SliderNewestContentComponent', () => {
	let component: SliderNewestContentComponent;
	let fixture: ComponentFixture<SliderNewestContentComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SliderNewestContentComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SliderNewestContentComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
