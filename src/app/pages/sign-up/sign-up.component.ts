import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { AlertService } from 'src/app/services/alert.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

@Component({
	selector: 'app-sign-up',
	templateUrl: './sign-up.component.html',
	styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
	registerForm: FormGroup;
	loading = false;
	submitted = false;

	constructor(
		private event: EventService,
		private formBuilder: FormBuilder,
		private router: Router,
		private authenticationService: AuthenticationService,
		private alertService: AlertService
	) {
		const action_ob = {
			action: 'set_page',
			redirect_to: '',
			dataobj: { page: this.router.url }
		};
		this.event.globleEvent(action_ob);

		// redirect to home if already logged in
		if (this.authenticationService.currentUserValue) {
			this.router.navigate(['/']);
		}
	}

	ngOnInit() {
		this.registerForm = this.formBuilder.group({
			firstName: ['', Validators.required],
			lastName: ['', Validators.required],
			email: ['', Validators.required],
			institueName: ['', Validators.required],
			institueType: ['', Validators.required],
			institueCity: ['', Validators.required],
			institueState: ['', Validators.required],
			institueZip: ['', Validators.required],
			institueSubject: ['', Validators.required],
			hearAbout: [''],
			reasonJoining: ['']
		});
	}

	// convenience getter for easy access to form fields
	get f() {
		return this.registerForm.controls;
	}

	onSubmit() {
		this.submitted = true;

		// stop here if form is invalid
		if (this.registerForm.invalid) {
			return;
		}

		this.loading = true;
		this.authenticationService
			.register(this.registerForm.value)
			.pipe(first())
			.subscribe(
				(data) => {
					this.alertService.success('Registration successful', true);
					this.router.navigate(['/login']);
				},
				(error) => {
					this.alertService.error(error);
					this.loading = false;
				}
			);
	}
}
