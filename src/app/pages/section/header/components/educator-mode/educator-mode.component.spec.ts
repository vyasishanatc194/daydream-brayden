import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducatorModeComponent } from './educator-mode.component';

describe('EducatorModeComponent', () => {
	let component: EducatorModeComponent;
	let fixture: ComponentFixture<EducatorModeComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [EducatorModeComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EducatorModeComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
