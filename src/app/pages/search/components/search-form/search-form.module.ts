import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { SearchFormComponent } from './search-form.component';
import { TopicsComponent } from './topics/topics.component';
import { CheckboxGroupComponent } from './checkbox-group/checkbox-group.component';
import { MostPopularComponent } from './most-popular/most-popular.component';
import { GradeRangeComponent } from './grade-range/grade-range.component';

@NgModule({
	declarations: [
		SearchFormComponent,
		TopicsComponent,
		CheckboxGroupComponent,
		MostPopularComponent,
		GradeRangeComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		TypeaheadModule.forRoot()
	],
	exports: [SearchFormComponent]
})
export class SerachFormModule {}
