import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonCardComponent } from './lesson-card/lesson-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [LessonCardComponent],
	imports: [CommonModule,RouterModule ],
	exports: [LessonCardComponent]
})
export class LessonCardModule {}
