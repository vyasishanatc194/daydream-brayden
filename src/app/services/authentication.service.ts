import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../model/user.model';
import { ApiService } from './api.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
	private currentUserSubject: BehaviorSubject<User>;
	public currentUser: Observable<User>;

	constructor(private http: HttpClient, public api: ApiService) {
		this.currentUserSubject = new BehaviorSubject<User>(
			JSON.parse(localStorage.getItem('currentUser'))
		);
		this.currentUser = this.currentUserSubject.asObservable();
	}

	public get currentUserValue(): User {
		return this.currentUserSubject.value;
	}

	login(username: string, password: string) {
		return this.api.submit('auth/local', { username, password }).pipe(
			map((user) => {
				// login successful if there's a jwt token in the response
				if (user && user.token) {
					// store user details and jwt token in local storage to keep user logged in between page refreshes
					localStorage.setItem('currentUser', JSON.stringify(user));
					this.currentUserSubject.next(user);
				}

				return user;
			})
		);
	}

	register(user: User) {
		return this.http.post(`/users/register`, user);
	}

	logout() {
		// remove user from local storage to log user out
		localStorage.removeItem('currentUser');
		this.currentUserSubject.next(null);
	}
}
