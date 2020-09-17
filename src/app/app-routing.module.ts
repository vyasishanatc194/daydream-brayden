import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { SearchComponent } from './pages/search/search.component';
import { HomeComponent } from './pages/home/components/home/home.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LessonComponent } from './pages/lesson/lesson.component';

const routes: Routes = [
	{
		path: '',
		component: BaseComponent,
		children: [
			{ path: '', component: HomeComponent },
			{ path: 'home', component: HomeComponent },
			{ path: 'search', component: SearchComponent },
			{ path: 'sign-up', component: SignUpComponent },
			{ path: 'lesson/:id', component: LessonComponent },
			{ path: '**', redirectTo: 'home' }
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
