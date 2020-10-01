import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SubHeaderComponent } from './components/sub-header/sub-header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { EducatorModeComponent } from './components/educator-mode/educator-mode.component';
import { AuthModule } from '../../auth/auth.module';

@NgModule({
	declarations: [
		ProfileComponent,
		HeaderComponent,
		SubHeaderComponent,
		SearchBarComponent,
		EducatorModeComponent
	],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule,
		AuthModule
	],
	exports: [
		ProfileComponent,
		HeaderComponent,
		SubHeaderComponent,
		SearchBarComponent,
		EducatorModeComponent
	]
})
export class HeaderModule {}
