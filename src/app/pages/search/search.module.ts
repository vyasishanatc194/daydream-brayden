import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { SliderCommunityModule } from 'src/app/shared/modules/slider-community/slider-community.module';
import { LessonContainerModule } from 'src/app/shared/modules/lesson-container/lesson-container.module';
import { SearchComponent } from './components/search/search.component';
import { SerachFormModule } from './components/search-form/search-form.module';

@NgModule({
	declarations: [SearchComponent],
	imports: [
		CommonModule,
		SliderCommunityModule,
		LessonContainerModule,
		SerachFormModule
	]
})
export class SerachModule {}
