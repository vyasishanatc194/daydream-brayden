import { Component, OnInit } from '@angular/core';
import { ISubscription } from 'rxjs/Subscription';
import { EventService } from 'src/app/services/event/event.service';

@Component({
	selector: 'app-slider-community',
	templateUrl: './slider-community.component.html',
	styleUrls: ['./slider-community.component.scss']
})
export class SliderCommunityComponent implements OnInit {
	public communityPosts = [
		{
			title: 'Featured Post',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			name: 'Community Member',
			date: new Date(),
			comments: Math.round(Math.random() * 99),
			likes: Math.round(Math.random() * 99)
		},
		{
			title: 'Most Recent Post',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			name: 'Community Member',
			date: new Date(),
			comments: Math.round(Math.random() * 99),
			likes: Math.round(Math.random() * 99)
		},
		{
			title: 'Top Post',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			name: 'Community Member',
			date: new Date(),
			comments: Math.round(Math.random() * 99),
			likes: Math.round(Math.random() * 99)
		},
		{
			title: 'Featured Event',
			content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			name: 'Community Member',
			date: new Date(),
			comments: Math.round(Math.random() * 99),
			likes: Math.round(Math.random() * 99)
		}
	];

	constructor(private event: EventService) {}

	private subscription: ISubscription;
	public educatorModeOn: boolean = false;
	public currentPage = '';

	ngOnInit(): void {
		this.subscription = this.event.currentData.subscribe((data: any) => {
			this.currentPage = data.dataobj.page;
			if (data.action === 'set_flag_mode') {
				this.educatorModeOn = data.dataobj.educatorModeOn;
			}
		});
	}

	public getCommunityPostsBySize(size: number = 4) {
		return this.communityPosts.slice(0, size);
	}
}
