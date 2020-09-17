import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NotificationComponent } from './pages/section/notification/notification.component';
import { ProfileComponent } from './pages/section/profile/profile.component';
import { BaseComponent } from './base/base.component';
import { HomeModule } from './pages/home/home.module';
import { SerachModule } from './pages/search/search.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LessonComponent } from './pages/lesson/lesson.component';

@NgModule({
	declarations: [
		AppComponent,
		NotificationComponent,
		ProfileComponent,
		BaseComponent,
		SignUpComponent,
		LessonComponent
	],
	imports: [
		HttpClientModule,
		BrowserModule,
		HomeModule,
		SerachModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
