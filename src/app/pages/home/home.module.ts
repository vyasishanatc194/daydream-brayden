import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LessonContainerModule } from 'src/app/shared/modules/lesson-container/lesson-container.module';
import { SliderCommunityModule } from 'src/app/shared/modules/slider-community/slider-community.module';
import { AuthModule } from '../auth/auth.module';

@NgModule({
	declarations: [HomeComponent],
	imports: [
		CommonModule,
		CarouselModule,
		AuthModule,
		LessonContainerModule,
		SliderCommunityModule,
		RouterModule
	]
})
export class HomeModule {}
