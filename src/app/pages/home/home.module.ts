import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SliderNewestContentComponent } from '../section/slider-newest-content/slider-newest-content.component';
import { HomeComponent } from './components/home/home.component';
import { LessonContainerModule } from 'src/app/shared/modules/lesson-container/lesson-container.module';
import { SliderCommunityModule } from 'src/app/shared/modules/slider-community/slider-community.module';

@NgModule({
	declarations: [HomeComponent, SliderNewestContentComponent],
	imports: [
		CommonModule,
		CarouselModule,
		LessonContainerModule,
		SliderCommunityModule
	]
})
export class HomeModule {}
