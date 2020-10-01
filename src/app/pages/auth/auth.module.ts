import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SignUpComponent } from './components/sign-up/sign-up.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
	declarations: [SignUpComponent, LoginComponent],
	imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
	exports: [SignUpComponent, LoginComponent]
})
export class AuthModule {}
