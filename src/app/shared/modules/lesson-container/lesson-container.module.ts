import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonContainerComponent } from './lesson-container/lesson-container.component';
import { LessonCardModule } from '../lesson-card/lesson-card.module';
import { LessonFlipModuleModule } from '../lesson-flip-module/lesson-flip-module.module';

@NgModule({
	declarations: [LessonContainerComponent],
	imports: [CommonModule, LessonCardModule, LessonFlipModuleModule],
	exports: [LessonContainerComponent]
})
export class LessonContainerModule {}
