import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { SearchComponent } from './search.component';
import { SearchFormComponent } from '../section/search-form/search-form.component';
import { ContentLibraryComponent } from '../section/content-library/content-library.component';
import { SliderCommunityModule } from 'src/app/shared/modules/slider-community/slider-community.module';
import { LessonContainerModule } from 'src/app/shared/modules/lesson-container/lesson-container.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';

@NgModule({
	declarations: [SearchComponent, SearchFormComponent, ContentLibraryComponent],
	imports: [
		CommonModule,
		CarouselModule,
		SliderCommunityModule,
		LessonContainerModule,
		FormsModule,
		ReactiveFormsModule,
		TypeaheadModule.forRoot()
	]
})
export class SerachModule {}
