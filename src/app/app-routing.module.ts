import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/components/home/home.component';
import { LessonComponent } from './pages/lesson/components/lesson/lesson.component';
import { SearchComponent } from './pages/search/components/search/search.component';
import { SignUpComponent } from './pages/auth/components/sign-up/sign-up.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		redirectTo: '',
		pathMatch: 'full'
	},
	{ path: 'home', component: HomeComponent },
	{ path: 'search', component: SearchComponent },
	{ path: 'sign-up', component: SignUpComponent },
	{ path: 'lesson/:id', component: LessonComponent },
	{ path: '**', redirectTo: 'home' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
