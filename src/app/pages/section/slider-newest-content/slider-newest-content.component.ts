import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-slider-newest-content',
	templateUrl: './slider-newest-content.component.html',
	styleUrls: ['./slider-newest-content.component.scss']
})
export class SliderNewestContentComponent implements OnInit {
	active_slide: number = 0;
	@Input() slide: any = {};
	public apiUrl = environment.api_url;

	constructor() {}

	ngOnInit(): void {}

	activeFlip(id: any) {
		if (this.active_slide == id) {
			this.active_slide = 0;
		} else {
			this.active_slide = id;
		}
	}

	public isMobileCompatible(slide) {
		// TODO: change this for a boolean from API called 'mobile'
		return (
			slide.hardwareCompatibility.filter(
				(hc) =>
					hc.title === 'iPad / iPhone' || hc.title === 'Android Phone / Tablet'
			).length > 0
		);
	}

	public reduceLanguages(slide) {
		return slide.languages.map((l) => l.name.substr(0, 2)).join(', ');
	}
}
