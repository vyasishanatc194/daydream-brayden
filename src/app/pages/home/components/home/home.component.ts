import { Component, OnInit } from '@angular/core';
import { OwlOptions, SlidesOutputData } from 'ngx-owl-carousel-o';
import { ISubscription } from 'rxjs/Subscription';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';
import { EventService } from 'src/app/services/event.service';
import { Lesson } from 'src/app/model/lesson.model';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	public educatorModeOn: boolean = false;
	private subscription: ISubscription;
	customOptions: OwlOptions = null;
	environment: any = environment;
	pageData: any = {};
	public slides: Lesson[] = [];

	activeSlides: SlidesOutputData;
	constructor(private event: EventService, public api: ApiService) {}

	ngOnInit(): void {
		this.subscription = this.event.currentData.subscribe((data: any) => {
			if (data.action === 'set_flag_mode') {
				this.educatorModeOn = data.dataobj.educatorModeOn;
			}
		});
		this.getpageDetail('home-page');

		// get newest slider data
		this.api
			.getData('lessons', null)
			.toPromise()
			.then((res) => {
				this.slides = res;
			});
	}

	featureOptions: OwlOptions = {
		loop: true,
		margin: 0,
		smartSpeed: 2000,
		autoplay: false,
		autoplayHoverPause: true,
		dots: false,
		nav: true,
		navText: [
			'<span class="span-roundcircle left-roundcircle"><i class="fas fa-chevron-left"></i></span>',
			'<span class="span-roundcircle owlnext-custom"><i class="fas fa-chevron-right "></i></span>'
		],
		responsive: {
			0: {
				items: 2,
				nav: true
			},
			768: {
				items: 2,
				nav: false
			},

			1000: {
				items: 3,
				nav: true
			},
			1025: {
				items: 4,
				nav: true,
				loop: true
			}
		}
	};

	newestOptions: OwlOptions = {
		loop: true,
		center: false,
		mouseDrag: true,
		stagePadding: 70,
		margin: 0,
		smartSpeed: 2000,
		autoplay: false,
		autoplayHoverPause: true,
		dots: false,
		autoHeight: true,
		nav: true,
		navText: [
			'<span class="span-roundcircle left-roundcircle"><i class="fas fa-chevron-left"></i></span>',
			'<span class="span-roundcircle owlnext-custom"><i class="fas fa-chevron-right "></i></span>'
		],
		responsive: {
			0: {
				items: 1,
				nav: true
			},
			768: {
				items: 2,
				nav: false
			},

			1000: {
				items: 3,
				nav: true
			},
			1025: {
				items: 4,
				nav: true,
				loop: true
			}
		}
	};

	// Get slider data from api
	getpageDetail(slug: any) {
		this.api.getData(slug, []).subscribe(
			(result) => {
				this.pageData = result;
				this.loadHeroSlider();
			},
			(error) => {}
		);
	}

	loadHeroSlider() {
		this.customOptions = {
			loop: true,
			margin: 0,
			smartSpeed: 2000,
			autoplay: true,
			autoplayTimeout: 4000,
			autoplayHoverPause: true,
			dots: true,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			mouseDrag: false,
			touchDrag: true,
			navText: [
				'<span class="span-roundcircle left-roundcircle"><i class="fas fa-chevron-left"></i></span>',
				'<span class="span-roundcircle right-roundcircle"><i class="fas fa-chevron-right"></i></span>'
			],
			responsive: {
				0: {
					items: 1,
					nav: false
				},
				768: {
					items: 1,
					nav: true
				},

				1000: {
					items: 1,
					nav: true
				},
				1025: {
					items: 1,
					nav: true,
					loop: true
				}
			}
		};
	}

	// on click show model popup
	toggelModel: boolean = false;
	loginModelToggel() {
		this.toggelModel = !this.toggelModel;
	}
}
