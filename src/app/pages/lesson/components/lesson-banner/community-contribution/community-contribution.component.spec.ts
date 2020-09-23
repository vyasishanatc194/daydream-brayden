import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityContributionComponent } from './community-contribution.component';

describe('CommunityContributionComponent', () => {
	let component: CommunityContributionComponent;
	let fixture: ComponentFixture<CommunityContributionComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CommunityContributionComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CommunityContributionComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
