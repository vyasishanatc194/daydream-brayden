import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonComponent } from './components/lesson/lesson.component';
import { LessonBannerComponent } from './components/lesson-banner/lesson-banner.component';
import { LessonTitleComponent } from './components/lesson-banner/lesson-title/lesson-title.component';
import { CommunityContributionComponent } from './components/lesson-banner/community-contribution/community-contribution.component';
import { LessonCountsComponent } from './components/lesson-banner/lesson-counts/lesson-counts.component';
import { LessonBottomComponent } from './components/lesson-right/lesson-bottom/lesson-bottom.component';
import { LessonLeftComponent } from './components/lesson-left/lesson-left.component';
import { LessonRightComponent } from './components/lesson-right/lesson-right.component';
import { TechnicalDetailsComponent } from './components/lesson-left/technical-details/technical-details.component';
import { LessonResourcesComponent } from './components/lesson-left/lesson-resources/lesson-resources.component';
import { LessonRightDetailComponent } from './components/lesson-right/lesson-right-detail/lesson-right-detail.component';

@NgModule({
	declarations: [
		LessonComponent,
		LessonBannerComponent,
		LessonTitleComponent,
		CommunityContributionComponent,
		LessonCountsComponent,
		LessonBottomComponent,
		LessonLeftComponent,
		LessonRightComponent,
		TechnicalDetailsComponent,
		LessonResourcesComponent,
		LessonRightDetailComponent
	],
	imports: [CommonModule],
	exports: [LessonComponent]
})
export class LessonModule {}
