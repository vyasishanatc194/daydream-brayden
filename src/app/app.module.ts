import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderModule } from './pages/section/header/header.module';
import { HomeModule } from './pages/home/home.module';
import { SerachModule } from './pages/search/search.module';
import { LessonModule } from './pages/lesson/lesson.module';
import { FooterComponent } from './pages/section/footer/footer.component';

@NgModule({
	declarations: [AppComponent, FooterComponent],
	imports: [
		HttpClientModule,
		BrowserModule,
		HeaderModule,
		HomeModule,
		SerachModule,
		LessonModule,
		BrowserAnimationsModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
