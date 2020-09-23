import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonFlipCardComponent } from './lesson-flip-card/lesson-flip-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
	declarations: [LessonFlipCardComponent],
	imports: [CommonModule, RouterModule],
	exports: [LessonFlipCardComponent]
})
export class LessonFlipModuleModule {}
