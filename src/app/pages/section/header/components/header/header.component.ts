import {
	Component,
	OnInit,
	ViewChild,
	ElementRef,
	HostListener
} from '@angular/core';

import { Router } from '@angular/router';
import { ISubscription } from 'rxjs/Subscription';
import { ApiService } from 'src/app/services/API/api.service';
import { EventService } from 'src/app/services/event/event.service';
import { environment } from '../../../../../../environments/environment';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	@ViewChild('stickyMenu') menuElement: ElementRef;
	environment: any = environment;
	private subscription: ISubscription;
	sticky: boolean = false;
	elementPosition: any = 50;
	currentPage = '';
	pageData: any = {};
	public educatorModeOn: boolean = false;

	constructor(
		public api: ApiService,
		private router: Router,
		private event: EventService
	) {
		// Set Current Page
		router.events.subscribe((url: any) => {
			this.currentPage = this.router.url;
		});
		// Receive event and data from another component
		this.subscription = this.event.currentData.subscribe((data: any) => {
			if (data.action === 'set_page') {
				this.currentPage = data.dataobj.page;
				if (this.currentPage !== '' && this.currentPage !== '/') {
					this.sticky = true;
				}
			}
			if (data.action === 'set_flag_mode') {
				this.educatorModeOn = data.dataobj.educatorModeOn;
			}
		});
	}

	ngOnInit() {
		this.getpageDetail('home-page');
	}

	// Get home page data from api
	getpageDetail(slug: any) {
		this.api.getData(slug, []).subscribe(
			(result) => {
				this.pageData = result;
			},
			() => {}
		);
	}

	// Set logo sticky effect on scroll down page
	@HostListener('window:scroll', ['$event']) handleScroll() {
		const windowScroll = window.pageYOffset;
		if (windowScroll >= this.elementPosition) {
			this.sticky = true;
		} else {
			if (this.currentPage === '' || this.currentPage === '/') {
				this.sticky = false;
			}
		}
	}

	// Redirect to another route or page
	gotoRoute(route: string) {
		this.currentPage = route;
		this.router.navigate(['/' + route]);
	}

	// Unsubscribe event before leave component
	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}
